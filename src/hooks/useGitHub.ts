import { useCallback, useEffect, useState } from "react";

interface GitHubUser {
  followers: number;
  following: number;
  public_repos: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

interface GitHubState {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  languages: string[];
  totalStars: number;
  loading: boolean;
  error: string | null;
}

const USERNAME = "crvidals";

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export function useGitHub(): GitHubState & { retry: () => void } {
  const [state, setState] = useState<GitHubState>({
    user: null,
    repos: [],
    languages: [],
    totalStars: 0,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const [user, repos] = await Promise.all([
        fetchJson<GitHubUser>(
          `https://api.github.com/users/${USERNAME}`,
        ),
        fetchJson<GitHubRepo[]>(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=30`,
        ),
      ]);

      const filtered = repos.filter((repo) => !repo.fork);
      const sorted = [...filtered].sort(
        (a, b) => b.stargazers_count - a.stargazers_count,
      );
      const topRepos = sorted.slice(0, 8);

      const languageSet = new Set<string>();
      for (const repo of topRepos) {
        if (repo.language) {
          languageSet.add(repo.language);
        }
      }

      const totalStars = sorted.reduce(
        (sum, repo) => sum + repo.stargazers_count,
        0,
      );

      setState({
        user,
        repos: topRepos,
        languages: Array.from(languageSet).sort(),
        totalStars,
        loading: false,
        error: null,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al cargar datos de GitHub";
      setState((prev) => ({ ...prev, loading: false, error: message }));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, retry: fetchData };
}
