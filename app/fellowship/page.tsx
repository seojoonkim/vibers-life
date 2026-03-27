import Link from "next/link";

const programTiers = [
  {
    step: "01",
    title: "Membership",
    body: "Curated community, events, and network gateway. The first layer of access for builders who are starting to move fast.",
    color: "text-neon-green",
    cardClass: "arcade-card arcade-card-green",
  },
  {
    step: "02",
    title: "Fellowship",
    body: "Dedicated mentorship, resources, and deeper support. For builders who have shipped and are ready to accelerate.",
    color: "text-neon-purple",
    cardClass: "arcade-card",
  },
  {
    step: "03",
    title: "Vibers House",
    body: "Full residency — the ultimate tier. 6 months of immersive building with the strongest cohort in one space.",
    color: "text-neon-pink",
    cardClass: "arcade-card arcade-card-pink",
  },
] as const;

const benefits = [
  "Product reviews and direction feedback from industry veterans",
  "Direct access to Hashed and NEXON networks — not introductions, real connections",
  "Seamless pipeline from fellowship to residency to follow-on funding",
  "A cohort of the top 1% young builders pushing each other forward",
] as const;

const applicationSteps = [
  {
    step: "01",
    title: "Submit",
    body: "Show what you have built and what you are building now. Output speaks louder than any application essay.",
    color: "text-neon-green",
  },
  {
    step: "02",
    title: "Review",
    body: "We evaluate speed, completeness, and direction clarity. We read your code, not your resume.",
    color: "text-neon-purple",
  },
  {
    step: "03",
    title: "Interview",
    body: "A short conversation about building, not presenting. We want to understand how you think and ship.",
    color: "text-neon-pink",
  },
  {
    step: "04",
    title: "Placement",
    body: "We match you to the right tier: Membership, Fellowship, or House. Every builder gets the level that fits.",
    color: "text-neon-green",
  },
] as const;

export default function FellowshipPage() {
  return (
    <main className="min-h-screen bg-arcade-black pt-16">
      <section className="grid-bg relative flex min-h-[calc(100vh-64px)] items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arcade-black" />

        <div className="relative mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="pixel-label mb-8">
              <span className="text-neon-green">{">>>"}</span>
              FELLOWSHIP
            </div>

            <h1
              className="hero-title glitch-text mb-8"
              data-text="For Builders Who Are Already Moving"
            >
              For Builders Who Are Already Moving
            </h1>

            <p className="body-lg mb-10 max-w-xl">
              Vibers Fellowship provides focused mentorship, resources, and
              network access to accelerate what is already working.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@vibers.life?subject=Vibers%20Fellowship"
                className="btn-neon btn-neon-filled whitespace-nowrap"
              >
                APPLY NOW
              </a>
              <Link
                href="/house"
                className="btn-neon btn-neon-purple whitespace-nowrap"
              >
                VIEW HOUSE
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute right-8 top-1/4 hidden animate-[float_8s_ease-in-out_infinite] opacity-15 lg:block">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <path d="M60 10L100 30V70C100 90 82 105 60 115C38 105 20 90 20 70V30L60 10Z" stroke="#00FF88" strokeWidth="2" />
              <path d="M45 60L55 70L75 50" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="5" y="5" width="4" height="4" fill="#8B5CF6" opacity="0.3" />
              <rect x="111" y="5" width="4" height="4" fill="#FF0080" opacity="0.3" />
              <rect x="5" y="111" width="4" height="4" fill="#00FF88" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-pink">TIERS</div>
            <h2 className="section-title mb-4">Three Tiers, One Standard</h2>
            <p className="body-text">
              Every tier shares the same selection bar: output, speed, and
              direction. The only difference is depth of support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {programTiers.map((tier) => (
              <article key={tier.step} className={tier.cardClass}>
                <span className={`font-pixel text-xl ${tier.color}`}>
                  {tier.step}
                </span>
                <h3 className="mb-3 mt-4 font-body text-lg font-semibold text-content">
                  {tier.title}
                </h3>
                <p className="body-text">{tier.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4">BENEFITS</div>
            <h2 className="section-title">What You Get</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="arcade-card arcade-card-green">
              <div className="pixel-label mb-6 text-neon-green">FELLOW BENEFITS</div>
              <ul className="flex flex-col gap-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0">
                      <path d="M3 8L6.5 11.5L13 5" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="body-text">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="arcade-card neon-border-purple">
              <div className="pixel-label mb-6">SELECTION CRITERIA</div>
              <div className="mb-6">
                <p className="font-body text-2xl font-semibold text-content">
                  Output over polish.
                </p>
                <p className="font-body text-2xl font-semibold text-neon-purple">
                  Clarity over volume.
                </p>
              </div>
              <div className="pixel-divider mb-6" />
              <p className="body-text">
                The strongest applications are usually simple. What you have
                built, what you are building now, and why the next 6 months
                matter — that is all we need to see.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-green">PROCESS</div>
            <h2 className="section-title mb-4">How to Apply</h2>
            <p className="body-text">
              The process is short and direct. We move fast because we know
              builders hate waiting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {applicationSteps.map((item) => (
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

      <section className="border-t border-arcade-line" id="waitlist">
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
              action="mailto:hello@vibers.life?subject=Vibers%20Fellowship%20Waitlist"
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
                  href="/house"
                  className="text-sm text-content-muted transition-colors hover:text-neon-green"
                >
                  Vibers House
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
