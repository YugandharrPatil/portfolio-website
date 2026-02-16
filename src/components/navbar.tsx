// UI
import {
  Bone,
  BrainCogIcon,
  ExternalLink,
  HelpCircle,
  Home,
  Layout,
  Menu,
  Pencil,
  Send,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// UTILS
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const BLOG_LINK = "https://yugz.hashnode.dev";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  desktop?: boolean;
  mobile?: boolean;
  mobileIcon?: LucideIcon;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#", desktop: true },
  {
    label: "About",
    href: "#about",
    desktop: true,
    mobile: true,
    mobileIcon: HelpCircle,
  },
  {
    label: "Skills",
    href: "#skills",
    desktop: true,
    mobile: true,
    mobileIcon: Bone,
  },
  {
    label: "Projects",
    href: "#projects",
    desktop: true,
    mobile: true,
    mobileIcon: Layout,
  },
  {
    label: "Blog",
    href: BLOG_LINK,
    desktop: true,
    mobile: true,
    external: true,
    mobileIcon: Pencil,
  },
  {
    label: "Let's Chat",
    href: "#contact",
    mobile: true,
    mobileIcon: Send,
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="bg-background font-poppins fixed top-0 z-50 flex h-24 w-full border-b border-gray-800">
        <div className="relative container flex h-full w-full items-center justify-between">
          {/* LOGO */}
          <div>
            <Link href="/" scroll>
              <h1 className="text-3xl font-bold hover:text-neutral-500">
                Yugz<span className="text-orange-500">.</span>
              </h1>
            </Link>
          </div>

          {/* NAV BUTTONS */}
          {/* DESKTOP NAVBAR */}
          <div
            className={`absolute left-1/2 hidden -translate-x-1/2 transform lg:block`}
          >
            {/* buttons flex automatically since they're inline elements */}
            {NAV_ITEMS.filter((item) => item.desktop).map((item) => (
              <Button
                key={`${item.label}-${item.href}`}
                className="mx-1 text-base tracking-wide"
                variant="ghost"
                asChild
              >
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="flex items-center"
                >
                  <span>{item.label}</span>
                  {item.external && (
                    <ExternalLink className="ms-1 inline h-5 w-5" />
                  )}
                </Link>
              </Button>
            ))}
          </div>

          {/* MOBILE NAVBAR */}
          <div className={`flex gap-2 lg:hidden`}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-32">
                {NAV_ITEMS.filter((item) => item.mobile).map((item) => {
                  const Icon = item.mobileIcon;
                  return (
                    <DropdownMenuItem
                      key={`${item.label}-${item.href}`}
                      asChild
                    >
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        className="bg-background flex w-full items-center"
                      >
                        {Icon && <Icon className="mr-2 inline h-4 w-4" />}
                        <span>{item.label}</span>
                        {item.external && (
                          <ExternalLink className="ml-1 inline h-4 w-4" />
                        )}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
          </div>
          <div className="flex gap-2 max-lg:hidden">
            <Button
              className="mx-1 text-base font-bold tracking-wide"
              variant="outline"
            >
              <Link href="#contact">Let&apos;s Chat</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
