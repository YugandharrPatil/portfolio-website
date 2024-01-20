"use client";

import {
  Bone,
  ExternalLink,
  HelpCircle,
  Layout,
  Menu,
  Pencil,
  Send,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Stalemate } from "next/font/google";
import Link from "next/link";
import NavItem from "./nav-item";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const stalemate = Stalemate({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <>
      <nav
        className={`fixed z-50 h-24 w-full border-b border-gray-800 bg-background`}
      >
        {/* ${
          theme === "light" ? "bg-white" : "bg-dark"
        } */}
        <div className="container flex h-full w-full items-center justify-between">
          <div className="">
            <Link href="#">
              <h1
                className={`logo text-5xl ${stalemate.className} hover:text-neutral-500`}
              >
                Yugandhar
              </h1>
            </Link>
          </div>
          <div className="flex gap-4">
            {/* DESKTOP NAVBAR */}
            <div className="hidden lg:block">
              <NavItem navText="about" target="#about" />
              <NavItem navText="skills" target="#skills" />
              <NavItem navText="projects" target="#projects" />
              <NavItem navText="contact me" target="#contact" />
              <NavItem
                newTab={true}
                navText="my blog"
                target="https://blog.yugandharr.com"
              />
            </div>
            {/* MOBILE NAVBAR */}
            <div className="dropdown lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32">
                  <DropdownMenuItem asChild>
                    <span className="w-full bg-background">
                      <HelpCircle className="mr-2 inline h-4 w-4" />
                      <Link href="#about">about</Link>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <span className="w-full bg-background">
                      <Bone className="mr-2 inline h-4 w-4" />
                      <Link href="#skills">skills</Link>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <span className="bg-background">
                      <Layout className="mr-2 inline h-4 w-4" />
                      <Link href="#projects">projects</Link>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <span className="bg-background">
                      <Send className="mr-2 inline h-4 w-4" />
                      <Link href="#contact">contact me</Link>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <span className="bg-background">
                      <Pencil className="mr-2 inline h-4 w-4" />
                      <Link href="https://blog.yugandharr.com" target="_blank">
                        my blog <ExternalLink className="inline h-4 w-4" />
                      </Link>
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
