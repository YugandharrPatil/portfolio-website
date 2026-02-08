import axios from "axios";

export default async function fetchRepos(): Promise<any[]> {
  try {
    const token = process.env.GITHUB_AUTH_TOKEN;
    const headers: Record<string, string> = {
      "X-GitHub-Api-Version": "2022-11-28",
      Accept: "application/vnd.github+json",
    };
    // Avoid sending `Bearer undefined` (GitHub will return 401)
    if (token) headers.Authorization = `Bearer ${token}`;

    const { data } = await axios.get(
      "https://api.github.com/users/YugandharrPatil/repos",
      {
        params: { per_page: 100 },
        headers,
      },
    );
    // console.log(data);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("fetchRepos() failed:", err);
    return [];
  }
}
