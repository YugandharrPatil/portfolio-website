import axios from "axios";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default async function ProjectCardCustom() {
	try {
		const { data } = await axios.get("https://api.github.com/users/YugandharrPatil/repos");
		const repos = {
			graux: data[12],
		};
	} catch (err) {
		console.log(err);
	}

	return (
		<Card>
			<CardHeader>
				{/* <CardTitle>{repos.graux.name}</CardTitle> */}
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</Card>
	);
}
