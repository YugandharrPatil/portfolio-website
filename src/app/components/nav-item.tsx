import { poppins } from "@/utils/fonts";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NavItem({
  navText,
  target,
  newTab,
  variant,
  bold,
}: {
  navText: string;
  target: string;
  newTab?: boolean;
  variant: "ghost" | "outline";
  bold?: boolean;
}) {
  return (
    <>
      <Button
        asChild
        variant={variant}
        className={`mx-1 text-base tracking-wide ${poppins.variable} ${bold && "font-semibold"} font-poppins`}
      >
        <Link href={target} target={newTab ? "_blank" : ""}>
          {navText}
          {newTab && <ExternalLink className="ms-1 inline h-5 w-5" />}
        </Link>
      </Button>
    </>
  );
}
