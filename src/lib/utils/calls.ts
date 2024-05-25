import axios from "axios";

export default async function fetchRepos() {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/YugandharrPatil/repos?per_page=1000",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN}`,
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
}
