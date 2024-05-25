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
        className={`fixed top-0 z-50 flex h-24 w-full border-b border-gray-800 bg-background ${poppins.variable}`}
      >
        {/* ${
          theme === "light" ? "bg-white" : "bg-dark"
        } */}
        <div className="container relative flex h-full w-full items-center justify-between">
          {/* LOGO */}
          <div>
            <Link href="#">
              <h1
                className={`font-poppins text-3xl font-bold hover:text-neutral-500`}
              >
                Yugz<span className="text-orange-500">.</span>
              </h1>
            </Link>
          </div>

          {/* NAV BUTTONS */}
          {/* <div className="mx-auto flex w-fit"> */}
          {/* DESKTOP NAVBAR */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 transform lg:block">
            {/* buttons flex automatically since they're inline elements */}
            <NavItem navText="Home" target="#" variant="ghost" />
            <NavItem navText="About" target="#about" variant="ghost" />
            <NavItem navText="Skills" target="#skills" variant="ghost" />
            <NavItem navText="Projects" target="/projects" variant="ghost" />
            <NavItem
              newTab
              navText="Blog"
              variant="ghost"
              target="https://yugz.hashnode.dev"
            />
          </div>

          {/* MOBILE NAVBAR */}
          <div className={`flex gap-2 lg:hidden ${poppins.variable}`}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-32">
                <DropdownMenuItem asChild>
                  <span className="w-full bg-background font-poppins">
                    <HelpCircle className="mr-2 inline h-4 w-4" />
                    <Link href="#">About</Link>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <span className="w-full bg-background font-poppins">
                    <Bone className="mr-2 inline h-4 w-4" />
                    <Link href="#">Skills</Link>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <span className="bg-background font-poppins">
                    <Layout className="mr-2 inline h-4 w-4" />
                    <Link href="#">Projects</Link>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <span className="bg-background font-poppins">
                    <Pencil className="mr-2 inline h-4 w-4" />
                    <Link href="https://blog.yugandharr.com" target="_blank">
                      Blog <ExternalLink className="inline h-4 w-4" />
                    </Link>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <span className="bg-background">
                    <Send className="mr-2 inline h-4 w-4" />
                    <Link href="#">Let&apos;s Chat</Link>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
          </div>
          <div className="flex gap-2 max-lg:hidden">
            <NavItem
              navText="Let's Chat"
              bold
              target="#contact"
              variant="outline"
            />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
