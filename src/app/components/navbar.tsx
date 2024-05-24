// FONTS
import { poppins } from "@/utils/fonts";

// UI
import {
  Bone,
  ExternalLink,
  HelpCircle,
  Layout,
  Menu,
  Pencil,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// UTILS
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

// COMPONENTS
import NavItem from "./nav-item";

export default function Navbar() {
  return (
    <>
      <nav
        // className={`fixed z-50 h-24 w-full border-b border-gray-800 bg-background ${poppins.variable}`}
        className={`fixed z-50 flex h-24 w-full border-b border-gray-800 bg-background ${poppins.variable}`}
      >
        {/* ${
          theme === "light" ? "bg-white" : "bg-dark"
        } */}
        {/* <div className="container flex h-full w-full items-center justify-between"> */}
        <div className="container my-auto flex h-16 w-full gap-4">
          {/* LOGO */}
          <div className="my-auto w-1/3">
            <Link href="#">
              <h1
                className={`logo font-poppins text-3xl font-bold hover:text-neutral-500`}
              >
                Yugz<span className="text-orange-500">.</span>
              </h1>
            </Link>
          </div>
          {/* NAV ITEMS */}
          {/* <div className="mx-auto flex w-fit"> */}
          <div className="m-auto flex w-1/3">
            {/* DESKTOP NAVBAR */}
            <div className="mx-auto hidden lg:block">
              <NavItem navText="Home" target="#" variant="ghost" />
              <NavItem navText="About" target="#about" variant="ghost" />
              {/* <NavItem navText="Skills" target="#skills" /> */}
              <NavItem navText="Projects" target="#projects" variant="ghost" />
              <NavItem
                newTab={true}
                navText="My Blog"
                variant="ghost"
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
          </div>
          <div className="my-auto flex w-1/3 justify-end gap-4">
            <NavItem navText="Contact Me" target="#contact" variant="outline" />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
