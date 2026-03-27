import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Density Over Scale",
    body: "Small by design. Intense interaction beats wide reach. Twenty builders who push each other daily outperform a thousand who meet monthly.",
    color: "text-neon-green",
  },
  {
    number: "02",
    title: "Execution Is Culture",
    body: "Ideas are everywhere. Builders who ship, iterate, and ship again are rare. We select for action, not intention.",
    color: "text-neon-purple",
  },
  {
    number: "03",
    title: "Capital Is Not Enough",
    body: "Young builders need operational guidance, fast feedback, and a network that opens real doors — not just a check.",
    color: "text-neon-pink",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-arcade-black pt-16">
      <section className="grid-bg relative flex min-h-[calc(100vh-64px)] items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arcade-black" />

        <div className="relative mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="pixel-label mb-8">
              <span className="text-neon-green">{">>>"}</span>
              ABOUT
            </div>

            <h1
              className="hero-title glitch-text mb-8"
              data-text="What Vibers Life Believes"
            >
              What Vibers Life Believes
            </h1>

            <p className="body-lg mb-10 max-w-xl">
              We believe the next generation of builders will move faster, ship
              more, and think bigger than anyone expects.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/#waitlist"
                className="btn-neon btn-neon-filled whitespace-nowrap"
              >
                JOIN WAITLIST
              </a>
              <a
                href="mailto:hello@vibers.life"
                className="btn-neon btn-neon-purple whitespace-nowrap"
              >
                CONTACT
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute right-8 top-1/4 hidden animate-[float_8s_ease-in-out_infinite] opacity-15 lg:block">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="40" stroke="#8B5CF6" strokeWidth="2" />
              <circle cx="60" cy="60" r="20" stroke="#00FF88" strokeWidth="2" />
              <circle cx="60" cy="60" r="4" fill="#FF0080" />
              <path d="M60 16V24" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M60 96V104" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M16 60H24" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M96 60H104" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="5" y="5" width="4" height="4" fill="#8B5CF6" opacity="0.3" />
              <rect x="111" y="111" width="4" height="4" fill="#FF0080" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-pink">PRINCIPLES</div>
            <h2 className="section-title mb-4">Our Principles</h2>
            <p className="body-text">
              Three beliefs that shape every decision we make — from who we
              select to how we run the program.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
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

      <section className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-green">NETWORK</div>
            <h2 className="section-title">Hashed</h2>
          </div>

          <article className="arcade-card arcade-card-green p-8 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <div className="pixel-label mb-4 text-neon-green">NETWORK PARTNER</div>
                <h3 className="mb-4 font-body text-xl font-semibold text-content">
                  Web-Native Ecosystem, Builder-First
                </h3>
                <p className="body-lg">
                  Hashed brings a global network rooted in the web-native
                  ecosystem. Their conviction in early-stage builders, combined
                  with deep connections across Asia and beyond, gives fellows
                  access to opportunities that would take years to find alone.
                </p>
              </div>
              <div className="hidden md:block">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="30" stroke="#00FF88" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="16" stroke="#00FF88" strokeWidth="1.5" />
                  <ellipse cx="40" cy="40" rx="30" ry="12" stroke="#00FF88" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="40" cy="10" r="3" fill="#00FF88" fillOpacity="0.3" />
                  <circle cx="40" cy="70" r="3" fill="#00FF88" fillOpacity="0.3" />
                  <circle cx="10" cy="40" r="3" fill="#8B5CF6" fillOpacity="0.3" />
                  <circle cx="70" cy="40" r="3" fill="#8B5CF6" fillOpacity="0.3" />
                  <circle cx="40" cy="40" r="3" fill="#00FF88" />
                </svg>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-pink">OPERATIONS</div>
            <h2 className="section-title">NEXON</h2>
          </div>

          <article className="arcade-card arcade-card-pink p-8 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <div className="pixel-label mb-4 text-neon-pink">OPERATIONS PARTNER</div>
                <h3 className="mb-4 font-body text-xl font-semibold text-content">
                  Large-Scale Operations, Product Mastery
                </h3>
                <p className="body-lg">
                  NEXON brings decades of experience running products at massive
                  scale. Their understanding of product organization, infrastructure,
                  and tooling gives fellows the operational edge that separates
                  side projects from real companies.
                </p>
              </div>
              <div className="hidden md:block">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <rect x="15" y="10" width="50" height="35" rx="3" stroke="#FF0080" strokeWidth="1.5" />
                  <path d="M15 20H65" stroke="#FF0080" strokeWidth="1" />
                  <rect x="20" y="25" width="15" height="3" fill="#FF0080" fillOpacity="0.3" />
                  <rect x="20" y="32" width="25" height="3" fill="#FF0080" fillOpacity="0.3" />
                  <rect x="20" y="55" width="40" height="15" rx="2" stroke="#8B5CF6" strokeWidth="1.5" />
                  <path d="M35 55V70" stroke="#8B5CF6" strokeWidth="1" />
                  <path d="M50 55V70" stroke="#8B5CF6" strokeWidth="1" />
                  <circle cx="55" cy="15" r="2" fill="#00FF88" />
                  <circle cx="60" cy="15" r="2" fill="#FF0080" />
                  <rect x="20" y="50" width="4" height="4" fill="#FF0080" fillOpacity="0.3" />
                </svg>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="pixel-label mb-4 justify-center">SYNERGY</div>
            <h2 className="section-title mb-6">Better Together</h2>
            <p className="body-lg mb-8">
              When Hashed&#39;s web-native network meets NEXON&#39;s operational
              mastery, young builders get both reach and depth. This partnership
              gives fellows access to resources that would take years to build
              alone.
            </p>

            <div className="mx-auto grid max-w-lg grid-cols-2 gap-4">
              <div className="arcade-card p-5 text-center">
                <div className="stat-value text-neon-green">H</div>
                <div className="stat-label mt-2">NETWORK</div>
              </div>
              <div className="arcade-card p-5 text-center">
                <div className="stat-value text-neon-pink">N</div>
                <div className="stat-label mt-2">OPERATIONS</div>
              </div>
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
                  href="/house"
                  className="text-sm text-content-muted transition-colors hover:text-neon-green"
                >
                  Vibers House
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
