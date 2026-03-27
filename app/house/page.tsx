import Link from "next/link";

const selectionCriteria = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="8" width="24" height="20" rx="2" stroke="#8B5CF6" strokeWidth="1.5" />
        <path d="M12 18L16 22L24 14" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="4" width="4" height="4" fill="#8B5CF6" fillOpacity="0.3" />
        <rect x="22" y="4" width="4" height="4" fill="#00FF88" fillOpacity="0.3" />
      </svg>
    ),
    title: "Shipped Products",
    body: "We look for builders who have already launched something real. Not plans, not pitches — working products that people use.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 6V18L26 22" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="18" r="13" stroke="#00FF88" strokeWidth="1.5" />
        <rect x="4" y="4" width="3" height="3" fill="#8B5CF6" fillOpacity="0.3" />
        <rect x="29" y="29" width="3" height="3" fill="#FF0080" fillOpacity="0.3" />
      </svg>
    ),
    title: "Speed & Intensity",
    body: "Fast iteration, rapid shipping, relentless improvement. We value builders who move at a pace that makes others uncomfortable.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4L22 14H32L24 20L27 32L18 25L9 32L12 20L4 14H14L18 4Z" stroke="#FF0080" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="18" cy="18" r="4" fill="#FF0080" fillOpacity="0.3" />
      </svg>
    ),
    title: "Ambition",
    body: "Big vision, not afraid of scale. We want builders who think in terms of millions, not thousands.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="12" cy="14" r="5" stroke="#8B5CF6" strokeWidth="1.5" />
        <circle cx="24" cy="14" r="5" stroke="#00FF88" strokeWidth="1.5" />
        <path d="M6 30C6 24.477 10.477 20 16 20H20C25.523 20 30 24.477 30 30" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="16" y="12" width="4" height="4" fill="#FF0080" fillOpacity="0.3" />
      </svg>
    ),
    title: "Collaborative Spirit",
    body: "Thrives in a cohort. Gives and takes feedback without ego. The best builders here make everyone around them faster.",
  },
] as const;

const programSteps = [
  {
    step: "01",
    title: "Onboarding",
    body: "Align goals, set 6-month targets, and meet your cohort. Every resident enters with a clear direction and measurable outcomes.",
    color: "text-neon-green",
  },
  {
    step: "02",
    title: "Build Sprint",
    body: "Weekly demos, rapid iteration, peer feedback. This is where momentum compounds and products take shape at an accelerated pace.",
    color: "text-neon-purple",
  },
  {
    step: "03",
    title: "Validation",
    body: "Real user testing, market signals, and direction refinement. We prioritize actual reactions over theoretical assumptions.",
    color: "text-neon-pink",
  },
  {
    step: "04",
    title: "Launch & Beyond",
    body: "Demo day, follow-on support, and next opportunities. The residency ends, but the network and momentum do not.",
    color: "text-neon-green",
  },
] as const;

const spaceCards = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="20" rx="2" stroke="#8B5CF6" strokeWidth="1.5" />
        <path d="M4 14H32" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="8" y="18" width="8" height="6" fill="#8B5CF6" fillOpacity="0.3" />
        <circle cx="27" cy="11" r="1.5" fill="#00FF88" />
      </svg>
    ),
    title: "Private Focus Rooms",
    body: "Deep work without interruption. Soundproofed, minimally designed spaces for the kind of concentration that produces breakthroughs.",
    cardClass: "arcade-card",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="12" width="12" height="16" rx="1" stroke="#00FF88" strokeWidth="1.5" />
        <rect x="20" y="12" width="12" height="16" rx="1" stroke="#00FF88" strokeWidth="1.5" />
        <path d="M16 20H20" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 24H20" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="14" y="4" width="8" height="4" fill="#00FF88" fillOpacity="0.3" />
      </svg>
    ),
    title: "Shared Workspace",
    body: "Collaboration, peer coding, spontaneous reviews. The shared floor is where ideas collide and the best feedback happens naturally.",
    cardClass: "arcade-card arcade-card-green",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 18L18 8L30 18" stroke="#FF0080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="18" width="18" height="12" stroke="#FF0080" strokeWidth="1.5" />
        <rect x="15" y="22" width="6" height="8" stroke="#FF0080" strokeWidth="1.5" />
        <rect x="11" y="20" width="3" height="3" fill="#FF0080" fillOpacity="0.3" />
      </svg>
    ),
    title: "Living Quarters",
    body: "On-site housing to maintain flow state. Zero commute means more hours building and fewer transitions breaking your rhythm.",
    cardClass: "arcade-card arcade-card-pink",
  },
] as const;

export default function HousePage() {
  return (
    <main className="min-h-screen bg-arcade-black pt-16">
      <section className="grid-bg relative flex min-h-[calc(100vh-64px)] items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arcade-black" />

        <div className="relative mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="pixel-label mb-8">
              <span className="text-neon-green">{">>>"}</span>
              VIBERS HOUSE
            </div>

            <h1
              className="hero-title glitch-text mb-8"
              data-text="Live Together. Build Together."
            >
              Live Together. Build Together.
            </h1>

            <p className="body-lg mb-10 max-w-xl">
              A 6-month immersive residency for the top 1% of young builders.
              Hashed 10 + NEXON 10. One space, one mission, zero distractions.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/#waitlist"
                className="btn-neon btn-neon-filled whitespace-nowrap"
              >
                JOIN WAITLIST
              </a>
              <Link
                href="/fellowship"
                className="btn-neon btn-neon-purple whitespace-nowrap"
              >
                VIEW FELLOWSHIP
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute right-8 top-1/4 hidden animate-[float_8s_ease-in-out_infinite] opacity-15 lg:block">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect x="20" y="10" width="80" height="60" stroke="#8B5CF6" strokeWidth="2" />
              <polygon points="60,2 20,10 100,10" stroke="#00FF88" strokeWidth="2" fill="none" />
              <rect x="45" y="45" width="30" height="25" stroke="#FF0080" strokeWidth="2" fill="none" />
              <rect x="28" y="20" width="15" height="12" fill="rgba(139,92,246,0.15)" stroke="#8B5CF6" strokeWidth="1" />
              <rect x="77" y="20" width="15" height="12" fill="rgba(139,92,246,0.15)" stroke="#8B5CF6" strokeWidth="1" />
              <rect x="5" y="5" width="4" height="4" fill="#8B5CF6" opacity="0.3" />
              <rect x="111" y="5" width="4" height="4" fill="#00FF88" opacity="0.3" />
              <rect x="5" y="111" width="4" height="4" fill="#FF0080" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-pink">SELECTION</div>
            <h2 className="section-title mb-4">Who We Are Looking For</h2>
            <p className="body-text">
              Vibers House is not for everyone. It is for builders who have
              already proven they can ship and want to go further, faster.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {selectionCriteria.map((item) => (
              <article key={item.title} className="arcade-card">
                <div className="mb-5">{item.icon}</div>
                <h3 className="mb-3 font-body text-lg font-semibold text-content">
                  {item.title}
                </h3>
                <p className="body-text">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4">THE PROGRAM</div>
            <h2 className="section-title mb-4">The 6-Month Program</h2>
            <p className="body-text">
              Four phases designed to take your product from aligned goals to
              market launch and beyond.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {programSteps.map((item) => (
              <article key={item.step} className="arcade-card">
                <span className={`font-pixel text-xl ${item.color}`}>
                  {item.step}
                </span>
                <h3 className="mb-3 mt-4 font-body text-lg font-semibold text-content">
                  {item.title}
                </h3>
                <p className="body-text">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-green">SPACE</div>
            <h2 className="section-title mb-4">Designed for Builders</h2>
            <p className="body-text">
              Every square meter is optimized for output. Focus when you need it,
              collaboration when you want it, rest when you earn it.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {spaceCards.map((card) => (
              <article key={card.title} className={card.cardClass}>
                <div className="mb-5">{card.icon}</div>
                <h3 className="mb-3 font-body text-lg font-semibold text-content">
                  {card.title}
                </h3>
                <p className="body-text">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="arcade-card neon-border-purple mx-auto inline-block p-8 sm:p-10">
              <div className="stat-value text-neon-purple">2Y</div>
              <div className="stat-label mt-3">MAX EXTENSION</div>
              <div className="pixel-divider my-6" />
              <p className="body-lg">
                Top performers can extend their residency up to 2 years based on
                output and growth trajectory. The best builders never have to leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark" id="waitlist">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-xl text-center">
            <div className="pixel-label mb-4 justify-center">
              <span className="text-neon-green">{">>>"}</span>
              EARLY ACCESS
            </div>
            <h2 className="section-title mb-6">Get on the Waitlist</h2>
            <p className="body-lg mb-8">
              Join the waitlist for the next cohort. We will reach out when
              applications open.
            </p>

            <form
              className="flex flex-col gap-3 sm:flex-row"
              action="mailto:hello@vibers.life?subject=Vibers%20House%20Waitlist"
              method="post"
              encType="text/plain"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="arcade-input flex-1"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="btn-neon btn-neon-filled whitespace-nowrap"
              >
                JOIN WAITLIST
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 font-pixel text-[10px] text-neon-purple">
                VIBERS.LIFE
              </div>
              <p className="text-sm text-content-muted">
                The Fellowship for Elite Young Builders.
                <br />
                Backed by Hashed × NEXON.
              </p>
            </div>
            <div>
              <div className="mb-3 font-pixel text-[8px] text-content-muted">
                NAVIGATE
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/fellowship"
                  className="text-sm text-content-muted transition-colors hover:text-neon-purple"
                >
                  Fellowship
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-content-muted transition-colors hover:text-neon-pink"
                >
                  About
                </Link>
              </div>
            </div>
            <div>
              <div className="mb-3 font-pixel text-[8px] text-content-muted">
                CONNECT
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://vibers.life"
                  className="text-sm text-content-muted transition-colors hover:text-neon-green"
                >
                  vibers.life
                </a>
                <a
                  href="https://house.vibers.life"
                  className="text-sm text-content-muted transition-colors hover:text-neon-purple"
                >
                  house.vibers.life
                </a>
                <a
                  href="mailto:hello@vibers.life"
                  className="text-sm text-content-muted transition-colors hover:text-neon-green"
                >
                  hello@vibers.life
                </a>
              </div>
            </div>
          </div>

          <div className="pixel-divider mb-6 mt-8" />

          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <span className="font-pixel text-[7px] text-content-muted">
              © 2026 VIBERS LIFE. ALL RIGHTS RESERVED.
            </span>
            <span className="font-pixel text-[7px] text-content-muted">
              HASHED × NEXON
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
