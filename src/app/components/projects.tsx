import Heading from "./heading";
import Hr from "./hr";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function Projects({ heading }: any) {
	return (
		<>
			<Heading heading="Projects" />

			<Accordion type="single" collapsible className="w-5/6 mx-auto">
				<AccordionItem value="item-1">
					<AccordionTrigger>Web Development</AccordionTrigger>
					<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Mobile App Development</AccordionTrigger>
					<AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Blockchain App Development</AccordionTrigger>
					<AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
				</AccordionItem>
			</Accordion>
			<Hr />
		</>
	);
}
