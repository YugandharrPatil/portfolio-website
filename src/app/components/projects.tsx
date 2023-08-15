import Heading from "./heading";
import Hr from "./hr";
import ProjectCard from "./project-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Projects() {
	return (
		<>
			<Heading heading="Projects" id="projects" />

			<Accordion type="single" collapsible className="w-5/6 mx-auto">
				<AccordionItem value="item-1">
					<AccordionTrigger className="ml-4 text-[1.05rem]">Web Development</AccordionTrigger>
					<AccordionContent>
						<Card className="flex flex-wrap max-[703px]:justify-center justify-between gap-2">
							<ProjectCard repo="graux-website" alt="graux" />
							<ProjectCard repo="weather" alt="weather-app" />
							<ProjectCard repo="todo-list" alt="todo-list" />
							<ProjectCard repo="free-electric-bicycles" alt="electric-bicycles" />
							<ProjectCard repo="shopping-list" alt="shopping-list" />
							<ProjectCard repo="tindog" alt="tindog" />
							<ProjectCard repo="drumkit" alt="drumkit" />
						</Card>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="ml-4 text-[1.05rem]">Mobile App Development</AccordionTrigger>
					<AccordionContent>
						<Card className="flex flex-wrap max-[703px]:justify-center justify-between gap-2">
							<ProjectCard repo="job-portal" alt="todo-list" />
							{/* <ProjectCard repo="todo-list" alt="todo-list" />
							<ProjectCard repo="todo-list" alt="todo-list" /> */}
						</Card>
					</AccordionContent>
				</AccordionItem>
				{/* <AccordionItem value="item-3">
					<AccordionTrigger>Blockchain App Development</AccordionTrigger>
					<AccordionContent>
						<Card className="flex flex-wrap justify-center gap-4 md:gap-4 md:gap-x-3 lg-gap-2 lg-gap-x-8 xl:gap-2 xl:gap-x-20 2xl:gap-2 2xl:gap-x-16">
				{/* <ProjectCard repo="todo-list" alt="todo-list" />
							<ProjectCard repo="todo-list" alt="todo-list" />
							<ProjectCard repo="todo-list" alt="todo-list" />
						</Card>
					</AccordionContent> */}
				{/* </AccordionItem> */}
				<AccordionItem value="item-3">
					<AccordionTrigger className="ml-4 text-[1.05rem]">Game Development</AccordionTrigger>
					<AccordionContent>
						<Card className="flex flex-wrap justify-center gap-4 md:gap-4 md:gap-x-3 lg-gap-2 lg-gap-x-8 xl:gap-2 xl:gap-x-20 2xl:gap-2 2xl:gap-x-16">
							<ProjectCard repo="desert-runner" alt="desert-runner" />
							<ProjectCard repo="gold-rush" alt="gold-rush" />
							{/* <ProjectCard repo="todo-list" alt="todo-list" /> */}
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
