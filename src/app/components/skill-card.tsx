"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function SkillCard({ lightIcon, darkIcon }: any) {
	const { theme } = useTheme();

	return (
		<Card className="">
			<Image src={theme === "dark" ? lightIcon : darkIcon} alt="webdev" width={50} height={50}></Image>
			<p>Web Development</p>
		</Card>
	);
}
