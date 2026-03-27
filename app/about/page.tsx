"use client";
import Link from "next/link";
const WHY_NOW = [
  { title: "AI가 개발의 레버리지를 폭발시켰다", desc: "바이브코딩의 시대. 소수 정예 개발자 한 명이 AI와 함께라면 과거 팀 10명의 생산성을 낸다.", highlight: "10x" },
  { title: "조기 발굴이 모든 것을 바꾼다", desc: "Zuckerberg는 19세에 Facebook을 시작했다. Vitalik은 19세에 Ethereum을 제안했다.", highlight: "골든 타임" },
  { title: "스폰서십 타이밍이 결정적이다", desc: "상위 1% 어린 개발자를 가장 임팩트 있는 시점에 조기 스폰서하는 것.", highlight: "Early Win" },
];
const PHILOSOPHY = [
  { number: "01", title: "소수 정예, 극한 집중", body: "진짜 상위 1%만 선발해서, 그들에게 세상이 줄 수 있는 최고의 환경을 제공한다." },
  { number: "02", title: "빌드 퍼스트", body: "이론보다 실행. 계획보다 프로토타입. CV가 아니라 GitHub 링크를 봐라." },
  { number: "03", title: "바이브코딩 시대의 인재", body: "AI 툴을 잘 다루고, 빠르게 실험하고, 아이디어를 제품으로 만드는 능력." },
  { number: "04", title: "네트워크는 자산이다", body: "Hashed의 Web3 생태계, NEXON의 글로벌 게임 제국 — 이 두 세계가 만나는 교차점." },
];
export default function AboutPage() {
  return (
    <main>
      <section style={{ paddingTop: "160px", paddingBottom: "120px" }}>
        <div className="container-xl" style={{ textAlign: "center" }}>
          <div className="section-label" style={{ marginBottom: "32px" }}>ABOUT VIBERS LIFE</div>
          <h1 className="page-title" style={{ marginBottom: "24px" }}>WE BUILD<br /><span className="text-accent">THE BUILDERS.</span></h1>
          <p className="body-text" style={{ maxWidth: "600px", margin: "0 auto 48px" }}>다음 세대의 창업자와 개발자를 조기에 발굴하고,<br />그들이 세상을 바꿀 수 있도록 모든 자원을 쏟아붓는다.</p>
          <div className="hero-ctas" style={{ justifyContent: "center" }}><a href="#philosophy" className="btn-primary">OUR PHILOSOPHY</a><a href="#contact" className="btn-outline">PARTNER WITH US</a></div>
        </div>
      </section>
      <hr className="divider" />
      <section id="philosophy" className="section-pad">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "64px" }}><div className="section-label" style={{ marginBottom: "12px" }}>OUR PHILOSOPHY</div><h2 className="section-title">우리가 믿는 것들</h2></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {PHILOSOPHY.map((item, i) => (<div key={i} className="card" style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "32px", alignItems: "start" }}><div className="editorial-number">{item.number}</div><div><h3 className="card-title" style={{ marginBottom: "10px" }}>{item.title}</h3><p className="body-sm">{item.body}</p></div></div>))}
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section className="section-pad bg-alt">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "64px" }}><div className="section-label" style={{ marginBottom: "12px" }}>WHY NOW</div><h2 className="section-title" style={{ marginBottom: "16px" }}>지금이어야 하는 이유</h2><p className="body-text" style={{ maxWidth: "560px", margin: "0 auto" }}>바이브코딩 시대 — AI와 함께라면 소수 정예 한 팀이 예전의 조직 10개를 이긴다.</p></div>
          <div className="grid-editorial-3">
            {WHY_NOW.map((point, i) => (<div key={i} className="card"><div style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 700, color: "var(--accent)", marginBottom: "8px" }}>{point.highlight}</div><h3 className="card-title" style={{ marginBottom: "12px" }}>{point.title}</h3><p className="body-sm" style={{ fontSize: "14px" }}>{point.desc}</p></div>))}
          </div>
          <div style={{ marginTop: "48px", borderLeft: "4px solid var(--accent)", padding: "32px", background: "var(--bg)" }}>
            <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 500, color: "var(--text)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>&ldquo;소수 정예가 단시간에 만드는 고생산성.<br /><span className="text-accent">그 소수를 우리가 키운다.</span>&rdquo;</blockquote>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "64px" }}><div className="section-label" style={{ marginBottom: "12px" }}>BACKED BY</div><h2 className="section-title" style={{ marginBottom: "12px" }}>HASHED × NEXON</h2><p className="body-sm">두 거인이 만든 빌더 생태계</p></div>
          <div className="grid-editorial-2">
            <div className="card" style={{ padding: "40px 36px" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}>HASHED</div><div className="section-label" style={{ marginBottom: "20px" }}>WEB3 VENTURE CAPITAL</div><p className="body-sm" style={{ marginBottom: "24px" }}>아시아 최고의 Web3 전문 벤처캐피털. Axie Infinity, The Sandbox, Klaytn 등 수십 개의 글로벌 블록체인 프로젝트를 발굴.</p><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{["Web3 네트워크", "VC 연결", "토크노믹스", "글로벌 론칭"].map((t) => (<span key={t} className="tag">{t}</span>))}</div></div>
            <div className="card" style={{ padding: "40px 36px" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}>NEXON</div><div className="section-label" style={{ marginBottom: "20px" }}>GLOBAL GAME EMPIRE</div><p className="body-sm" style={{ marginBottom: "24px" }}>MapleStory, Dungeon&Fighter, KartRider 등 수십 개의 글로벌 흥행 IP를 보유한 게임 제국.</p><div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{["게임 IP", "글로벌 유통", "엔터테인먼트", "파트너십"].map((t) => (<span key={t} className="tag">{t}</span>))}</div></div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="contact" className="section-pad bg-alt">
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center", padding: "0 32px" }}>
          <div className="section-label" style={{ marginBottom: "12px" }}>GET IN TOUCH</div>
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 4vw, 40px)", marginBottom: "16px" }}>빌더이거나, 파트너이거나,<br /><span className="text-accent">아니면 둘 다이거나.</span></h2>
          <p className="body-text" style={{ fontSize: "16px", marginBottom: "40px" }}>Vibers Life에 합류하거나, 파트너십을 논의하거나 — 연락하세요.</p>
          <div className="hero-ctas" style={{ justifyContent: "center", marginBottom: "48px" }}><Link href="/fellowship" className="btn-primary">APPLY AS BUILDER</Link><a href="mailto:hello@vibers.life" className="btn-outline">PARTNER INQUIRY</a></div>
          <div style={{ display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
            <div><div className="section-label" style={{ marginBottom: "6px" }}>EMAIL</div><div style={{ fontSize: "15px", fontWeight: 500, color: "var(--accent)" }}>hello@vibers.life</div></div>
            <div><div className="section-label" style={{ marginBottom: "6px" }}>TWITTER</div><div style={{ fontSize: "15px", fontWeight: 500, color: "var(--accent)" }}>@VibersLife</div></div>
          </div>
        </div>
      </section>
      <footer style={{ padding: "24px 32px", borderTop: "1px solid var(--border)", textAlign: "center" }}><div className="body-sm" style={{ fontSize: "13px" }}>&copy; 2025 VIBERS LIFE · POWERED BY HASHED × NEXON</div></footer>
    </main>
  );
}
