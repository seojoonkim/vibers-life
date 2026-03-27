import Link from "next/link";

const tracks = [
  { label: "Community", title: "Membership", body: "The entry layer for builders who want the network, events, and the first line of access into the program." },
  { label: "Core", title: "Fellowship", body: "A tighter editorial selection with support, review, and the backing required to move promising work forward." },
  { label: "Residency", title: "House", body: "The live-work layer for the strongest cohort members\u2014an intensive environment built for shipping." },
] as const;

const benefits = [
  "Operator review tied to product and distribution decisions.",
  "Network access through Hashed and Nexon, not just surface-level introductions.",
  "Funding context, residency access, and a sharper path from experiment to launch.",
  "A cohort that functions like a private circulation list for builders with range.",
] as const;

const process = [
  "Submit concise proof of work and what you are building now.",
  "Selection review favors velocity, originality, and actual shipped output.",
  "Short interviews focus on direction, not presentation polish.",
  "Final invites define whether the right format is membership, fellowship, or house.",
] as const;

export default function FellowshipPage() {
  return (
    <main className="pt-[72px] md:pt-20">
      <section className="border-b border-border">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-editorial gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.4fr_0.6fr] md:items-end md:px-12 lg:gap-20 lg:px-16 lg:pb-24 lg:pt-28">
          <div className="flex flex-col gap-8">
            <div className="eyebrow">Fellowship</div>
            <h1 className="hero-heading max-w-[9ch]">Select <span className="text-accent">better</span></h1>
            <p className="lead-text">Vibers Fellowship is the main program layer: a high-signal environment for builders whose work is already moving and whose next step needs sharper support, not broader noise.</p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href="mailto:hello@vibers.life?subject=Vibers%20Fellowship">Start Application</a>
              <Link className="btn btn-outline" href="/house">Explore House</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 self-stretch justify-end">
            <div className="border border-border p-8">
              <span className="label text-accent">Program line</span>
              <p className="serif-quote mt-4">Built for founders who prefer evidence to performance.</p>
            </div>
            <div className="border border-border bg-gradient-to-b from-accent/[0.08] to-accent/[0.02] p-8">
              <span className="label text-accent">Backing</span>
              <p className="mt-2 text-xl font-bold tracking-tight">Hashed <span className="text-accent">×</span> Nexon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-alt">
        <div className="mx-auto max-w-editorial px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.5fr_1fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">Program stack</div>
              <h2 className="section-heading">Three layers, <span className="text-accent">one filter</span></h2>
            </div>
            <p className="body-text text-text-sub self-end">Vibers Life is structured as a progression, but the connective tissue stays the same: product proof, speed of iteration, and the ability to turn intuition into work other people can use.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {tracks.map((item, index) => (
              <article key={item.title} className={`border border-border p-8 ${index === 1 ? "bg-foreground text-white" : "bg-background"}`}>
                <span className="label text-accent">{item.label}</span>
                <h3 className="stack-heading mt-4">{item.title}</h3>
                <p className={`mt-3 text-[15px] leading-relaxed ${index === 1 ? "text-white/70" : "text-text-sub"}`}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-editorial gap-4 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28 lg:px-16">
          <article className="border border-border bg-foreground p-8 text-white lg:p-10">
            <span className="label text-accent">What fellows receive</span>
            <ul className="mt-6 flex flex-col gap-3">
              {benefits.map((item) => (
                <li key={item} className="border-t border-white/10 pt-3 text-[15px] text-white/70">{item}</li>
              ))}
            </ul>
          </article>
          <article className="border border-border bg-background p-8 lg:p-10">
            <span className="label text-accent">Selection posture</span>
            <p className="serif-quote mt-6">Clarity over volume. Proof over polish.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-sub">The strongest applications usually make the simplest case. They show the work, describe the direction, and make it obvious why the next six months matter.</p>
          </article>
        </div>
      </section>

      <section className="border-b border-border bg-bg-alt">
        <div className="mx-auto max-w-editorial px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.5fr_1fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">Selection flow</div>
              <h2 className="section-heading">Review with <span className="text-accent">intention</span></h2>
            </div>
            <p className="body-text text-text-sub self-end">The process is short by design. It exists to identify fit quickly and route builders to the format that gives them the most leverage.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {process.map((item, index) => (
              <article key={item} className="border border-border bg-background p-6">
                <span className="label text-accent">Step 0{index + 1}</span>
                <p className="mt-4 text-[15px] leading-relaxed text-text-sub">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto max-w-editorial px-6 py-12 md:px-12 lg:px-16">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">Fellowship</div>
              <p className="serif-quote max-w-[16ch]">A compact system for high-output builders.</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="label text-accent">Routes</span>
              <Link href="/" className="text-[15px] text-text-sub transition-colors hover:text-foreground">Home</Link>
              <Link href="/about" className="text-[15px] text-text-sub transition-colors hover:text-foreground">About</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="label text-accent">Apply</span>
              <a href="mailto:hello@vibers.life?subject=Vibers%20Fellowship" className="text-[15px] text-text-sub transition-colors hover:text-foreground">hello@vibers.life</a>
              <span className="text-[15px] text-text-sub">Selection for the next issue</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 text-[11px] uppercase tracking-[0.1em] text-text-sub sm:flex-row">
            <span>Vibers Fellowship</span>
            <span>Magazine system / Orange issue</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
