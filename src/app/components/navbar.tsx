"use client";

import { Button } from "@/app/components/ui/button";
import { useTheme } from "next-themes";
import { Lato, Stalemate } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const stalemate = Stalemate({
	weight: "400",
	subsets: ["latin"],
});

const lato = Lato({
	weight: "400",
	subsets: ["latin"],
});

export default function Navbar() {
	const { theme } = useTheme();

	console.log(theme);

	return (
		<>
			<nav className={`h-20 sticky top-0 z-50 bg-slate-950 ${theme !== undefined && theme === "dark" ? "bg-slate-950" : "bg-white"}`}>
				<div className="h-full items-center flex justify-between gap-2 w-5/6 mx-auto">
					<Link href="#">
						<h1 className={`logo text-[3.2rem] mt-2 ${stalemate.className}`}>Yugandhar</h1>
					</Link>
					<div className="flex gap-4">
						<Button asChild variant="ghost" className={`mr-3 text-lg tracking-wide ${lato.className}`}>
							<Link href="#skills">Skills</Link>
						</Button>
						<Button asChild variant="ghost" className={`text-lg tracking-wide ${lato.className}`}>
							<Link href="#projects">Projects</Link>
						</Button>
						<Button asChild variant="ghost" className={`text-lg tracking-wide ${lato.className}`}>
							<Link href="#contact">Contact Me</Link>
						</Button>
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</>
	);
}
