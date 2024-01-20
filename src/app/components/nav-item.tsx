import { ExternalLink } from "lucide-react";
import { Lato } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function NavItem({
  navText,
  target,
  newTab,
}: {
  navText: string;
  target: string;
  newTab?: boolean;
}) {
  return (
    <>
      <Button
        asChild
        variant="ghost"
        className={`mr-4 text-xl tracking-wide ${lato.className}`}
      >
        <Link href={target} target={newTab ? "_black" : ""}>
          {navText}
          {newTab && <ExternalLink className="ms-1 inline h-5 w-5" />}
        </Link>
      </Button>
    </>
  );
}
