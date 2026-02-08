import fetchRepos from "@/lib/utils/calls";
import Link from "next/link";
import ProjectCard from "./project-card";
import { Card } from "./ui/card";

const REPOS = [
  "openai-api",
  "blockchain-from-scratch",
  "gramhealth-demo",
  "lettering-by-muskan",
  "desert-runner",
  "gold-rush",
  "weather",
];

export default async function Projects() {
  const fetchedRepos = await fetchRepos();
//   console.log(fetchedRepos);
  let repos: any = [];
  REPOS.forEach((thisRepo) =>
    repos.push(fetchedRepos.filter((repo: any) => repo.name === thisRepo)),
  );

  return (
    <main className="container relative">
      <h1 className="heading">Projects</h1>
      <div className="flex w-fit flex-wrap justify-center gap-4 p-4">
        {repos.map((repo: any, id: number) => (
          <ProjectCard
            key={repos[`${id}`][0].id}
            repoName={repos[`${id}`][0].name}
            repoDescription={repos[`${id}`][0].description}
            languages={repos[`${id}`][0].language}
            repoURL={repos[`${id}`][0].html_url}
            hostingURL={repos[`${id}`][0].homepage}
          />
        ))}
      </div>
    </main>
  );
}
