import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Density matters more than scale.",
    body: "Vibers Life is deliberately small. The point is not to be broad; the point is to be specific enough that the right builders feel real pressure and real support at the same time.",
  },
  {
    number: "02",
    title: "Execution is a cultural marker.",
    body: "The program favors people who already move. Taste matters, but only when it can survive contact with users, code, feedback, and repeated release cycles.",
  },
  {
    number: "03",
    title: "Builders need context, not just capital.",
    body: "The strongest support systems combine money, operator judgment, and a network that can challenge direction early. Vibers Life is built around that combination.",
  },
] as const;

const backers = [
  {
    name: "Hashed",
    label: "Web3 network",
    body: "Hashed contributes deep exposure to web-native products, founder support, and a long-view understanding of how ambitious software systems gain traction.",
  },
  {
    name: "Nexon",
    label: "Entertainment operator",
    body: "Nexon brings operator discipline, platform understanding, and a strong perspective on how software, games, and culture become durable habits at scale.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container hero">
          <div className="hero-copy">
            <div className="eyebrow">About</div>
            <h1 className="hero-title">
              Build the <em>builders</em>
            </h1>
            <p className="lead">
              Vibers Life is an editorially minded program for early builders—part fellowship, part house,
              part support structure—shaped around the belief that environment changes trajectory.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/">
                Read homepage
              </Link>
              <a className="button-ghost" href="mailto:hello@vibers.life">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="panel stack">
              <div className="card-number">Position</div>
              <p className="serif-line">The program sits where software, culture, and play overlap.</p>
            </div>
            <div className="panel-accent stack">
              <div className="metric">Lens</div>
              <p className="number-title">
                Editorial <em>×</em> Product
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <div className="eyebrow">Principles</div>
              <h2 className="display-title">
                What the system <em>believes</em>
              </h2>
            </div>
            <p className="body-large muted">
              Vibers Life treats selection, environment, and access as a single product. The point is not to
              imitate an accelerator—it is to create the right frame for unusually fast builders to keep moving.
            </p>
          </div>

          <div className="three-up">
            {principles.map((item) => (
              <article key={item.number} className="panel stack">
                <div className="card-number">{item.number}</div>
                <h3 className="stack-title">{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-up">
          <article className="panel-quote stack">
            <div className="card-number">Why now</div>
            <p className="quote-line">The tools are faster. The founders are younger. The cycle is tighter.</p>
            <p className="muted">
              Builder leverage is rising quickly. Vibers Life exists to meet that shift early, before momentum
              gets diluted by slower systems and generic support.
            </p>
          </article>

          <article className="panel stack">
            <div className="card-number">Program direction</div>
            <p className="muted">
              The aim is to find people with strong internal direction and give them a sharper external frame:
              peers, living structure, operator feedback, and a network that can open the next meaningful door.
            </p>
            <div className="tag-row">
              <span className="tag">Builders</span>
              <span className="tag">Residency</span>
              <span className="tag">Fellowship</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <div className="eyebrow">Backed by</div>
              <h2 className="display-title">
                Two systems, <em>one brief</em>
              </h2>
            </div>
            <p className="body-large muted">
              The backers are different by design. Together they give the program range across capital,
              distribution, product instincts, and entertainment-native understanding.
            </p>
          </div>

          <div className="two-up">
            {backers.map((item, index) => (
              <article key={item.name} className={index == 0 ? "panel-accent stack" : "panel stack"}>
                <div className="card-number">{item.label}</div>
                <h3 className="stack-title">{item.name}</h3>
                <p className={index === 0 ? "" : "muted"}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="section">
        <div className="page-footer">
          <div className="footer-grid">
            <div className="footer-card stack">
              <div className="eyebrow">About</div>
              <p className="serif-line">A support system with a strong point of view.</p>
            </div>

            <div className="footer-card stack">
              <div className="card-number">Routes</div>
              <Link href="/house">House</Link>
              <Link href="/fellowship">Fellowship</Link>
            </div>

            <div className="footer-card stack">
              <div className="card-number">Contact</div>
              <a href="mailto:hello@vibers.life">hello@vibers.life</a>
              <span className="muted">Partnerships and applications</span>
            </div>
          </div>

          <div className="footer-meta">
            <span>Vibers Life / About</span>
            <span>Hashed × Nexon</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
