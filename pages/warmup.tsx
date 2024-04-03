import { format } from "path";
import React, { useEffect, useState } from "react";

type Equipment = 'bar' | 'hangboard' | 'mat'

type Exercise = {
	name: string;
	description?: string;
	amount: number | null;
	unit?: 's' | 'each side';
	sets?: number | null;
	equipment?: Array<Equipment>;
}
const exercises: Array<Exercise> = [
	{ name: 'No-hang', amount: 30, unit: 's', equipment: ['bar', 'hangboard']},
	{ name: 'Dead hang', amount: 10, unit: 's', sets: 3, equipment: ['bar', 'hangboard'] },
	{ name: 'Standing hip circles', amount: 10, unit: 'each side'},
	{ name: 'Scapula pull ups', amount: 6, sets: 2, equipment: ['bar', 'hangboard'] },
	{ name: 'Fingerboard 20mm +', amount: 10, unit: 's', sets: 2, equipment: ['hangboard'] },
	{ name: 'Deep squat', amount: 30, unit: 's' },
	{ name: 'One arm no-hang', description: 'Band assisted', amount: 10, unit: 's', equipment: ['bar', 'hangboard'] },
	{ name: 'Spiderman with thoracic rotation', amount: 6, unit: 'each side' },
	{ name: 'Cossack squat', amount: 6, unit: 'each side' },
	{ name: 'Fingerboard 15mm +', amount: 6, unit: 's', sets: 2, equipment: ['hangboard'] },
	{ name: 'Pull ups', description: 'Slow', amount: 6, sets: 2, equipment: ['bar'] },
	{ name: 'Hamstring walkout', amount: 3, equipment: ['mat'] },
	{ name: 'Jump lunge', amount: 10 },
	{ name: 'Push ups', amount: 5, sets: 3, equipment: ['mat'] },
]

type divProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function leftPad(number: number, digits: number): string {
	const numberString = number.toString();
	const zerosToAdd = digits - numberString.length;
	if (zerosToAdd <= 0) {
		return numberString;
	}
	const paddedNumber = '0'.repeat(zerosToAdd) + numberString;
	return paddedNumber;
}

const formatTime = (time: number) => {
	const timeInSeconds = time / 1000
	const seconds = Math.floor(timeInSeconds)
	const ms = time % 1000

	return `${leftPad(seconds, 2)}:${leftPad(ms, 3)}`
}

function ExerciseCard(props: { exercise: Exercise, active: boolean } & divProps) {
	const [time, setTime] = useState(Date.now())
	const [startTime, setStartTime] = useState(Date.now())
	const { exercise, active } = props

	useEffect(() => {
		if(active) {
			setStartTime(Date.now())
			const interval = setInterval(() => {
				setTime(Date.now())
			}, 16)
			return () =>  {
				clearInterval(interval)
			}
		}

	}, [exercise, active])

	return (
		<div onClick={props.onClick} className={`exercise-body ${active && 'active'}`}>
			<div className="exercise-head">
				<h3>
					{exercise.name}
				</h3>
				<span className="exercise-tags">
					{
						(exercise?.equipment ?? [])
						.map((equipment, i) => (<span key={i} className={`tag tag-${equipment}`}>{equipment}</span>))
					}
				</span>
			</div>
			<p>{exercise.description}</p>
			<p className={active ? 'big-number' : 'big-number hidden'}>{formatTime(time - startTime)}</p>
			<p>
				{exercise.amount}{exercise.unit === 's' ? exercise.unit : ` ${exercise.unit ?? ''}`}
				<span className="small">
					{exercise.sets && ` x ${exercise.sets}`}
				</span>
			</p>
		</div>
	)
}

export default function Warmup() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)
	return (
		<section className="main section">
			<h1>㊙️💪🔥🧗‍♂️</h1>
			<div className="exercises-container">
				{exercises.map((exercise, i) => (
					<ExerciseCard 
						active={activeIndex === i}
						onClick={(e) => {
							e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center' })
							setActiveIndex(i)
						}} 
						key={i} exercise={exercise}
					></ExerciseCard>
				))}
			</div>
		</section>
	)
}