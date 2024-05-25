// import fetchRepos from "@/lib/utils/calls";
// import { poppins } from "@/utils/fonts";
// import NavItem from "../components/nav-item";
// import ProjectCard from "../components/project-card";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";

// export default async function ProjectsPage() {
//   const fetchedRepos = await fetchRepos();
//   let repos: any = [];
//   repos.push(
//     fetchedRepos.filter((repo: any) => repo.name === "lettering-by-muskan"),
//   );
//   repos.push(
//     fetchedRepos.filter((repo: any) => repo.name === "free-electric-bicycles"),
//   );
//   repos.push(fetchedRepos.filter((repo: any) => repo.name === "graux-website"));
//   repos.push(
//     fetchedRepos.filter((repo: any) => repo.name === "whatsapp-clone"),
//   );
//   repos.push(fetchedRepos.filter((repo: any) => repo.name === "weather"));
//   repos.push(fetchedRepos.filter((repo: any) => repo.name === "job-portal"));
//   // fetchedRepos.forEach((repo: any) => console.log(repo.name));
//   return (
//     <main>
//       <nav className="absolute left-1/2 top-6 hidden -translate-x-1/2 transform lg:block">
//         {/* buttons flex automatically since they're inline elements */}
//         <Button
//           variant="outline"
//           className={`mx-1 text-base tracking-wide ${poppins.variable} font-poppins`}
//         >
//           Web Apps
//         </Button>
//         <Button
//           variant="outline"
//           className={`mx-1 text-base tracking-wide ${poppins.variable} font-poppins`}
//         >
//           Games
//         </Button>
//         <Button
//           variant="outline"
//           className={`mx-1 text-base tracking-wide ${poppins.variable} font-poppins`}
//         >
//           Blockchain Projects
//         </Button>
//       </nav>
//       <Card className="mt-24 flex w-fit flex-wrap justify-center gap-4 p-4">
//         {repos.map((repo: any, id: number) => (
//           <ProjectCard
//             key={repo.id}
//             repoName={repos[`${id}`][0].name}
//             repoDescription={repos[`${id}`][0].description}
//             languages={repos[`${id}`][0].language}
//             repoURL={repos[`${id}`][0].html_url}
//             hostingURL={repos[`${id}`][0].homepage}
//           />
//         ))}
//       </Card>
//     </main>
//   );
// }

// USING TABS

import fetchRepos from "@/lib/utils/calls";
import { poppins } from "@/utils/fonts";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../components/project-card";
import ThemeToggle from "../components/theme-toggle";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const WEBDEV_REPOS = [
  "lettering-by-muskan",
  "free-electric-bicycles",
  "graux-website",
  "form-types",
  "whatsapp-clone",
  "weather",
  "job-portal",
  "todo-list",
  "drizzle-next-planetscale-starter-template",
  "drizzle-next-turso-starter-template",
  "discord-frontend-clone",
];

const GAMEDEV_REPOS = ["desert-runner", "gold-rush"];

const BLOCKCHAIN_DEV_REPOS = ["blockchain-from-scratch"];

export default async function ProjectsPage() {
  const fetchedRepos = await fetchRepos();

  let webDevRepos: any = [];
  WEBDEV_REPOS.forEach((thisRepo) =>
    webDevRepos.push(
      fetchedRepos.filter((repo: any) => repo.name === thisRepo),
    ),
  );

  let gameDevRepos: any = [];
  GAMEDEV_REPOS.forEach((thisRepo) =>
    gameDevRepos.push(
      fetchedRepos.filter((repo: any) => repo.name === thisRepo),
    ),
  );

  let blockchainDevRepos: any = [];
  BLOCKCHAIN_DEV_REPOS.forEach((thisRepo) =>
    blockchainDevRepos.push(
      fetchedRepos.filter((repo: any) => repo.name === thisRepo),
    ),
  );
  return (
    <main className="container relative">
      <Button asChild className="absolute">
        <Link href="/">
          <ChevronLeft className="h-5 w-5" />
          Go Back
        </Link>
      </Button>
      <Tabs defaultValue="webDev" className="mt-6 text-center">
        <div className="flex justify-center gap-4">
          <TabsList>
            <TabsTrigger value="webDev">Web Apps</TabsTrigger>
            <TabsTrigger value="gameDev">Games</TabsTrigger>
            <TabsTrigger value="blockchainDev">Blockchain Apps</TabsTrigger>
          </TabsList>
          <ThemeToggle />
        </div>
        <TabsContent value="webDev">
          <div className="mt-24 flex w-fit flex-wrap justify-center gap-4 p-4">
            {webDevRepos.map((repo: any, id: number) => (
              <ProjectCard
                key={repo.id}
                repoName={webDevRepos[`${id}`][0].name}
                repoDescription={webDevRepos[`${id}`][0].description}
                languages={webDevRepos[`${id}`][0].language}
                repoURL={webDevRepos[`${id}`][0].html_url}
                hostingURL={webDevRepos[`${id}`][0].homepage}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="gameDev">
          <div className="mt-24 flex w-fit flex-wrap justify-center gap-4 p-4">
            {gameDevRepos.map((repo: any, id: number) => (
              <ProjectCard
                key={repo.id}
                repoName={gameDevRepos[`${id}`][0].name}
                repoDescription={gameDevRepos[`${id}`][0].description}
                languages={gameDevRepos[`${id}`][0].language}
                repoURL={gameDevRepos[`${id}`][0].html_url}
                hostingURL={gameDevRepos[`${id}`][0].homepage}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="blockchainDev">
          <div className="mt-24 flex w-fit flex-wrap justify-center gap-4 p-4">
            {blockchainDevRepos.map((repo: any, id: number) => (
              <ProjectCard
                key={repo.id}
                repoName={blockchainDevRepos[`${id}`][0].name}
                repoDescription={blockchainDevRepos[`${id}`][0].description}
                languages={blockchainDevRepos[`${id}`][0].language}
                repoURL={blockchainDevRepos[`${id}`][0].html_url}
                hostingURL={blockchainDevRepos[`${id}`][0].homepage}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

// USING CLIENT COMPONENT

// "use client";

// import fetchRepos from "@/lib/utils/calls";
// import { poppins } from "@/utils/fonts";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Heading from "../components/heading";
// import ProjectCard from "../components/project-card";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";

// export default function ProjectsPage() {
//   const [domainRepos, setDomainRepos] = useState<any>([]);
//   const [allRepos, setAllRepos] = useState<any>([]);

//   useEffect(() => {
//     // setAllRepos(fetchRepos());
//     fetch("https://api.github.com/users/YugandharrPatil/repos?per_page=1000")
//       .then((res) => res.json())
//       .then((data) => setAllRepos(data));
//     // console.log(allRepos);
//   }, []);

//   // WEB REPOS
//   let webDevRepos: any = [];
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "lettering-by-muskan"),
//   );
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "free-electric-bicycles"),
//   );
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "graux-website"),
//   );
//   // webDevRepos.push(
//   //   allRepos.filter((repo: any) => repo.name === "whatsapp-clone"),
//   // );
//   webDevRepos.push(allRepos.filter((repo: any) => repo.name === "weather"));
//   webDevRepos.push(allRepos.filter((repo: any) => repo.name === "job-portal"));
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "gramhealth-demo"),
//     allRepos.filter((repo: any) => repo.name === "desert-runner"),
//   );
//   // repos.forEach((repo: any) => console.log(repo.name));

//   // GAME REPOS
//   let gameDevRepos: any = [];
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "lettering-by-muskan"),
//   );
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "free-electric-bicycles"),
//   );
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "graux-website"),
//   );
//   // webDevRepos.push(
//   //   allRepos.filter((repo: any) => repo.name === "whatsapp-clone"),
//   // );
//   webDevRepos.push(allRepos.filter((repo: any) => repo.name === "weather"));
//   webDevRepos.push(allRepos.filter((repo: any) => repo.name === "job-portal"));
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "gramhealth-demo"),
//     allRepos.filter((repo: any) => repo.name === "desert-runner"),
//   );
//   // repos.forEach((repo: any) => console.log(repo.name));

//   // BLOCKCHAIN REPOS
//   let blockchainDevRepos: any = [];
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "lettering-by-muskan"),
//   );
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "free-electric-bicycles"),
//   );
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "graux-website"),
//   );
//   // webDevRepos.push(
//   //   allRepos.filter((repo: any) => repo.name === "whatsapp-clone"),
//   // );
//   webDevRepos.push(allRepos.filter((repo: any) => repo.name === "weather"));
//   webDevRepos.push(allRepos.filter((repo: any) => repo.name === "job-portal"));
//   webDevRepos.push(
//     allRepos.filter((repo: any) => repo.name === "gramhealth-demo"),
//     allRepos.filter((repo: any) => repo.name === "desert-runner"),
//   );
//   // repos.forEach((repo: any) => console.log(repo.name));

//   return (
//     <main className="container">
//       <nav className="absolute left-1/2 top-6 hidden -translate-x-1/2 transform lg:block">
//         {/* buttons flex automatically since they're inline elements */}
//         <Button
//           onClick={() => setDomainRepos(webDevRepos)}
//           variant="outline"
//           className={`mx-1 text-base tracking-wide ${poppins.variable} font-poppins`}
//         >
//           Web Apps
//         </Button>
//         <Button
//           onClick={() => setDomainRepos(gameDevRepos)}
//           variant="outline"
//           className={`mx-1 text-base tracking-wide ${poppins.variable} font-poppins`}
//         >
//           Games
//         </Button>
//         <Button
//           onClick={() => setDomainRepos(blockchainDevRepos)}
//           variant="outline"
//           className={`mx-1 text-base tracking-wide ${poppins.variable} font-poppins`}
//         >
//           Blockchain Projects
//         </Button>
//       </nav>
//       <Heading heading="Projects" />
//       <Card className="relative flex w-fit flex-wrap justify-center gap-4 p-4">
//         {domainRepos.map((repo: any, id: number) => (
//           <ProjectCard
//             key={repo.id}
//             repoName={domainRepos[`${id}`][0].name}
//             repoDescription={domainRepos[`${id}`][0].description}
//             languages={domainRepos[`${id}`][0].language}
//             repoURL={domainRepos[`${id}`][0].html_url}
//             hostingURL={domainRepos[`${id}`][0].homepage}
//           />
//         ))}
//       </Card>
//     </main>
//   );
// }
