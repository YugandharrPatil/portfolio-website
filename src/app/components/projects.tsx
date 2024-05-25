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
            key={repo.id}
            repoName={repos[`${id}`][0].name}
            repoDescription={repos[`${id}`][0].description}
            languages={repos[`${id}`][0].language}
            repoURL={repos[`${id}`][0].html_url}
            hostingURL={repos[`${id}`][0].homepage}
          />
        ))}
        <Link href="/projects" className="self-end">
          <Card className="flex w-72 cursor-pointer items-center justify-center p-3 text-xl font-bold hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
            See More...
          </Card>
        </Link>
      </div>
    </main>
  );
}
