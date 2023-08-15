"use client";
import { useState } from "react";
import Heading from "./heading";
import Hr from "./hr";
import SkillCard from "./skill-card";
import { Card } from "./ui/card";

export default function Skills() {
	const [skillDescription, setSkillDescription] = useState({
		heading: "My Skills",
		content:
			"As a self-taught programmer on an incredible journey, I've traversed an inspiring path of growth and discovery. All of what I know, I owe to the most amazing Youtube tutorials, blogs, open-source figures, free repositories without whom, I couldn't have pivoted into this passion of mine!",
	});

	const data = {
		webdev: {
			heading: "Full-Stack Web Development",
			content:
				"I've been developing websites for the past 2 years. I mainly work with NodeJS and am familiar with frameworks like Next, React, Express, Tailwind & Prisma. I've done client work for more than 10 clients up until now. I'm open for client work for developing websites, so feel free to hit me up! Please check my projects below",
		},
		appdev: {
			heading: "Mobile App Development",
			content:
				"I build mobile apps exclusively in React Native. This is something I'm still trying to get grips with. Feel free to check out my app dev project below!",
		},
		blockchaindev: {
			heading: "Blockchain App Development",
			content:
				"I have experience in building blockchain apps in Solidity, Hardhat. I've built a couple of projects on Ethereum & Solana in Solidity. Checkout my projects below!",
		},
		gamedev: {
			heading: "Game Development",
			content:
				"Being an avid gamer, game development is something I'm really passionate about. I taught myself game development since my first year and won a hackathon in my second! I mainly build in the Unity game engine with C#. Checkout my projects below!",
		},
		devops: {
			heading: "DevOps",
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quibusdam deleniti doloremque sit provident quas natus cum quis similique laborum veritatis unde, odio accusantium nihil. Quae delectus ab nisi veritatis.",
		},
		cybersec: {
			heading: "Cybersecurity",
			content:
				"This is something I've recently stepped foot into. I was always fascinated by hacking based movies. I believe the security of our software products should be given as much importance as it's performance and UI!",
		},
	};

	return (
		<>
			<Heading heading="Skills" id="skills" />

			<Card className="w-5/6 mx-auto flex gap-2">
				{/* BUTTONS */}
				<div className="flex justify-around flex-wrap min-w-min min-[1318px]:w-2/3 max-[1082px]:w-2/3 max-[885px]:justify-start max-[885px]:w-1/3">
					<SkillCard
						setDescription={() => setSkillDescription(data.webdev)}
						altText="webdev"
						lightIcon="/webdevlight.png"
						darkIcon="/webdevdark.png"
						skill="Web Dev"
					/>
					<SkillCard
						setDescription={() => setSkillDescription(data.appdev)}
						altText="appdev"
						lightIcon="/appdevlight.png"
						darkIcon="/appdevdark.png"
						skill="Mobile App Dev"
					/>
					{/* <SkillCard
						altText="blockchaindev"
						setDescription={() => setSkillDescription(data.blockchaindev)}
						lightIcon="/blockchaindevlight.png"
						darkIcon="/blockchaindevdark.png"
						skill="Blockchain App Dev"
					/> */}
					<SkillCard
						altText="gamedev"
						setDescription={() => setSkillDescription(data.gamedev)}
						lightIcon="/gamedevlight.png"
						darkIcon="/gamedevdark.png"
						skill="Game Dev"
					/>
					{/* <SkillCard
						altText="devops"
						setDescription={() => setSkillDescription(data.devops)}
						lightIcon="/devopslight.png"
						darkIcon="/devopsdark.png"
						skill="DevOps"
					/> */}
					<SkillCard
						altText="cybersec"
						setDescription={() => setSkillDescription(data.cybersec)}
						lightIcon="/cyberseclight.png"
						darkIcon="/cybersecdark.png"
						skill="Cybersecurity"
					/>
				</div>
				{/* DESCRIPTION */}
				<div className="pr-5 w-full mb-5">
					<h1 className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.6rem] font-bold mt-3">{skillDescription.heading}</h1>
					<p className="text-[1rem] md:text-[1.05rem] mt-3">{skillDescription.content}</p>
				</div>
			</Card>
			<div className="my-40">
				<Hr />
			</div>
		</>
	);
}
