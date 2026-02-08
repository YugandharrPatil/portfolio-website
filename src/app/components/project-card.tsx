import { BookMarked } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent } from "./ui/card";

type CardProjectProps = {
  repoName: string;
  repoDescription: string;
  languages: string;
  repoURL: string;
  hostingURL?: string;
};

export default function ProjectCard({
  repoName,
  repoDescription,
  languages,
  repoURL,
  hostingURL,
}: CardProjectProps) {
  return (
    <Card className="w-72 pt-4">
      <CardContent className="flex h-full flex-col justify-around text-center">
        <h3 className="text-lg font-bold">
          <BookMarked className="mr-2 inline h-6 w-6 text-green-700" />
          {repoName}
        </h3>
        <p className="mt-2 text-lg">{repoDescription}</p>
        <small
          className={`mt-2 text-base font-semibold text-blue-500 ${
            languages === "JavaScript"
              ? "text-[#f7df1e]"
              : languages === "TypeScript"
                ? "text-[#007acc]"
                : languages === "Go"
                  ? "text-[#00ADD8]"
                  : languages === "C#"
                    ? "text-[#684D95]"
                    : "text-white"
          }`}
        >
          {languages}
        </small>
        <br />
        <div className="flex justify-center gap-3">
          <Button asChild variant="default" className="text-lg">
            <Link target="_blank" href={repoURL as string}>
              Repo
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="text-lg"
          >
            <Link target="_blank" href={(hostingURL as string) || ""}>
              Visit
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
