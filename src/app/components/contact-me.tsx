import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { db } from "@/lib/db";
import { messages } from "@/lib/db/schema";
import Heading from "./heading";

const sendMessage = async (data: FormData) => {
	"use server";

	const something = data.get("something")?.valueOf();
	if (typeof something !== "string" || something.length === 0) {
		throw new Error("Please enter a valid name");
	}
	const email = data.get("email")?.valueOf();
	if (typeof email !== "string" || email.length === 0) {
		throw new Error("Please enter an email");
	}
	const message = data.get("message")?.valueOf();
	if (typeof message !== "string" || message.length === 0) {
		throw new Error("Please enter a valid message");
	}

	const obj = {
		something: something,
		email: email,
		message: message,
	};

	try {
		await db.insert(messages).values(obj);
		console.log("New Message:", obj);
	} catch (err) {
		console.log(err);
	}
};

export default function Connect() {
	return (
		<>
			<Heading heading="Connect with Me!" id="contact" />
			<Card className="w-10/12 sm:w-8/12 md:w-8/12 lg:w-7/12 xl:w-5/12 2xl:w-1/3 mx-auto mb-10">
				<CardHeader className="text-center">
					<CardTitle className="text-2xl">Write me a message!</CardTitle>
					<CardDescription>Have a project in mind? Something I can help with?</CardDescription>
				</CardHeader>
				<CardContent>
					<form action={sendMessage}>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input placeholder="Please enter your name" name="something" id="name" autoComplete="off" />
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="email">Email</Label>
								<Input placeholder="Please enter your email" id="email" name="email" autoComplete="off" />
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="message">Your message</Label>
								<Textarea placeholder="Type your message here..." id="message" name="message" />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter>
					<Button type="submit" className="w-full">
						Send Message
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}
