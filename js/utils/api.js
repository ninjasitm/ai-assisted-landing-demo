/**
 * [api] Lightweight composable for fetching GitHub data.
 * Returns a reactive-style state object and a fetch trigger.
 */

const REPO = "ninjasitm/ai-assisted-landing-demo";
const BASE = "https://api.github.com";

/**
 * useGitHubRepo — composable that fetches core repo metadata.
 * @returns {{ state: object, fetch: Function }}
 */
export function useGitHubRepo() {
	const state = {
		loading: true,
		error: null,
		data: null,
	};

	async function load() {
		console.info("[api] [useGitHubRepo]: Fetching repo metadata");
		try {
			const res = await fetch(`${BASE}/repos/${REPO}`);
			if (!res.ok) throw new Error(`GitHub API ${res.status}`);
			state.data = await res.json();
			console.info(
				"[api] [useGitHubRepo]: Loaded | stars:",
				state.data.stargazers_count,
			);
		} catch (err) {
			console.error("[api] [useGitHubRepo]: Failed |", err.message);
			state.error = err.message;
		} finally {
			state.loading = false;
		}
		return state;
	}

	return { state, load };
}

/**
 * useGitHubContributors — composable that fetches contributor count.
 * @returns {{ state: object, load: Function }}
 */
export function useGitHubContributors() {
	const state = {
		loading: true,
		error: null,
		count: null,
	};

	async function load() {
		console.info("[api] [useGitHubContributors]: Fetching contributors");
		try {
			const res = await fetch(
				`${BASE}/repos/${REPO}/contributors?per_page=1&anon=1`,
			);
			if (!res.ok) throw new Error(`GitHub API ${res.status}`);

			// Use Link header to determine total pages = total contributors
			const link = res.headers.get("Link") || "";
			const match = link.match(/page=(\d+)>; rel="last"/);
			state.count = match ? parseInt(match[1], 10) : (await res.json()).length;
			console.info("[api] [useGitHubContributors]: count =", state.count);
		} catch (err) {
			console.error("[api] [useGitHubContributors]: Failed |", err.message);
			state.error = err.message;
			state.count = null;
		} finally {
			state.loading = false;
		}
		return state;
	}

	return { state, load };
}

/**
 * useGitHubCommits — composable that estimates total commit count.
 * @returns {{ state: object, load: Function }}
 */
export function useGitHubCommits() {
	const state = {
		loading: true,
		error: null,
		count: null,
	};

	async function load() {
		console.info("[api] [useGitHubCommits]: Fetching commit count");
		try {
			const res = await fetch(`${BASE}/repos/${REPO}/commits?per_page=1`);
			if (!res.ok) throw new Error(`GitHub API ${res.status}`);

			const link = res.headers.get("Link") || "";
			const match = link.match(/page=(\d+)>; rel="last"/);
			state.count = match ? parseInt(match[1], 10) : (await res.json()).length;
			console.info("[api] [useGitHubCommits]: count =", state.count);
		} catch (err) {
			console.error("[api] [useGitHubCommits]: Failed |", err.message);
			state.error = err.message;
			state.count = null;
		} finally {
			state.loading = false;
		}
		return state;
	}

	return { state, load };
}
