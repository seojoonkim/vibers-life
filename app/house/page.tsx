import Link from "next/link";

const floors = [
  {
    level: "01",
    title: "Arrival, lounge, and event floor",
    body: "A front-of-house layer for talks, dinners, visiting operators, and quick critiques between work blocks.",
  },
  {
    level: "02",
    title: "Focused work tables and review corners",
    body: "Shared desks, private focus pockets, and enough space for solo execution without losing cohort contact.",
  },
  {
    level: "03",
    title: "Mentor sessions and sprint reviews",
    body: "Program rooms where operators, investors, and founders can review product, strategy, and distribution in person.",
  },
  {
    level: "04–05",
    title: "Residential rooms and reset space",
    body: "Private rooms, shared kitchens, and the infrastructure required to keep builders inside a sustainable loop.",
  },
] as const;

const residency = [
  {
    step: "01",
    title: "Move in",
    body: "Orientation, room allocation, product audit, and the first calibration on what each resident plans to ship.",
  },
  {
    step: "02",
    title: "Sprint",
    body: "A dense production phase with weekly reviews, operator feedback, and small cohort pressure that keeps momentum visible.",
  },
  {
    step: "03",
    title: "Launch",
    body: "Products go public, narratives sharpen, and teams start testing fit in the market rather than in the room.",
  },
  {
    step: "04",
    title: "Demo",
    body: "Residents present what changed, what held, and what deserves the next phase of backing or extension.",
  },
] as const;

export default function HousePage() {
  return (
    <main className="pt-[72px] md:pt-20">
      <section className="border-b border-border">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-editorial gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.4fr_0.6fr] md:items-end md:px-12 lg:gap-20 lg:px-16 lg:pb-24 lg:pt-28">
          <div className="flex flex-col gap-8">
            <div className="eyebrow">Vibers House</div>
            <h1 className="hero-heading max-w-[7ch]">
              Live <span className="text-accent">in</span>
            </h1>
            <p className="lead-text">
              Vibers House turns the program into a physical operating system:
              fewer logistics, more shared pace, and a residency structure
              designed for people whose work needs room and intensity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/">
                Back to Home
              </Link>
              <Link className="btn btn-outline" href="/fellowship">
                Read Fellowship
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 self-stretch justify-end">
            <div className="border border-border bg-gradient-to-b from-accent/[0.08] to-accent/[0.02] p-8">
              <span className="label text-accent">Residency thesis</span>
              <p className="serif-quote mt-4">
                Proximity is part of the product.
              </p>
            </div>
            <div className="border border-border p-8">
              <span className="label text-accent">Format</span>
              <p className="mt-2 text-xl font-bold tracking-tight">
                20 <span className="text-accent">Residents</span>
              </p>
              <p className="mt-2 text-[15px] text-text-sub">
                A compact cohort with shared space, shared review, and private
                room to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-alt">
        <div className="mx-auto max-w-editorial px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.5fr_1fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">House map</div>
              <h2 className="section-heading">
                A vertical{" "}
                <span className="text-accent">workspace</span>
              </h2>
            </div>
            <p className="body-text text-text-sub self-end">
              Each floor has a specific role. Public energy below, concentrated
              work in the middle, and residential quiet above. The house is
              arranged to protect output, not distract from it.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-12">
            {floors.map((item, index) => (
              <article
                key={item.level}
                className={`border border-border bg-background p-8 ${
                  index % 2 === 0
                    ? "md:col-span-7"
                    : "md:col-span-5 md:mt-14"
                }`}
              >
                <span className="label text-accent">Floor {item.level}</span>
                <h3 className="stack-heading mt-4">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-sub">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-editorial px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.5fr_1fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">Residency rhythm</div>
              <h2 className="section-heading">
                From move-in to{" "}
                <span className="text-accent">demo day</span>
              </h2>
            </div>
            <p className="body-text text-text-sub self-end">
              The calendar is paced for builders who need both autonomy and
              visible checkpoints. Every phase exists to keep signal rising
              without flattening individual direction.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {residency.map((item) => (
              <article
                key={item.step}
                className="border border-border bg-background p-6"
              >
                <span className="label text-accent">Phase {item.step}</span>
                <h3 className="stack-heading mt-4">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-sub">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-alt">
        <div className="mx-auto grid max-w-editorial gap-4 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28 lg:px-16">
          <article className="border border-border bg-foreground p-8 text-white lg:p-10">
            <span className="label text-accent">What residents get</span>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="border-t border-white/10 pt-3 text-[15px] text-white/70">
                Housing and working infrastructure tuned for full-time execution.
              </li>
              <li className="border-t border-white/10 pt-3 text-[15px] text-white/70">
                Mentor access tied directly to product review and strategic
                feedback.
              </li>
              <li className="border-t border-white/10 pt-3 text-[15px] text-white/70">
                Daily density with a cohort selected for pace, curiosity, and
                follow-through.
              </li>
            </ul>
          </article>

          <article className="border border-border bg-background p-8">
            <span className="label text-accent">Program terms</span>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="border border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-text-sub">
                6 month base
              </span>
              <span className="border border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-text-sub">
                Extension possible
              </span>
              <span className="border border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-text-sub">
                Hashed × Nexon
              </span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-text-sub">
              The house is intentionally limited. Capacity stays small so
              feedback remains specific and the environment keeps its edge.
            </p>
          </article>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto max-w-editorial px-6 py-12 md:px-12 lg:px-16">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">House</div>
              <p className="serif-quote max-w-[16ch]">
                A residency built around daily momentum.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="label text-accent">Continue</span>
              <Link
                href="/fellowship"
                className="text-[15px] text-text-sub transition-colors hover:text-foreground"
              >
                Fellowship
              </Link>
              <Link
                href="/about"
                className="text-[15px] text-text-sub transition-colors hover:text-foreground"
              >
                About
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="label text-accent">Contact</span>
              <a
                href="mailto:hello@vibers.life"
                className="text-[15px] text-text-sub transition-colors hover:text-foreground"
              >
                hello@vibers.life
              </a>
              <span className="text-[15px] text-text-sub">
                Editorial residency page
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 text-[11px] uppercase tracking-[0.1em] text-text-sub sm:flex-row">
            <span>Vibers House</span>
            <span>White × Electric Orange</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
