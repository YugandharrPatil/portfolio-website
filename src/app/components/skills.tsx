"use client";
import { devOps, gameDev, languages, misc, webDev } from "@/snippets/skills";
import Card from "./card";
import ImageIcon from "./image-icon";

export default function Skills() {
  return (
    <main className="container">
      <h1 className="heading">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <Card>
          <h1 className="skillsHeading">Languages</h1>
          <div className="skillsContainer">
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
          <div className="skillsContainer">
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
          <div className="skillsContainer">
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
          <div className="skillsContainer">
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
          <div className="skillsContainer">
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
