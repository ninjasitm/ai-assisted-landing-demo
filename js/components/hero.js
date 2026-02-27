/**
 * [HeroSection] Composable that mounts and manages the hero section.
 */

export function useHero() {
	function mount(container) {
		console.info("[HeroSection]: Mounting");

		container.innerHTML = `
			<section id="hero" class="hero-bg min-h-screen flex flex-col items-center justify-center text-center px-6 py-24">

				<!-- Badge -->
				<span class="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 fade-in">
					<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.912.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.935.359.308.678.917.678 1.849 0 1.335-.012 2.41-.012 2.737 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
					</svg>
					Open Source on GitHub
				</span>

				<!-- Headline -->
				<h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl mb-6 fade-in">
					Build Landing Pages
					<span class="gradient-text block mt-1">with AI Assistance</span>
				</h1>

				<!-- Subheadline -->
				<p class="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 fade-in">
					A hands-on demo showing how AI-assisted development accelerates the creation of
					beautiful, production-ready landing pages — from zero to deployed in minutes.
				</p>

				<!-- CTA buttons -->
				<div class="flex flex-wrap items-center justify-center gap-4 fade-in">
					<a href="#stats"
						class="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 shadow-lg shadow-sky-500/25">
						Explore the Project
					</a>
					<a href="https://github.com/ninjasitm/ai-assisted-landing-demo"
						target="_blank"
						rel="noopener noreferrer"
						class="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-lg border border-white/20 transition-colors duration-200">
						View on GitHub
					</a>
				</div>

				<!-- Scroll indicator -->
				<div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs fade-in">
					<span>Scroll to explore</span>
					<svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
					</svg>
				</div>

			</section>
		`;

		// Trigger fade-ins with staggered delay
		const fadeEls = container.querySelectorAll(".fade-in");
		fadeEls.forEach((el, i) => {
			setTimeout(() => el.classList.add("visible"), 150 + i * 100);
		});

		console.info("[HeroSection]: Mounted successfully");
	}

	return { mount };
}
