"use client";

import { devOps, gameDev, languages, misc, webDev } from "@/snippets/skills";
import { StaticImageData } from "next/image";
import Card from "./card";
import ImageIcon from "./image-icon";

type SkillCardType = {
  id: string;
  heading: string;
  iconList: {
    id: number;
    imageSrc: StaticImageData;
    tooltip: string;
  }[];
};

const SKILL_CARDS: SkillCardType[] = [
  {
    id: "languages",
    heading: "Languages",
    iconList: languages,
  },
  {
    id: "devops",
    heading: "Architecture",
    iconList: devOps,
  },
  {
    id: "webdev",
    heading: "Web Dev",
    iconList: webDev,
  },
  {
    id: "gamedev",
    heading: "Game Dev",
    iconList: gameDev,
  },
  {
    id: "misc",
    heading: "Misc",
    iconList: misc,
  },
];

export default function Skills() {
  return (
    <main className="container">
      <h1 className="heading">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {SKILL_CARDS.map((skill) => (
          <Card key={skill.id}>
            <h1 className="my-4 text-lg font-semibold sm:text-xl">
              {skill.heading}
            </h1>
            <div className="flex gap-5 max-[500px]:gap-3">
              {skill.iconList.map((icon) => (
                <ImageIcon
                  key={icon.id}
                  imageSrc={icon.imageSrc}
                  tooltip={icon.tooltip}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
