/**
 * [StatsSection] Composable that mounts and manages the key stats section.
 * Accepts pre-fetched state from the API composables.
 */

/**
 * Animates a number counter from 0 to target.
 * @param {HTMLElement} el
 * @param {number} target
 * @param {number} duration - ms
 */
function animateCounter(el, target, duration = 1200) {
	const start = performance.now();
	function tick(now) {
		const progress = Math.min((now - start) / duration, 1);
		const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
		el.textContent = Math.round(eased * target).toLocaleString();
		if (progress < 1) requestAnimationFrame(tick);
	}
	requestAnimationFrame(tick);
}

export function useStats() {
	let container = null;

	function mount(el) {
		console.info("[StatsSection]: Mounting");
		container = el;

		container.innerHTML = `
			<section id="stats" class="bg-slate-900 py-24 px-6">
				<div class="max-w-5xl mx-auto">

					<!-- Section header -->
					<div class="text-center mb-16 fade-in">
						<span class="text-sky-400 text-sm font-semibold uppercase tracking-widest">By the numbers</span>
						<h2 class="text-3xl sm:text-4xl font-bold text-white mt-3">Repository at a Glance</h2>
						<p class="text-slate-400 mt-3 max-w-lg mx-auto">
							Live stats pulled directly from the GitHub API.
						</p>
					</div>

					<!-- Stats grid -->
					<div id="stats-grid" class="grid grid-cols-2 lg:grid-cols-4 gap-6">
						${buildSkeletons(4)}
					</div>

					<!-- Tech stack pills -->
					<div class="mt-16 text-center fade-in">
						<p class="text-slate-500 text-sm uppercase tracking-widest mb-4">Built with</p>
						<div class="flex flex-wrap justify-center gap-3">
							${["HTML5", "CSS3", "JavaScript ES6+", "Tailwind CSS", "GitHub Pages"]
								.map(
									(t) => `
								<span class="bg-slate-800 border border-slate-700 text-slate-300 text-sm px-4 py-1.5 rounded-full">${t}</span>
							`,
								)
								.join("")}
						</div>
					</div>
				</div>
			</section>
		`;

		console.info("[StatsSection]: Mounted (skeleton)");
	}

	/**
	 * Populate the stat cards once data is available.
	 * @param {{ repo, contributors, commits }} data
	 */
	function populate({ repo, contributors, commits }) {
		console.info("[StatsSection]: Populating with live data");

		const grid = container?.querySelector("#stats-grid");
		if (!grid) return;

		const cards = [
			{
				icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>`,
				label: "Stars",
				value: repo?.stargazers_count ?? 0,
				color: "text-yellow-400",
				ring: "border-yellow-500/20",
			},
			{
				icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/>`,
				label: "Forks",
				value: repo?.forks_count ?? 0,
				color: "text-green-400",
				ring: "border-green-500/20",
			},
			{
				icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>`,
				label: "Contributors",
				value: contributors ?? 0,
				color: "text-violet-400",
				ring: "border-violet-500/20",
			},
			{
				icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>`,
				label: "Commits",
				value: commits ?? 0,
				color: "text-sky-400",
				ring: "border-sky-500/20",
			},
		];

		grid.innerHTML = cards
			.map(
				(card) => `
			<div class="stat-card bg-slate-800/60 border ${card.ring} rounded-2xl p-6 flex flex-col items-center text-center fade-in">
				<div class="w-12 h-12 rounded-xl bg-slate-700/80 flex items-center justify-center mb-4">
					<svg class="w-6 h-6 ${card.color}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
						${card.icon}
					</svg>
				</div>
				<span class="stat-value text-4xl font-extrabold text-white mb-1" data-target="${card.value}">0</span>
				<span class="text-slate-400 text-sm font-medium">${card.label}</span>
			</div>
		`,
			)
			.join("");

		// Animate counters when cards scroll into view
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const valueEl = entry.target.querySelector(".stat-value");
						if (valueEl) {
							animateCounter(valueEl, parseInt(valueEl.dataset.target, 10));
						}
						entry.target.classList.add("visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.3 },
		);

		grid
			.querySelectorAll(".stat-card")
			.forEach((card) => observer.observe(card));
		console.info("[StatsSection]: Cards rendered and counters armed");
	}

	return { mount, populate };
}

function buildSkeletons(n) {
	return Array.from({ length: n })
		.map(
			() => `
		<div class="stat-card bg-slate-800/60 border border-slate-700/30 rounded-2xl p-6 flex flex-col items-center gap-3">
			<div class="skeleton w-12 h-12 rounded-xl"></div>
			<div class="skeleton w-16 h-8 rounded"></div>
			<div class="skeleton w-20 h-4 rounded"></div>
		</div>
	`,
		)
		.join("");
}
