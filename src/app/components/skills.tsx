"use client";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { useState } from "react";

import Hr from "./hr";

export default function Skills({ heading }: any) {
	const [skillDescription, setSkillDescription] = useState("About my skills");

	return (
		<>
			<h1 className="text-3xl text-center mt-10" id="skills">
				{heading}
			</h1>
			<main className="w-5/6 mx-auto">
				<div className="buttons">
					<button onClick={() => setSkillDescription("Hello")}>
						<Image src="/webdev.png" height={50} width={50} alt="webdev" />
					</button>
					{skillDescription}
				</div>
				<div className="images"></div>
			</main>
			<Hr />
		</>
	);
}
