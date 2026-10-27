// src/lib/github.ts
import "server-only";
import { GitRepository } from "@/lib/interface";

const GITHUB_API = "https://api.github.com";
const USERNAME = "nhl1991";

async function githubFetch<T>(path: string, tags: string[] = []): Promise<T> {
  const response = await fetch(`${GITHUB_API}${path}`, {
    headers: { Authorization: `Bearer ${process.env.GITHUB_PAT}` },
    next: { revalidate: 3600, tags },
  });
  if (!response.ok) throw new Error(`NETWORK_ERROR: ${response.status}`);
  return response.json();
}

export async function getRecentRepos(limit = 5) {
  const repos = await githubFetch<GitRepository[]>(
    `/users/${USERNAME}/repos?sort=pushed&direction=desc&per_page=20`,
    [`repository/${USERNAME}`],
  );
  return repos.filter((r) => !r.private).slice(0, limit);
}
