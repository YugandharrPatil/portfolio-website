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
			<nav className="h-20 sticky top-0 z-50 bg-dark">
				<div className="h-full items-center flex justify-between gap-2 w-5/6 mx-auto">
					<Link href="#">
						<h1 className={`logo text-5xl mt-2 ${stalemate.className}`}>Yugandhar</h1>
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
