import axios from "axios";
import CardProject from "./card-project";
import Heading from "./heading";
import Hr from "./hr";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const fetchRepos = async () => {
	try {
		const { data } = await axios.get("https://api.github.com/users/YugandharrPatil/repos", {
			headers: {
				auth: process.env.GITHUB_AUTH_TOKEN,
			},
		});
		// console.log(data);
		return data;
	} catch (err) {
		console.error(err);
		return;
	}
};

export default async function Projects() {
	const repos = await fetchRepos();
	let webDevRepos: any = [];
	webDevRepos.push(repos.filter((repo: any) => repo.name === "portfolio-website"));
	webDevRepos.push(repos.filter((repo: any) => repo.name === "form-types"));
	webDevRepos.push(repos.filter((repo: any) => repo.name === "discord-frontend-clone"));
	webDevRepos.push(repos.filter((repo: any) => repo.name === "free-electric-bicycles"));
	webDevRepos.push(repos.filter((repo: any) => repo.name === "graux-website"));

	let appDevRepos: any = [];
	appDevRepos.push(repos.filter((repo: any) => repo.name === "job-portal"));

	return (
		<>
			<Heading heading="Projects" id="projects" />

			<Accordion type="single" collapsible className="w-5/6 mx-auto">
				<AccordionItem value="item-1">
					<AccordionTrigger className="ml-4 text-[1.05rem]">Web Development</AccordionTrigger>
					<AccordionContent>
						<Card className="flex flex-wrap justify-around gap-2 p-3">
							<CardProject
								repoName={webDevRepos[0][0].name}
								repoDescription={webDevRepos[0][0].description}
								languages={webDevRepos[0][0].language}
								repoURL={webDevRepos[0][0].html_url}
								hostingURL={webDevRepos[0][0].homepage}
							/>
							<CardProject
								repoName={webDevRepos[1][0].name}
								repoDescription={webDevRepos[1][0].description}
								languages={webDevRepos[1][0].language}
								repoURL={webDevRepos[1][0].html_url}
								hostingURL={webDevRepos[1][0].homepage}
							/>
							<CardProject
								repoName={webDevRepos[2][0].name}
								repoDescription={webDevRepos[2][0].description}
								languages={webDevRepos[2][0].language}
								repoURL={webDevRepos[2][0].html_url}
								hostingURL={webDevRepos[2][0].homepage}
							/>
							<CardProject
								repoName={webDevRepos[3][0].name}
								repoDescription={webDevRepos[3][0].description}
								languages={webDevRepos[3][0].language}
								repoURL={webDevRepos[3][0].html_url}
								hostingURL={webDevRepos[3][0].homepage}
							/>
							<CardProject
								repoName={webDevRepos[4][0].name}
								repoDescription={webDevRepos[4][0].description}
								languages={webDevRepos[4][0].language}
								repoURL={webDevRepos[4][0].html_url}
								hostingURL={webDevRepos[4][0].homepage}
							/>
						</Card>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="ml-4 text-[1.05rem]">Mobile App Development</AccordionTrigger>
					<AccordionContent>
						<Card className="flex flex-wrap justify-around gap-2 p-3">
							<CardProject
								repoName={appDevRepos[0][0].name}
								repoDescription={appDevRepos[0][0].description}
								languages={appDevRepos[0][0].language}
								repoURL={appDevRepos[0][0].html_url}
								hostingURL={appDevRepos[0][0].homepage}
							/>
						</Card>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<div className="my-40">
				<Hr />
			</div>
		</>
	);
}
