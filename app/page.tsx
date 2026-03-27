import Link from "next/link";

const whatWeDoCards = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="10" width="24" height="16" rx="3" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="12" y="16" width="3" height="3" fill="#8B5CF6" />
        <rect x="10" y="16" width="2" height="3" fill="#8B5CF6" />
        <rect x="15" y="16" width="2" height="3" fill="#8B5CF6" />
        <rect x="12" y="14" width="3" height="2" fill="#8B5CF6" />
        <rect x="12" y="19" width="3" height="2" fill="#8B5CF6" />
        <circle cx="24" cy="16" r="1.5" fill="#00FF88" />
        <circle cx="27" cy="19" r="1.5" fill="#FF0080" />
      </svg>
    ),
    label: "MEMBERSHIP",
    labelColor: "text-neon-purple",
    title: "Curated Selection",
    body: "We find the top 1% of young builders through output, speed, and intensity. No long applications — we scout talent that ships.",
    cardClass: "arcade-card",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4L30 10V20C30 26.5 25 31 18 34C11 31 6 26.5 6 20V10L18 4Z" stroke="#00FF88" strokeWidth="1.5" />
        <path d="M13 18L16.5 21.5L23 15" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "FELLOWSHIP",
    labelColor: "text-neon-green",
    title: "Focused Support",
    body: "Mentorship, network access, and real resources for builders who are already moving. We accelerate what is already working.",
    cardClass: "arcade-card arcade-card-green",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 18L18 6L30 18" stroke="#FF0080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="18" width="16" height="14" stroke="#FF0080" strokeWidth="1.5" />
        <rect x="15" y="24" width="6" height="8" stroke="#FF0080" strokeWidth="1.5" />
        <rect x="12" y="20" width="4" height="3" fill="#FF0080" fillOpacity="0.3" />
        <rect x="20" y="20" width="4" height="3" fill="#FF0080" fillOpacity="0.3" />
      </svg>
    ),
    label: "VIBERS HOUSE",
    labelColor: "text-neon-pink",
    title: "Live-In Residency",
    body: "6 months. 20 residents. Hashed 10 + NEXON 10. Build alongside the strongest cohort in one immersive space.",
    cardClass: "arcade-card arcade-card-pink",
  },
] as const;

const whyNowItems = [
  {
    number: "01",
    title: "Tools Have Evolved",
    body: "Young developers can ship faster than ever. The barrier to building is no longer skill — it is access, environment, and network.",
    color: "text-neon-green",
  },
  {
    number: "02",
    title: "Output Over Credentials",
    body: "The top 1% of young builders prove themselves through what they ship. Vibers Life finds them before anyone else does.",
    color: "text-neon-purple",
  },
  {
    number: "03",
    title: "Hashed × NEXON Synergy",
    body: "When web-native network meets operational scale, young builders dream bigger and execute faster than ever before.",
    color: "text-neon-pink",
  },
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-arcade-black pt-16">
        <section className="grid-bg relative flex min-h-[calc(100vh-64px)] items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arcade-black" />

          <div className="relative mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <div className="pixel-label mb-8">
                <span className="text-neon-green">{">>>"}</span>
                VIBERS LIFE // HASHED × NEXON
              </div>

              <h1
                className="hero-title glitch-text mb-8"
                data-text="The Fellowship for Elite Young Builders"
              >
                The Fellowship for Elite Young Builders
              </h1>

              <p className="body-lg mb-10 max-w-xl">
                We find, fund, and grow the top 1% of young developers. From
                selective membership to immersive residency — this is where
                builders level up.
              </p>

              <form
                className="flex max-w-md flex-col gap-3 sm:flex-row"
                action="mailto:hello@vibers.life?subject=Vibers%20Life%20Waitlist"
                method="post"
                encType="text/plain"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
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

              <p className="mt-4 font-pixel text-[8px] text-content-muted">
                Be the first to know when applications open.
              </p>
            </div>

            <div className="pointer-events-none absolute right-8 top-1/4 hidden animate-[float_8s_ease-in-out_infinite] opacity-15 lg:block">
              <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                <rect x="52" y="4" width="8" height="8" fill="#8B5CF6" />
                <rect x="64" y="4" width="8" height="8" fill="#00FF88" />
                <rect x="76" y="4" width="8" height="8" fill="#8B5CF6" />
                <rect x="40" y="16" width="8" height="8" fill="#00FF88" />
                <rect x="88" y="16" width="8" height="8" fill="#FF0080" />
                <rect x="28" y="28" width="8" height="8" fill="#8B5CF6" />
                <rect x="52" y="28" width="8" height="8" fill="#FF0080" />
                <rect x="76" y="28" width="8" height="8" fill="#FF0080" />
                <rect x="100" y="28" width="8" height="8" fill="#8B5CF6" />
                <rect x="16" y="40" width="8" height="8" fill="#00FF88" />
                <rect x="40" y="40" width="8" height="8" fill="#8B5CF6" />
                <rect x="64" y="40" width="8" height="8" fill="#00FF88" />
                <rect x="88" y="40" width="8" height="8" fill="#8B5CF6" />
                <rect x="112" y="40" width="8" height="8" fill="#00FF88" />
                <rect x="4" y="52" width="8" height="8" fill="#8B5CF6" />
                <rect x="52" y="52" width="8" height="8" fill="#00FF88" />
                <rect x="76" y="52" width="8" height="8" fill="#00FF88" />
                <rect x="128" y="52" width="8" height="8" fill="#8B5CF6" />
                <rect x="16" y="64" width="8" height="8" fill="#FF0080" />
                <rect x="64" y="64" width="8" height="8" fill="#8B5CF6" />
                <rect x="112" y="64" width="8" height="8" fill="#FF0080" />
              </svg>
            </div>
          </div>
        </section>

        <section className="border-t border-arcade-line">
          <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
            <div className="mb-16 max-w-2xl">
              <div className="pixel-label mb-4">WHAT WE DO</div>
              <h2 className="section-title mb-4">
                Three Layers, One Mission
              </h2>
              <p className="body-text">
                Vibers Life is not a school. It is a system designed to push
                fast-moving builders even further — from discovery to residency.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {whatWeDoCards.map((card) => (
                <article key={card.label} className={card.cardClass}>
                  <div className="mb-5">{card.icon}</div>
                  <div className={`pixel-label mb-3 ${card.labelColor}`}>
                    {card.label}
                  </div>
                  <h3 className="mb-3 font-body text-lg font-semibold text-content">
                    {card.title}
                  </h3>
                  <p className="body-text">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-arcade-line bg-arcade-dark">
          <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="pixel-label mb-4 text-neon-pink">
                  RESIDENCY PROGRAM
                </div>
                <h2 className="section-title mb-6">Vibers House</h2>
                <p className="body-lg mb-8">
                  The most intense environment for young builders. Live
                  together, build together, and push each other to ship faster
                  than ever before.
                </p>

                <div className="mb-8 grid grid-cols-2 gap-3">
                  <div className="arcade-card p-5">
                    <div className="stat-value">6</div>
                    <div className="stat-label mt-2">MONTHS</div>
                  </div>
                  <div className="arcade-card p-5">
                    <div className="stat-value">20</div>
                    <div className="stat-label mt-2">RESIDENTS</div>
                  </div>
                  <div className="arcade-card p-5">
                    <div className="stat-value text-neon-purple">2Y</div>
                    <div className="stat-label mt-2">MAX EXTEND</div>
                  </div>
                  <div className="arcade-card p-5">
                    <div className="stat-value text-neon-pink">10+10</div>
                    <div className="stat-label mt-2">HASHED × NEXON</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/house" className="btn-neon">
                    LEARN MORE
                  </Link>
                  <a href="#waitlist" className="btn-neon btn-neon-purple">
                    APPLY NOW
                  </a>
                </div>
              </div>

              <div className="relative hidden lg:flex lg:justify-center">
                <div className="relative w-72">
                  <svg
                    viewBox="0 0 240 220"
                    className="h-auto w-full"
                    fill="none"
                  >
                    <polygon
                      points="120,15 30,85 210,85"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="40"
                      y="85"
                      width="160"
                      height="110"
                      stroke="#00FF88"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="95"
                      y="135"
                      width="50"
                      height="60"
                      stroke="#FF0080"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="55"
                      y="100"
                      width="30"
                      height="25"
                      fill="rgba(139,92,246,0.15)"
                      stroke="#8B5CF6"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="70"
                      y1="100"
                      x2="70"
                      y2="125"
                      stroke="#8B5CF6"
                      strokeWidth="1"
                    />
                    <line
                      x1="55"
                      y1="112.5"
                      x2="85"
                      y2="112.5"
                      stroke="#8B5CF6"
                      strokeWidth="1"
                    />
                    <rect
                      x="155"
                      y="100"
                      width="30"
                      height="25"
                      fill="rgba(139,92,246,0.15)"
                      stroke="#8B5CF6"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="170"
                      y1="100"
                      x2="170"
                      y2="125"
                      stroke="#8B5CF6"
                      strokeWidth="1"
                    />
                    <line
                      x1="155"
                      y1="112.5"
                      x2="185"
                      y2="112.5"
                      stroke="#8B5CF6"
                      strokeWidth="1"
                    />
                    <rect
                      x="170"
                      y="40"
                      width="22"
                      height="45"
                      stroke="#8B5CF6"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <rect
                      x="10"
                      y="10"
                      width="5"
                      height="5"
                      fill="#8B5CF6"
                      opacity="0.3"
                    />
                    <rect
                      x="225"
                      y="15"
                      width="5"
                      height="5"
                      fill="#00FF88"
                      opacity="0.3"
                    />
                    <rect
                      x="5"
                      y="200"
                      width="5"
                      height="5"
                      fill="#FF0080"
                      opacity="0.3"
                    />
                    <rect
                      x="230"
                      y="205"
                      width="5"
                      height="5"
                      fill="#8B5CF6"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-arcade-line">
          <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
            <div className="mb-16 max-w-2xl">
              <div className="pixel-label mb-4 text-neon-pink">WHY NOW</div>
              <h2 className="section-title">
                The Vibe Coding Era
                <br />
                Changes Everything
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {whyNowItems.map((item) => (
                <article key={item.number} className="arcade-card">
                  <span className={`font-pixel text-xl ${item.color}`}>
                    {item.number}
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

        <section
          className="border-t border-arcade-line bg-arcade-dark"
          id="waitlist"
        >
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
                action="mailto:hello@vibers.life?subject=Vibers%20Life%20Waitlist"
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

              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <Link
                  href="/fellowship"
                  className="font-pixel text-[8px] text-content-muted transition-colors hover:text-neon-purple"
                >
                  FELLOWSHIP →
                </Link>
                <Link
                  href="/house"
                  className="font-pixel text-[8px] text-content-muted transition-colors hover:text-neon-green"
                >
                  VIBERS HOUSE →
                </Link>
                <Link
                  href="/about"
                  className="font-pixel text-[8px] text-content-muted transition-colors hover:text-neon-pink"
                >
                  ABOUT →
                </Link>
              </div>
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
