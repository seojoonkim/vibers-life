import Link from "next/link";

const whatIs = [
  { label: "Fellowship", title: "A selective builder program for people who ship before they explain.", body: "Vibers Life scouts founders, designers, and engineers with a bias for output. The fellowship pairs tight selection with real support so the strongest ideas can move faster." },
  { label: "Backed", title: "Hashed brings network gravity. Nexon brings operator discipline.", body: "The program is designed for builders working across software, games, culture, and frontier product. Capital, feedback, and room to build sit in the same system." },
  { label: "Selection", title: "Top 1% is not a slogan. It is a filter for density, taste, and velocity.", body: "The brief is simple: show what you have made, how quickly you move, and why your direction matters now. Vibers Life is looking for signal, not volume." },
] as const;

const whyNow = [
  { number: "01", title: "AI collapses the distance between concept and release.", body: "Smaller teams now move with magazine-level pace and product-level precision. The right founder can turn instinct into a working system in days, not quarters." },
  { number: "02", title: "Young builders are starting earlier and publishing louder.", body: "The next durable companies will come from people who learned distribution and iteration before they learned permission. Vibers Life is built around that reality." },
  { number: "03", title: "The overlap between culture, software, and play is widening.", body: "Hashed and Nexon sit at a useful intersection: web-native capital, operator knowledge, and a deep understanding of entertainment systems that scale." },
] as const;

export default function HomePage() {
  return (
    <main className="pt-[72px] md:pt-20">
      <section className="border-b border-border">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-editorial gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.4fr_0.6fr] md:items-end md:px-12 lg:gap-20 lg:px-16 lg:pb-24 lg:pt-28">
          <div className="flex flex-col gap-8">
            <div className="eyebrow">Season 01 / Editorial Issue</div>
            <h1 className="hero-heading max-w-[8ch]">Vibers <span className="text-accent">Life</span></h1>
            <p className="lead-text">A fashion-magazine take on the next builder class: sharp selection, lived-in residency, and a support system that treats execution as the headline.</p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#waitlist">Join Waitlist</a>
              <Link className="btn btn-outline" href="/fellowship">View Fellowship</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 self-stretch justify-end">
            <div className="border border-border p-8">
              <span className="label text-accent">What it is</span>
              <p className="serif-quote mt-4">A fellowship and residency for builders with uncommon momentum.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-border p-6">
                <span className="label text-accent">Powered by</span>
                <p className="mt-2 text-xl font-bold tracking-tight">Hashed <span className="text-accent">×</span> Nexon</p>
              </div>
              <div className="border border-border p-6">
                <span className="label text-accent">Residency</span>
                <p className="mt-2 text-xl font-bold tracking-tight">6 <span className="text-accent">Months</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-alt">
        <div className="mx-auto max-w-editorial px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.5fr_1fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">What is</div>
              <h2 className="section-heading">The builder <span className="text-accent">edition</span></h2>
            </div>
            <p className="body-text text-text-sub self-end">Vibers Life is structured less like a school and more like an editorial desk for founders: a place where the story is shaped through release cycles, critique, and proximity to other people who move fast.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-12">
            <article className="border border-border bg-background p-8 md:col-span-7 lg:p-10">
              <span className="label text-accent">Program language</span>
              <p className="serif-quote mt-6">&ldquo;Build first, explain later.&rdquo;</p>
              <p className="body-text mt-6 text-text-sub">The program favors evidence of motion: product links, prototypes, experiments, and live work. It is for people whose instinct is to make, refine, and put work in front of users.</p>
            </article>
            <div className="flex flex-col gap-4 md:col-span-5 md:mt-14">
              {whatIs.slice(0, 2).map((item) => (
                <article key={item.label} className="border border-border bg-background p-8">
                  <span className="label text-accent">{item.label}</span>
                  <h3 className="stack-heading mt-4">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-sub">{item.body}</p>
                </article>
              ))}
            </div>
            <article className="border border-border bg-foreground p-8 text-white md:col-span-12 lg:p-10">
              <span className="label text-accent">Selection logic</span>
              <h3 className="stack-heading mt-4">{whatIs[2].title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">{whatIs[2].body}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-editorial px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.5fr_1fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">House</div>
              <h2 className="section-heading">Live close. <span className="text-accent">Ship closer.</span></h2>
            </div>
            <p className="body-text text-text-sub self-end">Vibers House is the residency layer: a six-month environment shaped for focus, critique, and everyday momentum. The architecture is simple—shared intensity, private work, constant access to feedback.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-12">
            <article className="border border-border p-8 md:col-span-8 lg:p-10">
              <span className="label text-accent">Residency outline</span>
              <h3 className="stack-heading mt-4">A physical base for the people building the next thing.</h3>
              <ul className="mt-6 flex flex-col gap-3">
                <li className="border-t border-border pt-3 text-[15px] text-text-sub">Private rooms and shared working floors for a six-month operating rhythm.</li>
                <li className="border-t border-border pt-3 text-[15px] text-text-sub">Daily proximity to mentors, operators, and other fellows who can pressure-test ideas.</li>
                <li className="border-t border-border pt-3 text-[15px] text-text-sub">Support designed to reduce drag: housing, living support, and a program cadence.</li>
              </ul>
            </article>
            <article className="border border-border bg-gradient-to-b from-accent/[0.08] to-accent/[0.02] p-8 md:col-span-4 md:mt-14">
              <span className="label text-accent">House note</span>
              <p className="serif-quote mt-4">The address matters because the conversations do.</p>
            </article>
            {[{ label: "Capacity", value: "20", desc: "A tight cohort split across Hashed and Nexon-backed tracks." }, { label: "Cadence", value: "6M", desc: "Residency from move-in through demo day, with extension potential." }, { label: "Mode", value: "24/7", desc: "A live-work structure built around concentrated sessions and review loops." }].map((m) => (
              <article key={m.label} className="border border-border p-8 md:col-span-4">
                <span className="label text-accent">{m.label}</span>
                <div className="metric-value mt-3">{m.value}</div>
                <p className="mt-3 text-[15px] text-text-sub">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-alt">
        <div className="mx-auto max-w-editorial px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.5fr_1fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">Why now</div>
              <h2 className="section-heading">Timing is the <span className="text-accent">thesis</span></h2>
            </div>
            <p className="body-text text-text-sub self-end">Vibers Life exists because the window has shifted. Tools are faster, younger operators are better networked, and product culture is colliding with entertainment, software, and media.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {whyNow.map((item) => (
              <article key={item.number} className="border border-border bg-background p-8">
                <span className="label text-accent">{item.number}</span>
                <h3 className="stack-heading mt-4">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-sub">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-foreground" id="waitlist">
        <div className="mx-auto grid max-w-editorial gap-8 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-28 lg:px-16">
          <div className="flex flex-col gap-6">
            <div className="eyebrow">Waitlist</div>
            <h2 className="section-heading text-white">Enter the <span className="text-accent">next cohort</span></h2>
            <p className="body-text text-white/70">Register interest for the next selection cycle. The fastest way in is still the clearest one: ship your work, frame your direction, and send the strongest proof you have.</p>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <input className="h-14 border border-white/20 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-accent focus:outline-none" type="email" placeholder="name@email.com" aria-label="Email address" />
            <a className="btn btn-primary" href="mailto:hello@vibers.life?subject=Vibers%20Life%20Waitlist">Send Waitlist Request</a>
            <p className="text-sm text-white/50">Or go deeper first: read the residency, the fellowship details, and the background behind the program before you apply.</p>
          </div>
        </div>
      </section>

      <footer className="bg-bg-alt">
        <div className="mx-auto max-w-editorial px-6 py-12 md:px-12 lg:px-16">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">Vibers Life</div>
              <p className="serif-quote max-w-[16ch]">Editorial support for builders with velocity.</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="label text-accent">Routes</span>
              <Link href="/house" className="text-[15px] text-text-sub transition-colors hover:text-foreground">House</Link>
              <Link href="/fellowship" className="text-[15px] text-text-sub transition-colors hover:text-foreground">Fellowship</Link>
              <Link href="/about" className="text-[15px] text-text-sub transition-colors hover:text-foreground">About</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="label text-accent">Contact</span>
              <a href="mailto:hello@vibers.life" className="text-[15px] text-text-sub transition-colors hover:text-foreground">hello@vibers.life</a>
              <span className="text-[15px] text-text-sub">Powered by Hashed × Nexon</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 text-[11px] uppercase tracking-[0.1em] text-text-sub sm:flex-row">
            <span>Vibers Life / 2026</span>
            <span>White × Electric Orange</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
