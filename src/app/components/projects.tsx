import Heading from "./heading";
import Hr from "./hr";
import ProjectCard from "./project-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Projects({ heading }: any) {
	return (
		<>
			<Heading heading="Projects" />

			<Accordion type="single" collapsible className="w-5/6 mx-auto">
				<AccordionItem value="item-1">
					<AccordionTrigger>Web Development</AccordionTrigger>
					<AccordionContent>
						<Card className="rounded-none flex flex-wrap gap-2 justify-between">
							<ProjectCard repo="graux-website" />
							<ProjectCard repo="weather" />
							<ProjectCard repo="todo-list" />
							<ProjectCard repo="todo-list" />
							<ProjectCard repo="todo-list" />
							<ProjectCard repo="todo-list" />
						</Card>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Mobile App Development</AccordionTrigger>
					<AccordionContent>
						<Card className="rounded-none flex flex-wrap gap-2 justify-between">
							<ProjectCard repo="todo-list" />
							<ProjectCard repo="todo-list" />
							<ProjectCard repo="todo-list" />
						</Card>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Blockchain App Development</AccordionTrigger>
					<AccordionContent>
						<Card className="rounded-none flex flex-wrap gap-2 justify-between">
							<ProjectCard repo="todo-list" />
							<ProjectCard repo="todo-list" />
							<ProjectCard repo="todo-list" />
						</Card>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<Hr />
		</>
	);
}
