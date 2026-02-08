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

  const repos = REPOS.map((name) =>
    fetchedRepos.find((repo: any) => repo?.name === name),
  ).filter(Boolean) as any[];

  return (
    <main className="container relative">
      <h1 className="heading">Projects</h1>
      <div className="flex w-fit flex-wrap justify-center gap-4 p-4">
        {repos.map((repo: any) => (
          <ProjectCard
            key={repo.id}
            repoName={repo.name}
            repoDescription={repo.description}
            languages={repo.language}
            repoURL={repo.html_url}
            hostingURL={repo.homepage}
          />
        ))}
      </div>
    </main>
  );
}
