import { NextApiRequest, NextApiResponse } from 'next'
import { 
	DataSource ,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn
} from 'typeorm'

@Entity()
class ParticipantsDao {
	@PrimaryGeneratedColumn("uuid")
	id!: string
	@Column({type: 'varchar'})
	name: string | undefined
	@Column({type: 'varchar', nullable: true})
	costume: string | undefined

}

@Entity()
class AnswerDao {
	@PrimaryGeneratedColumn("uuid")
	id!: string

	@Column({type: 'varchar'})
	answer: string | undefined

	@Column({type: 'varchar'})
	sentBy: string | undefined

	@Column({type: 'varchar' })
	fingerPrint: string | undefined

	@CreateDateColumn()
	createdAt!: Date
}


const dataSource = new DataSource({
	type: "postgres",
	url: process.env.PG_CONNECTION_URL,
	logging: false,
	synchronize: true,
	entities: [
		AnswerDao,
		ParticipantsDao
	]
})


async function getDs() {
	if(dataSource.isInitialized) {
		return dataSource
	}
	return dataSource.initialize()
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const ds = await getDs()
	const answerRepo = ds.getRepository(AnswerDao)
	const participantsRepo = ds.getRepository(ParticipantsDao)
	if(req.method == 'GET') {
		const participants = await participantsRepo.find()
		return res.status(200).json({
			participants
		})
	}

	if(req.method == 'POST') {
		const body = req.body as { answer: string, sentBy: string, fingerPrint: string }

		try {
			await answerRepo.insert({
				answer: body.answer,
				sentBy: body.sentBy,
				fingerPrint: body.fingerPrint
			})

			return res.status(200).json({
				message: 'Answer recorded'
			})
		} catch(e) {
			return res.status(500).json({
				message: 'Something went wrong',
				error: e
			})
		}
	}
	return res.status(404).json({
		message: 'Not implemented'
	})
}