"use client";
import { useState } from "react";
import Heading from "./heading";
import Hr from "./hr";
import SkillCard from "./skill-card";
import SkillDescription from "./skill-description";
import { Card } from "./ui/card";

export default function Skills() {
	const [skillDescription, setSkillDescription] = useState({ heading: "heading", content: "content" });

	const data = {
		webdev: {
			heading: "Full-Stack Web Development",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
		},
		appdev: {
			heading: "Mobile App Development",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
		},
		blockchaindev: {
			heading: "Blockchain App Development",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
		},
		cybersec: {
			heading: "Cybersecurity",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
		},
		gamedev: {
			heading: "Game Development",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
		},
		devops: {
			heading: "DevOps",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus quidem eligendi tempore doloremque aliquid facere dolorum laboriosam voluptatem! Omnis delectus ducimus illum quasi tenetur! Quis, praesentium quae ullam id recusandae ab quisquam fugiat enim architecto nulla voluptatibus fuga inventore nam dolore. Iste vero asperiores, numquam ut debitis praesentium dolorum.",
		},
	};

	return (
		<>
			<Heading heading="Skills" />

			<Card className="w-5/6 mx-auto flex gap-2">
				{/* BUTTONS */}
				<div className="buttons xl:justify-start flex-wrap w-1/2 2xl:justify-between flex">
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
					<SkillCard
						altText="blockchaindev"
						setDescription={() => setSkillDescription(data.blockchaindev)}
						lightIcon="/blockchaindevlight.png"
						darkIcon="/blockchaindevdark.png"
						skill="Blockchain App Dev"
					/>
					<SkillCard
						altText="gamedev"
						setDescription={() => setSkillDescription(data.gamedev)}
						lightIcon="/gamedevlight.png"
						darkIcon="/gamedevdark.png"
						skill="Game Dev"
					/>
					<SkillCard
						altText="devops"
						setDescription={() => setSkillDescription(data.devops)}
						lightIcon="/devopslight.png"
						darkIcon="/devopsdark.png"
						skill="DevOps"
					/>
					<SkillCard
						altText="cybersec"
						setDescription={() => setSkillDescription(data.cybersec)}
						lightIcon="/cyberseclight.png"
						darkIcon="/cybersecdark.png"
						skill="Cybersecurity"
					/>
				</div>
				{/* DESCRIPTION */}
				<div className="description w-full pr-5">
					<h1 className="text-[1.6rem] font-bold mt-3">{skillDescription.heading}</h1>
					<p className="text-[1.05rem] mt-3">{skillDescription.content}</p>
				</div>
				<SkillDescription /> {/*this component contains the description for each skill, switches dynamically for each skill*/}
			</Card>
			<div className="my-40">
				<Hr />
			</div>
		</>
	);
}
