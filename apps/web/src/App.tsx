const features = [
  'Connect a GitHub repository',
  'Describe your first task',
  'Launch a personalized onboarding guide',
]

export default function App() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      <div aria-hidden="true" className="stars absolute inset-0" />
      <section className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-12 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-violet-950/50 backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:p-14">
        <img
          src="/astro-onboarder.png"
          alt="AstroOnboarder astronaut"
          className="mx-auto aspect-square w-full max-w-sm rounded-[2rem] object-cover shadow-2xl shadow-violet-500/20"
        />

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Navigate unfamiliar codebases
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Astro<span className="text-violet-400">Onboarder</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Turn a GitHub repository and your assigned task into a focused,
            evidence-backed onboarding path.
          </p>

          <ul className="mt-8 space-y-3 text-slate-200">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" />
                {feature}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-slate-400">
            Development environment ready. GitHub authentication comes next.
          </p>
        </div>
      </section>
    </main>
  )
}
