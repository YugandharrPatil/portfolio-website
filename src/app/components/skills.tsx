"use client";
import { skills } from "@/snippets/skills";
import { useTheme } from "next-themes";
import Image from "next/image";
import Heading from "./heading";
import { Card } from "./ui/card";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <main className="container">
      <Heading heading="Skills" />

      <Card className="lg:flex">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className="m-2 p-5 text-center hover:bg-neutral-100 dark:hover:bg-neutral-900 lg:w-1/3"
          >
            <Image
              className="mx-auto h-20 w-20"
              src={theme === "light" ? skill.darkIcon : skill.lightIcon}
              alt={skill.alt}
            ></Image>
            <h3 className="py-2 text-xl font-semibold">{skill.heading}</h3>
            <p>{skill.content}</p>
          </Card>
        ))}
      </Card>
    </main>
  );
}
