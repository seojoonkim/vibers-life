import Link from "next/link";

const principles = [
  { number: "01", title: "Density matters more than scale.", body: "Vibers Life is deliberately small. The point is not to be broad; the point is to be specific enough that the right builders feel real pressure and real support at the same time." },
  { number: "02", title: "Execution is a cultural marker.", body: "The program favors people who already move. Taste matters, but only when it can survive contact with users, code, feedback, and repeated release cycles." },
  { number: "03", title: "Builders need context, not just capital.", body: "The strongest support systems combine money, operator judgment, and a network that can challenge direction early. Vibers Life is built around that combination." },
] as const;

const backers = [
  { name: "Hashed", label: "Web3 network", body: "Hashed contributes deep exposure to web-native products, founder support, and a long-view understanding of how ambitious software systems gain traction." },
  { name: "Nexon", label: "Entertainment operator", body: "Nexon brings operator discipline, platform understanding, and a strong perspective on how software, games, and culture become durable habits at scale." },
] as const;

export default function AboutPage() {
  return (
    <main className="pt-[72px] md:pt-20">
      <section className="border-b border-border">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-editorial gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.4fr_0.6fr] md:items-end md:px-12 lg:gap-20 lg:px-16 lg:pb-24 lg:pt-28">
          <div className="flex flex-col gap-8">
            <div className="eyebrow">About</div>
            <h1 className="hero-heading max-w-[10ch]">Build the <span className="text-accent">builders</span></h1>
            <p className="lead-text">Vibers Life is an editorially minded program for early builders\u2014part fellowship, part house, part support structure\u2014shaped around the belief that environment changes trajectory.</p>
            <div className="flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/">Read Homepage</Link>
              <a className="btn btn-outline" href="mailto:hello@vibers.life">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 self-stretch justify-end">
            <div className="border border-border p-8">
              <span className="label text-accent">Position</span>
              <p className="serif-quote mt-4">The program sits where software, culture, and play overlap.</p>
            </div>
            <div className="border border-border bg-foreground p-8 text-white">
              <span className="label text-accent">Lens</span>
              <p className="mt-2 text-xl font-bold tracking-tight">Editorial <span className="text-accent">×</span> Product</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-alt">
        <div className="mx-auto max-w-editorial px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.5fr_1fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">Principles</div>
              <h2 className="section-heading">What the system <span className="text-accent">believes</span></h2>
            </div>
            <p className="body-text text-text-sub self-end">Vibers Life treats selection, environment, and access as a single product. The point is not to imitate an accelerator\u2014it is to create the right frame for unusually fast builders to keep moving.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.number} className="border border-border bg-background p-8">
                <span className="label text-accent">{item.number}</span>
                <h3 className="stack-heading mt-4">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-sub">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-editorial gap-4 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28 lg:px-16">
          <article className="border border-border bg-gradient-to-b from-accent/[0.08] to-accent/[0.02] p-8 lg:p-10">
            <span className="label text-accent">Why now</span>
            <p className="serif-quote mt-6">The tools are faster. The founders are younger. The cycle is tighter.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-sub">Builder leverage is rising quickly. Vibers Life exists to meet that shift early, before momentum gets diluted by slower systems and generic support.</p>
          </article>
          <article className="border border-border bg-background p-8 lg:p-10">
            <span className="label text-accent">Program direction</span>
            <p className="mt-4 text-[15px] leading-relaxed text-text-sub">The aim is to find people with strong internal direction and give them a sharper external frame: peers, living structure, operator feedback, and a network that can open the next meaningful door.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Builders", "Residency", "Fellowship"].map((t) => (
                <span key={t} className="border border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-text-sub">{t}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-border bg-bg-alt">
        <div className="mx-auto max-w-editorial px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.5fr_1fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">Backed by</div>
              <h2 className="section-heading">Two systems, <span className="text-accent">one brief</span></h2>
            </div>
            <p className="body-text text-text-sub self-end">The backers are different by design. Together they give the program range across capital, distribution, product instincts, and entertainment-native understanding.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {backers.map((item, index) => (
              <article key={item.name} className={`border border-border p-8 ${index === 0 ? "bg-foreground text-white" : "bg-background"}`}>
                <span className="label text-accent">{item.label}</span>
                <h3 className="stack-heading mt-4">{item.name}</h3>
                <p className={`mt-3 text-[15px] leading-relaxed ${index === 0 ? "text-white/70" : "text-text-sub"}`}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto max-w-editorial px-6 py-12 md:px-12 lg:px-16">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">About</div>
              <p className="serif-quote max-w-[16ch]">A support system with a strong point of view.</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="label text-accent">Routes</span>
              <Link href="/house" className="text-[15px] text-text-sub transition-colors hover:text-foreground">House</Link>
              <Link href="/fellowship" className="text-[15px] text-text-sub transition-colors hover:text-foreground">Fellowship</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="label text-accent">Contact</span>
              <a href="mailto:hello@vibers.life" className="text-[15px] text-text-sub transition-colors hover:text-foreground">hello@vibers.life</a>
              <span className="text-[15px] text-text-sub">Partnerships and applications</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 text-[11px] uppercase tracking-[0.1em] text-text-sub sm:flex-row">
            <span>Vibers Life / About</span>
            <span>Hashed × Nexon</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
