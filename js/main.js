/**
 * [Application] Entry point — composes all section modules,
 * triggers data fetching, and wires the layout together.
 *
 * Pattern: Composition API style (composable functions per section).
 */

import { useHero } from "./components/hero.js";
import { useStats } from "./components/stats.js";
import { useCTA } from "./components/cta.js";
import {
	useGitHubRepo,
	useGitHubContributors,
	useGitHubCommits,
} from "./utils/api.js";

// ── Scroll-fade observer for elements added after DOM ready ──────────────────
function initScrollObserver() {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15 },
	);

	// Observe any fade-in elements already in the DOM
	document
		.querySelectorAll(".fade-in:not(.visible)")
		.forEach((el) => observer.observe(el));

	return observer;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function init() {
	console.info("[Application]: Initialising");

	// 1. Mount sections into their placeholder divs
	const heroMount = document.getElementById("hero-mount");
	const statsMount = document.getElementById("stats-mount");
	const ctaMount = document.getElementById("cta-mount");

	if (!heroMount || !statsMount || !ctaMount) {
		console.error("[Application]: Mount points missing from DOM");
		return;
	}

	const hero = useHero();
	const stats = useStats();
	const cta = useCTA();

	hero.mount(heroMount);
	stats.mount(statsMount);
	cta.mount(ctaMount);

	initScrollObserver();

	console.info("[Application]: All sections mounted — fetching GitHub data");

	// 2. Fetch all GitHub stats in parallel
	const repoComposable = useGitHubRepo();
	const contributorsComposable = useGitHubContributors();
	const commitsComposable = useGitHubCommits();

	const [repoState, contributorsState, commitsState] = await Promise.all([
		repoComposable.load(),
		contributorsComposable.load(),
		commitsComposable.load(),
	]);

	// 3. Populate stats section with live data
	stats.populate({
		repo: repoState.data,
		contributors: contributorsState.count,
		commits: commitsState.count,
	});

	// Re-run the scroll observer to pick up newly inserted cards
	initScrollObserver();

	console.info("[Application]: Initialisation complete");
}

document.addEventListener("DOMContentLoaded", init);
