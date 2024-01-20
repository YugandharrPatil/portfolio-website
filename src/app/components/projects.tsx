import axios, { AxiosBasicCredentials } from "axios";
import CardProject from "./card-project";
import Heading from "./heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const fetchRepos = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/YugandharrPatil/repos?per_page=1000",
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
          Accept: "application/vnd.github+json",
        },
      },
    );
    // console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

export default async function Projects() {
  const repos = await fetchRepos();
  let webDevRepos: any = [];
  webDevRepos.push(
    repos.filter((repo: any) => repo.name === "lettering-by-muskan"),
  );
  webDevRepos.push(
    repos.filter((repo: any) => repo.name === "free-electric-bicycles"),
  );
  webDevRepos.push(repos.filter((repo: any) => repo.name === "graux-website"));
  webDevRepos.push(repos.filter((repo: any) => repo.name === "whatsapp-clone"));
  webDevRepos.push(repos.filter((repo: any) => repo.name === "weather"));
  webDevRepos.push(repos.filter((repo: any) => repo.name === "job-portal"));
  // repos.forEach((repo: any) => console.log(repo.name));

  return (
    <main className="container">
      <Heading heading="Projects" />
      <Card className="flex flex-wrap justify-around">
        {/* {webDevRepos.map((repo: any, index: number) => (
								<CardProject
									key={repo.id}
									repoName={repo[index][0].name}
									repoDescription={repo[index][0].description}
									languages={repo[index][0].language}
									repoURL={repo[index][0].html_url}
									hostingURL={repo[index][0].homepage}
								/>
							))} */}
        <CardProject
          repoName={webDevRepos[0][0].name}
          repoDescription={webDevRepos[0][0].description}
          languages={webDevRepos[0][0].language}
          repoURL={webDevRepos[0][0].html_url}
          hostingURL={webDevRepos[0][0].homepage}
        />
        <CardProject
          repoName={webDevRepos[1][0].name}
          repoDescription={webDevRepos[1][0].description}
          languages={webDevRepos[1][0].language}
          repoURL={webDevRepos[1][0].html_url}
          hostingURL={webDevRepos[1][0].homepage}
        />
        <CardProject
          repoName={webDevRepos[2][0].name}
          repoDescription={webDevRepos[2][0].description}
          languages={webDevRepos[2][0].language}
          repoURL={webDevRepos[2][0].html_url}
          hostingURL={webDevRepos[2][0].homepage}
        />
        <CardProject
          repoName={webDevRepos[3][0].name}
          repoDescription={webDevRepos[3][0].description}
          languages={webDevRepos[3][0].language}
          repoURL={webDevRepos[3][0].html_url}
          hostingURL={webDevRepos[3][0].homepage}
        />
        <CardProject
          repoName={webDevRepos[4][0].name}
          repoDescription={webDevRepos[4][0].description}
          languages={webDevRepos[4][0].language}
          repoURL={webDevRepos[4][0].html_url}
          hostingURL={webDevRepos[4][0].homepage}
        />
        <CardProject
          repoName={webDevRepos[5][0].name}
          repoDescription={webDevRepos[5][0].description}
          languages={webDevRepos[5][0].language}
          repoURL={webDevRepos[5][0].html_url}
          // hostingURL={webDevRepos[5][0].homepage}
        />
      </Card>
    </main>
  );
}
