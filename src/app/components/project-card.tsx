"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function ProjectCard({ repo, alt }: { repo: string; alt: string }) {
	const { theme } = useTheme();

	return (
		<Link href={`https://github.com/YugandharrPatil/${repo}`}>
			<img
				className="w-full min-[704px]:w-[18rem] min-[780px]:w-[20rem] min-[857px]:w-[22rem] min-[896px]:w-[23rem] min-[972px]:w-[25rem] min-[1049px]:w-[27rem] min-[1164px]:w-[30rem] min-[1347px]:w-[23rem] min-[1462px]:w-[25rem] min-[1577px]:w-[27rem] min-[1750px]:w-[30rem]"
				alt={alt}
				src={`https://github-readme-stats.vercel.app/api/pin/?username=YugandharrPatil&repo=${repo}&theme=${
					theme === "dark" ? "algolia" : "default-repocard"
				}`}
			/>
		</Link>
	);
}
