"use client";
import { useState } from "react";
import Heading from "./heading";
import Hr from "./hr";
import SkillCard from "./skill-card";
import SkillDescription from "./skill-description";
import { Card } from "./ui/card";

export default function Skills() {
	const [skillDescription, setSkillDescription] = useState("All Skills Description");

	const webdev = "Sample webdev description";
	const appdev = "Sample appdev description";
	const blockchaindev = "Sample blockchaindev description";
	const cybersec = "Sample cybersec description";
	const gamedev = "Sample gamedev description";
	const devops = "Sample devops description";

	return (
		<>
			<Heading heading="Skills" />

			<Card className="w-5/6 mx-auto flex gap-2">
				{/* BUTTONS */}
				<div className="buttons flex-wrap w-1/2 flex">
					<SkillCard
						setDescription={() => setSkillDescription(webdev)}
						altText="webdev"
						lightIcon="/webdevlight.png"
						darkIcon="/webdevdark.png"
						skill="Web Dev"
					/>
					<SkillCard
						setDescription={() => setSkillDescription(appdev)}
						altText="appdev"
						lightIcon="/appdevlight.png"
						darkIcon="/appdevdark.png"
						skill="App Dev"
					/>
					<SkillCard
						altText="blockchaindev"
						setDescription={() => setSkillDescription(blockchaindev)}
						lightIcon="/blockchaindevlight.png"
						darkIcon="/blockchaindevdark.png"
						skill="Blockchain Dev"
					/>
					<SkillCard
						altText="gamedev"
						setDescription={() => setSkillDescription(gamedev)}
						lightIcon="/gamedevlight.png"
						darkIcon="/gamedevdark.png"
						skill="Game Dev"
					/>
					<SkillCard
						altText="devops"
						setDescription={() => setSkillDescription(devops)}
						lightIcon="/devopslight.png"
						darkIcon="/devopsdark.png"
						skill="DevOps"
					/>
					<SkillCard
						altText="cybersec"
						setDescription={() => setSkillDescription(cybersec)}
						lightIcon="/cyberseclight.png"
						darkIcon="/cybersecdark.png"
						skill="Cybersecurity"
					/>
				</div>

				{/* DESCRIPTION */}
				<p className="text-xl">{skillDescription}</p>
				<SkillDescription />
			</Card>
			<Hr />
		</>
	);
}
