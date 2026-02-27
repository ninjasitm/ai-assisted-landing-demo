/**
 * [CTASection] Composable that mounts and manages the "get in touch" CTA section.
 */

export function useCTA() {
	function mount(container) {
		console.info("[CTASection]: Mounting");

		container.innerHTML = `
			<section id="contact" class="hero-bg py-28 px-6">
				<div class="max-w-3xl mx-auto text-center">

					<!-- Eyebrow -->
					<span class="inline-block text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4 fade-in">
						Get in touch
					</span>

					<!-- Headline -->
					<h2 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 fade-in">
						Let's Build Something
						<span class="gradient-text"> Together</span>
					</h2>

					<!-- Body copy -->
					<p class="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto mb-10 fade-in">
						Whether you have questions about this demo, want to collaborate on a project,
						or just want to say hello — I'd love to hear from you.
					</p>

					<!-- Action buttons -->
					<div class="flex flex-wrap justify-center gap-4 fade-in">
						<a href="https://github.com/ninjasitm"
							target="_blank"
							rel="noopener noreferrer"
							class="cta-btn inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-xl shadow-sky-500/30 text-base">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.912.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.935.359.308.678.917.678 1.849 0 1.335-.012 2.41-.012 2.737 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
							</svg>
							View GitHub Profile
						</a>
						<a href="https://github.com/ninjasitm/ai-assisted-landing-demo/issues/new"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-colors duration-200 text-base">
							<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
							</svg>
							Open an Issue
						</a>
					</div>

					<!-- Trust badge -->
					<p class="mt-12 text-slate-500 text-sm fade-in">
						Open source &bull; MIT License &bull;
						<a href="https://github.com/ninjasitm/ai-assisted-landing-demo"
							class="underline underline-offset-2 hover:text-slate-300 transition-colors"
							target="_blank" rel="noopener noreferrer">
							ninjasitm/ai-assisted-landing-demo
						</a>
					</p>

				</div>
			</section>
		`;

		// Observe fade-in elements
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

		container
			.querySelectorAll(".fade-in")
			.forEach((el) => observer.observe(el));
		console.info("[CTASection]: Mounted successfully");
	}

	return { mount };
}
