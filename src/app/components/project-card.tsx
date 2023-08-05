"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function ProjectCard({ repo }: { repo: string }) {
	const { theme } = useTheme();

	return (
		<Link href={`https://github.com/YugandharrPatil/${repo}`}>
			<img
				alt="graux"
				src={`https://github-readme-stats.vercel.app/api/pin/?username=YugandharrPatil&repo=${repo}&theme=${
					theme === "dark" ? "algolia" : "default-repocard"
				}`}
			/>
		</Link>
	);
}
