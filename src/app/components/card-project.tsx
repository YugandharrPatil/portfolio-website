import { BookMarked } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type CardProjectProps = {
	repoName: string;
	repoDescription: string;
	languages: string;
	repoURL: string;
	hostingURL?: string;
};

export default function CardProject({ repoName, repoDescription, languages, repoURL, hostingURL }: CardProjectProps) {
	return (
		<>
			<Card className="w-64 text-center py-2">
				<CardContent>
					<h3 className="font-bold text-lg text-center">
						<BookMarked className="h-5 w-5 text-green-700 inline mr-2" />
						{repoName}
					</h3>

					<p className="mt-4">{repoDescription}</p>
					<small className="mt-2 font-semibold text-right text-blue-500">{languages}</small>
					<br />
					<div className="flex gap-2 mt-2">
						<Link target="_blank" className={buttonVariants({ variant: "outline" })} href={repoURL as string}>
							Repository
						</Link>
						<Link target="_blank" className={buttonVariants({ variant: "outline" })} href={`${hostingURL || "disabled"}`}>
							Website
						</Link>
					</div>
				</CardContent>
			</Card>
		</>
	);
}
