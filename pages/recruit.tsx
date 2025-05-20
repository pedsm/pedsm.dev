import { Slider } from "@/components/ui/slider"
import { useEffect, useState } from "react"

export default function Recruit() {
    const [salary, setSalary] = useState(50)
    const gbpFormatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })


	return <section className="main section">
		<h1>Recruit</h1>
        <p>Hey 👋, if you got here is because you want me to join your team. But think about it, do you really want to hire a developer that didn't create an overly complicated minigame in order to flip the script?</p>
        <p>So answer me these questions and I'll get back to you:</p>
        <h2 className="header font-bold">📦 The Package</h2>
        <div>
            <p className="text-2xl">What is the salary?</p>
            <p className="font-semibold header text-2xl text-white">{gbpFormatter.format(salary * 1000)}</p>
            <Slider className="w-full h-4" defaultValue={[50]} max={500} min={30} step={1} onValueChange={(value) => setSalary(value[0])} />
        </div>
        <div>
            <p>Let's talk office.</p>
            <p>
                Remote, hybrid or office? // TODO: make this into a select
            </p>
            <p>
                Hybrid we need to make a dynamic entry for days in the office
            </p>
        </div>
        <div>
            Industry
        </div>
	</section>
}


