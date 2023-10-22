import { NextApiRequest, NextApiResponse } from 'next'
import { 
	DataSource ,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn
} from 'typeorm'

@Entity()
class AnswerDao {
	@PrimaryGeneratedColumn("uuid")
	id!: string

	@Column({type: 'varchar'})
	answer: string | undefined

	@Column({type: 'varchar'})
	sentBy: string | undefined

	@CreateDateColumn()
	createdAt!: Date
}


const dataSource = new DataSource({
	type: "postgres",
	url: process.env.PG_CONNECTION_URL,
	logging: false,
	synchronize: true,
	entities: [
		AnswerDao
	]
})

let ds: DataSource | null = null

dataSource.initialize()
	.then((res) => {
		ds = res
	})
	.catch(console.error)
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if(ds == null) {
		return res.status(500).json({message: 'DS not initialised'})
	}
	const repo = ds.getRepository(AnswerDao)

	const body = req.body as { answer: string, sentBy: string}

	try {
		await repo.insert({
			answer: body.answer,
			sentBy: body.sentBy
		})

		res.status(200).json({
			message: 'Answer recorded'
		})
	} catch(e) {
		res.status(500).json({
			message: 'Something went wrong',
			error: e
		})
	}
}