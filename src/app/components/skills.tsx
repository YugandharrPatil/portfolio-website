"use client";
import { useState } from "react";
import Heading from "./heading";
import Hr from "./hr";
import SkillCard from "./skill-card";
import SkillDescription from "./skill-description";
import { Card } from "./ui/card";

export default function Skills() {
	const [skillDescription, setSkillDescription] = useState("All Skills Description");

	const webdev = {
		heading: "Web Development",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
	};
	const appdev = {
		heading: "Mobile App Development",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
	};
	const blockchaindev = {
		heading: "Blockchain App Development",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
	};
	const cybersec = {
		heading: "Cybersecurity",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
	};
	const gamedev = {
		heading: "Game Development",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
	};
	const devops = {
		heading: "DevOps",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
	};

	return (
		<>
			<Heading heading="Skills" />

			<Card className="w-5/6 mx-auto flex gap-2">
				{/* BUTTONS */}
				<div className="buttons flex-wrap w-1/2 flex">
					<SkillCard
						setDescription={() => setSkillDescription(webdev.heading)}
						altText="webdev"
						lightIcon="/webdevlight.png"
						darkIcon="/webdevdark.png"
						skill="Web Dev"
					/>
					<SkillCard
						setDescription={() => setSkillDescription(appdev.heading)}
						altText="appdev"
						lightIcon="/appdevlight.png"
						darkIcon="/appdevdark.png"
						skill="Mobile App Dev"
					/>
					<SkillCard
						altText="blockchaindev"
						setDescription={() => setSkillDescription(blockchaindev.heading)}
						lightIcon="/blockchaindevlight.png"
						darkIcon="/blockchaindevdark.png"
						skill="Blockchain App Dev"
					/>
					<SkillCard
						altText="gamedev"
						setDescription={() => setSkillDescription(gamedev.heading)}
						lightIcon="/gamedevlight.png"
						darkIcon="/gamedevdark.png"
						skill="Game Dev"
					/>
					<SkillCard
						altText="devops"
						setDescription={() => setSkillDescription(devops.heading)}
						lightIcon="/devopslight.png"
						darkIcon="/devopsdark.png"
						skill="DevOps"
					/>
					<SkillCard
						altText="cybersec"
						setDescription={() => setSkillDescription(cybersec.heading)}
						lightIcon="/cyberseclight.png"
						darkIcon="/cybersecdark.png"
						skill="Cybersecurity"
					/>
				</div>
				{/* DESCRIPTION */}
				<p className="text-xl">{skillDescription}</p>
				<SkillDescription /> {/*this component contains the description for each skill, switches dynamically for each skill*/}
			</Card>
			<Hr />
		</>
	);
}
