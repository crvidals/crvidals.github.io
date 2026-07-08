import { useCallback, useEffect, useState } from "react";
const USERNAME = "crvidals";
async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
    }
    return response.json();
}
export function useGitHub() {
    const [state, setState] = useState({
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
                fetchJson(`https://api.github.com/users/${USERNAME}`),
                fetchJson(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=30`),
            ]);
            const filtered = repos.filter((repo) => !repo.fork);
            const sorted = [...filtered].sort((a, b) => b.stargazers_count - a.stargazers_count);
            const topRepos = sorted.slice(0, 8);
            const languageSet = new Set();
            for (const repo of topRepos) {
                if (repo.language) {
                    languageSet.add(repo.language);
                }
            }
            const totalStars = sorted.reduce((sum, repo) => sum + repo.stargazers_count, 0);
            setState({
                user,
                repos: topRepos,
                languages: Array.from(languageSet).sort(),
                totalStars,
                loading: false,
                error: null,
            });
        }
        catch (err) {
            const message = err instanceof Error ? err.message : "Error al cargar datos de GitHub";
            setState((prev) => ({ ...prev, loading: false, error: message }));
        }
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return { ...state, retry: fetchData };
}
