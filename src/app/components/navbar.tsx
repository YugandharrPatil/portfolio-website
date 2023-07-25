import { Button } from "@/app/components/ui/button";
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
	return (
		<>
			<nav className="h-20 items-center flex justify-between gap-2 w-5/6 mx-auto">
				<h1 className={`logo text-5xl mt-3 ${stalemate.className}`}>Yugandhar</h1>
				<div className="flex gap-4">
					<Button asChild variant="ghost" className={`text-lg tracking-wide ${lato.className}`}>
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
			</nav>
		</>
	);
}