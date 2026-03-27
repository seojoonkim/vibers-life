import Link from "next/link";

const tracks = [
  {
    label: "Community",
    title: "Membership",
    body: "The entry layer for builders who want the network, events, and the first line of access into the program.",
  },
  {
    label: "Core",
    title: "Fellowship",
    body: "A tighter editorial selection with support, review, and the backing required to move promising work forward.",
  },
  {
    label: "Residency",
    title: "House",
    body: "The live-work layer for the strongest cohort members—an intensive environment built for shipping.",
  },
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
    <main className="page">
      <section className="section">
        <div className="container hero">
          <div className="hero-copy">
            <div className="eyebrow">Fellowship</div>
            <h1 className="hero-title">
              Select <em>better</em>
            </h1>
            <p className="lead">
              Vibers Fellowship is the main program layer: a high-signal environment for builders whose work
              is already moving and whose next step needs sharper support, not broader noise.
            </p>
            <div className="hero-actions">
              <a className="button" href="mailto:hello@vibers.life?subject=Vibers%20Fellowship">
                Start application
              </a>
              <Link className="button-ghost" href="/house">
                Explore house
              </Link>
            </div>
          </div>

          <div className="hero-side">
            <div className="panel stack">
              <div className="card-number">Program line</div>
              <p className="serif-line">Built for founders who prefer evidence to performance.</p>
            </div>
            <div className="panel-quote stack">
              <div className="metric">Backing</div>
              <p className="number-title">
                Hashed <em>×</em> Nexon
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <div className="eyebrow">Program stack</div>
              <h2 className="display-title">
                Three layers, <em>one filter</em>
              </h2>
            </div>
            <p className="body-large muted">
              Vibers Life is structured as a progression, but the connective tissue stays the same: product
              proof, speed of iteration, and the ability to turn intuition into work other people can use.
            </p>
          </div>

          <div className="three-up">
            {tracks.map((item, index) => (
              <article key={item.title} className={index == 1 ? "panel-accent stack" : "panel stack"}>
                <div className="card-number">{item.label}</div>
                <h3 className="stack-title">{item.title}</h3>
                <p className={index === 1 ? "" : "muted"}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-up">
          <article className="panel-accent stack">
            <div className="card-number">What fellows receive</div>
            <ul className="list">
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel stack">
            <div className="card-number">Selection posture</div>
            <p className="quote-line">Clarity over volume. Proof over polish.</p>
            <p className="muted">
              The strongest applications usually make the simplest case. They show the work, describe the
              direction, and make it obvious why the next six months matter.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div className="stack">
              <div className="eyebrow">Selection flow</div>
              <h2 className="display-title">
                Review with <em>intention</em>
              </h2>
            </div>
            <p className="body-large muted">
              The process is short by design. It exists to identify fit quickly and route builders to the
              format that gives them the most leverage.
            </p>
          </div>

          <div className="timeline">
            {process.map((item, index) => (
              <article key={item} className="timeline-row">
                <div className="timeline-step">Step 0{index + 1}</div>
                <p className="muted">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="section">
        <div className="page-footer">
          <div className="footer-grid">
            <div className="footer-card stack">
              <div className="eyebrow">Fellowship</div>
              <p className="serif-line">A compact system for high-output builders.</p>
            </div>

            <div className="footer-card stack">
              <div className="card-number">Routes</div>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </div>

            <div className="footer-card stack">
              <div className="card-number">Apply</div>
              <a href="mailto:hello@vibers.life?subject=Vibers%20Fellowship">hello@vibers.life</a>
              <span className="muted">Selection for the next issue</span>
            </div>
          </div>

          <div className="footer-meta">
            <span>Vibers Fellowship</span>
            <span>Magazine system / Orange issue</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
