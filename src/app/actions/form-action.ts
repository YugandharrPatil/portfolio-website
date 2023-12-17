"use server";

import { db } from "@/lib/db";
import { messages } from "@/lib/db/schema";

type fuckingAss = {
	name: string;
	email: string;
	message: string;
};

export default async function addMessage(data: fuckingAss) {
	try {
		await db.insert(messages).values(data);
		console.log("Successfully inserted to database!", data);
	} catch (err) {
		console.log(err);
	}
}
