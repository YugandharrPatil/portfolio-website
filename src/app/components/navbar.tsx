"use client";

import { ThemeProvider } from "@/app/components/theme-provider";
import { Bone, Layout, Menu, Send, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Stalemate } from "next/font/google";
import Link from "next/link";
import NavItem from "./nav-item";
import NavLink from "./nav-link";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const stalemate = Stalemate({
	weight: "400",
	subsets: ["latin"],
});

export default function Navbar() {
	let { theme } = useTheme();

	return (
		<>
			<nav className={`h-24 sticky top-0 z-50 ${theme === "light" ? "bg-white" : "bg-dark"}`}>
				<div className="h-full items-center flex justify-between gap-2 w-11/12 xl:w-5/6 lg:w-11/12 md:w-5/6 sm:w-5/6 mx-auto">
					<Link href="#">
						<h1 className={`logo text-[3.2rem] mt-0 ${stalemate.className}`}>Yugandhar</h1>
					</Link>
					<div className="flex gap-4">
						<div className="md:block hidden">
							<NavItem navText="Skills" target="#skills" />
							<NavItem navText="Projects" target="#projects" />
							<NavItem navText="Contact Me" target="#contact" />
						</div>
						<div className="dropdown md:hidden">
							<DropdownMenu>
								<DropdownMenuTrigger>
									<Button variant="ghost" size="icon">
										<Menu className="h-[1.2rem] w-[1.2rem]" />
										{/* <X className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
										{/* <span className="sr-only">Toggle theme</span> */}
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-32">
									<DropdownMenuItem>
										{/* <NavLink navText="Skills" target="#skills" /> */}
										<Bone className="mr-2 h-4 w-4" />
										<span>
											<Link href="#skills">Skills</Link>
										</span>
									</DropdownMenuItem>
									<DropdownMenuItem>
										{/* <NavLink navText="Projects" target="#projects" /> */}
										<Layout className="mr-2 h-4 w-4" />
										<span>
											<Link href="#projects">Projects</Link>
										</span>
									</DropdownMenuItem>
									<DropdownMenuItem>
										{/* <NavLink navText="Contact Me" target="#contactme" /> */}
										<Send className="mr-2 h-4 w-4" />
										<span>
											<Link href="#contact">Contact Me</Link>
										</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</>
	);
}
