"use client";
import { devOps, gameDev, languages, misc, webDev } from "@/snippets/skills";
import { useTheme } from "next-themes";
import Image from "next/image";
import Card from "./card";
import Heading from "./heading";
import ImageIcon from "./image-icon";

export default function Skills() {
  // const { theme } = useTheme();

  return (
    <main className="container">
      <Heading heading="Skills" />
      <div className="flex flex-wrap justify-center gap-4">
        <Card>
          <h1 className="skillsHeading">Languages</h1>
          <div className="flex gap-5">
            {languages.map((language) => (
              <ImageIcon
                key={language.id}
                imageSrc={language.imageSrc}
                tooltip={language.tooltip}
              />
            ))}
          </div>
        </Card>

        <Card>
          <h1 className="skillsHeading">Architecture</h1>
          <div className="flex gap-5">
            {devOps.map((devOps) => (
              <ImageIcon
                key={devOps.id}
                imageSrc={devOps.imageSrc}
                tooltip={devOps.tooltip}
              />
            ))}
          </div>
        </Card>

        <Card>
          <h1 className="skillsHeading">Web Dev</h1>
          <div className="flex gap-5">
            {webDev.map((tool) => (
              <ImageIcon
                key={tool.id}
                imageSrc={tool.imageSrc}
                tooltip={tool.tooltip}
              />
            ))}
          </div>
        </Card>

        <Card>
          <h1 className="skillsHeading">Game Dev</h1>
          <div className="flex gap-5">
            {gameDev.map((tool) => (
              <ImageIcon
                key={tool.id}
                imageSrc={tool.imageSrc}
                tooltip={tool.tooltip}
              />
            ))}
          </div>
        </Card>

        <Card>
          <h1 className="skillsHeading">Misc</h1>
          <div className="flex gap-5">
            {misc.map((tool) => (
              <ImageIcon
                key={tool.id}
                imageSrc={tool.imageSrc}
                tooltip={tool.tooltip}
              />
            ))}
          </div>
        </Card>
      </div>

      {/* <Card className="lg:flex">
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
      </Card> */}
    </main>
  );
}
