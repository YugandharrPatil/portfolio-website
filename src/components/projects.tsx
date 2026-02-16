import fetchRepos from "@/lib/utils/calls";
import { firestore } from "@/lib/utils/firebase/config";
import { GitHubRepo } from "@/lib/utils/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import ProjectCard from "./project-card";

export default async function Projects() {
  const fetchedRepos = await fetchRepos();
  const q = query(collection(firestore, "repos"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);
  let repos: GitHubRepo[] = [];
  querySnapshot.forEach((doc) => {
    repos.push(doc.data() as GitHubRepo);
  });

  const filteredRepos = repos
    .map((r) => fetchedRepos.find((repo) => repo.name === r.name))
    .filter((repo): repo is GitHubRepo => Boolean(repo));

  // console.log(filteredRepos);

  return (
    <main className="relative container">
      <h1 className="heading">Projects</h1>
      <div className="flex w-fit flex-wrap justify-center gap-4 p-4">
        {filteredRepos.map((repo: GitHubRepo) => (
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
