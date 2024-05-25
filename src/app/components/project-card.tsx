import { BookMarked } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
    <Card className="w-72 p-3">
      <CardContent className="flex h-full flex-col justify-around text-center">
        <h3 className="text-lg font-bold">
          <BookMarked className="mr-2 inline h-5 w-5 text-green-700" />
          {repoName}
        </h3>
        <p className="text-lg">{repoDescription}</p>
        <small className="text-md mt-2 font-semibold text-blue-500">
          {languages}
        </small>
        <br />
        <div className="flex justify-center gap-4">
          <Button asChild variant="outline" className="text-lg">
            <Link target="_blank" href={repoURL as string}>
              Repo
            </Link>
          </Button>
          <Button asChild variant="outline" className="text-lg">
            <Link target="_blank" href={(hostingURL as string) || ""}>
              Visit
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
