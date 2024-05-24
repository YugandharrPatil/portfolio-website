import { poppins } from "@/utils/fonts";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NavItem({
  navText,
  target,
  newTab,
  variant,
}: {
  navText: string;
  target: string;
  newTab?: boolean;
  variant: "ghost" | "outline";
}) {
  return (
    <>
      <Button
        asChild
        variant={variant}
        className={`mx-1 text-base tracking-wide ${poppins.variable} font-poppins`}
      >
        <Link href={target} target={newTab ? "_black" : ""}>
          {navText}
          {newTab && <ExternalLink className="ms-1 inline h-5 w-5" />}
        </Link>
      </Button>
    </>
  );
}
