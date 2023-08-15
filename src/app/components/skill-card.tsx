"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { Card } from "./ui/card";

export default function SkillCard({ lightIcon, darkIcon, skill, altText, setDescription }: any) {
	const { theme } = useTheme();

	return (
		<Card onClick={setDescription} className="cursor-pointer w-32 h-32 p-5 m-2 text-center hover:bg-slate-100 dark:hover:bg-slate-900">
			<Image className="mx-auto" src={theme === "dark" ? lightIcon : darkIcon} alt={altText} width={50} height={50}></Image>
			<p>{skill}</p>
		</Card>
	);
}
