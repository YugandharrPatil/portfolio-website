"use client";

import { useTheme } from "next-themes";
import { Lato, Stalemate } from "next/font/google";
import Link from "next/link";
import NavItem from "./nav-item";
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

	return (
		<>
			<nav className={`h-24 sticky top-0 z-50 ${theme !== undefined && theme === "dark" ? "bg-dark" : "bg-white"}`}>
				<div className="h-full items-center flex justify-between gap-2 w-5/6 mx-auto">
					<Link href="#">
						<h1 className={`logo text-[3.2rem] mt-0 ${stalemate.className}`}>Yugandhar</h1>
					</Link>
					<div className="flex gap-4">
						<NavItem navText="Skills" target="#skills" />
						<NavItem navText="Projects" target="#projects" />
						<NavItem navText="Contact Me" target="#contact" />
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</>
	);
}
