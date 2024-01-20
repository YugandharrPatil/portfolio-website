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

export default function CardProject({
  repoName,
  repoDescription,
  languages,
  repoURL,
  hostingURL,
}: CardProjectProps) {
  return (
    <Card className="m-3 w-72 p-3">
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
        <div className="flex gap-2">
          <Button asChild variant="outline" className="text-md">
            <Link target="_blank" href={repoURL as string}>
              Repository
            </Link>
          </Button>
          <Button asChild variant="outline" className="text-md">
            {
              <Link target="_blank" href={(hostingURL as string) || ""}>
                Website
              </Link>
            }
          </Button>
          {/* <Link
            target="_blank"
            className={buttonVariants({ variant: "outline" })}
            href={repoURL as string}
          >
            Repository
          </Link>
          <Link
            target="_blank"
            className={buttonVariants({ variant: "outline" })}
            href={`${hostingURL || "disabled"}`}
          >
            Website
          </Link> */}
        </div>
      </CardContent>
    </Card>
  );
}
