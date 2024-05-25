import fetchRepos from "@/lib/utils/calls";
import Link from "next/link";
import Heading from "./heading";
import ProjectCard from "./project-card";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default async function Projects() {
  const fetchedRepos = await fetchRepos();
  let repos: any = [];
  repos.push(
    fetchedRepos.filter((repo: any) => repo.name === "lettering-by-muskan"),
  );
  repos.push(
    fetchedRepos.filter((repo: any) => repo.name === "free-electric-bicycles"),
  );
  repos.push(fetchedRepos.filter((repo: any) => repo.name === "graux-website"));
  // repos.push(
  //   fetchedRepos.filter((repo: any) => repo.name === "whatsapp-clone"),
  // );
  repos.push(fetchedRepos.filter((repo: any) => repo.name === "weather"));
  repos.push(fetchedRepos.filter((repo: any) => repo.name === "job-portal"));
  repos.push(
    fetchedRepos.filter((repo: any) => repo.name === "gramhealth-demo"),
    fetchedRepos.filter((repo: any) => repo.name === "desert-runner"),
  );
  // fetchedRepos.forEach((repo: any) => console.log(repo.name));

  return (
    <main className="container">
      <Heading heading="Projects" />
      <Card className="relative flex w-fit flex-wrap justify-center gap-4 p-4">
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
        <Button asChild className="absolute bottom-4 right-4">
          <Link href="/projects">See More...</Link>
        </Button>
      </Card>
    </main>
  );
}
