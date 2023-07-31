"use client";
import { Button } from "@/app/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import Hr from "./hr";
import { Card } from "./ui/card";

export default function Skills({ heading }: any) {
	const { theme } = useTheme();

	const [skillDescription, setSkillDescription] = useState("All Skills Description");

	const webdev = "Sample webdev content";
	const appdev = "Sample appdev content";
	const blockchaindev = "Sample blockchaindev content";
	const cybersec = "Sample cybersec content";
	const gamedev = "Sample gamedev content";
	const devops = "Sample devops content";

	return (
		<>
			<h1 className="text-3xl text-center mt-10" id="skills">
				{heading}
			</h1>
			<Card className="w-5/6 mx-auto flex gap-2">
				<div className="buttons flex-wrap w-1/2 flex">
					{/* WEBDEV */}
					<Card
						onClick={() => setSkillDescription(webdev)}
						className="cursor-pointer w-32 h-32 p-5 m-1 text-center hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50"
					>
						<Image className="mx-auto" src={theme === "dark" ? "/webdevlight.png" : "/webdevdark.png"} alt="webdev" width={50} height={50}></Image>
						<p>Web Dev</p>
					</Card>

					{/* APPDEV */}
					<Card
						onClick={() => setSkillDescription(appdev)}
						className="w-32 h-32 p-5 m-1 text-center cursor-pointer hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50"
					>
						<Image className=" mx-auto" src={theme === "dark" ? "/appdevlight.png" : "/appdevdark.png"} alt="webdev" width={50} height={50}></Image>
						<p>App Dev</p>
					</Card>

					{/* BLOCKCHAINDEV */}
					<Card
						onClick={() => setSkillDescription(blockchaindev)}
						className="cursor-pointer w-32 h-32 p-5 m-1 text-center hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50"
					>
						<Image
							className=" mx-auto"
							src={theme === "dark" ? "/blockchaindevlight.png" : "/blockchaindevdark.png"}
							alt="webdev"
							width={50}
							height={50}
						></Image>
						<p>Blockchain Dev</p>
					</Card>

					{/* CYBERSEC */}
					<Card
						onClick={() => setSkillDescription(cybersec)}
						className="cursor-pointer w-32 h-32 p-5 m-1 text-center hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50"
					>
						<Image
							className=" mx-auto"
							src={theme === "dark" ? "/cyberseclight.png" : "/cybersecdark.png"}
							alt="webdev"
							width={50}
							height={50}
						></Image>
						<p>Cyber Security</p>
					</Card>

					{/* GAMEDEV */}
					<Card
						onClick={() => setSkillDescription(gamedev)}
						className="cursor-pointer w-32 h-32 p-5 m-1 text-center hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50"
					>
						<Image
							className="cursor-pointer mx-auto"
							src={theme === "dark" ? "/gamedevlight.png" : "/gamedevdark.png"}
							alt="webdev"
							width={50}
							height={50}
						></Image>
						<p>Game Dev</p>
					</Card>
				</div>
				<p className="text-xl">{skillDescription}</p>
			</Card>
			<Hr />
		</>
	);
}
