"use client";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (!email) return; setLoading(true); await new Promise((r) => setTimeout(r, 1500)); setSubmitted(true); setLoading(false); };
  return (
    <main>
      <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="container-xl">
          <div className="badge fade-up" style={{ marginBottom: "32px" }}><span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} /> SEASON 01 — NOW RECRUITING</div>
          <h1 className="hero-title fade-up fade-up-1">VIBERS<br /><span className="text-accent">LIFE</span></h1>
          <div className="fade-up fade-up-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", marginTop: "48px", maxWidth: "600px" }}>
            <p className="body-text" style={{ fontSize: "clamp(17px, 2vw, 20px)" }}>세상을 바꿀 다음 세대의 빌더를 찾습니다.<br />Powered by <span className="text-accent" style={{ fontWeight: 600 }}>Hashed</span> × <span className="text-accent" style={{ fontWeight: 600 }}>NEXON</span></p>
            <div className="hero-ctas"><a href="#waitlist" className="btn-primary">APPLY NOW</a><a href="#about" className="btn-outline">LEARN MORE</a></div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="about" className="section-pad bg-alt">
        <div className="container-xl">
          <div style={{ marginBottom: "80px" }}><div className="section-label" style={{ marginBottom: "16px" }}>What is Vibers Life</div><h2 className="section-title">FOR THE ONES<br />WHO <span className="text-accent">BUILD FIRST</span></h2></div>
          <div className="grid-editorial-3" style={{ marginBottom: "80px" }}>
            {[{ title: "상위 1% 선발", desc: "나이는 숫자. 실력이 전부. 기술, 창의성, 실행력을 갖춘 10-25세 영 빌더들을 엄격한 기준으로 선발합니다." }, { title: "빌드-퍼스트 문화", desc: "말보다 코드. 계획보다 프로토타입. Vibers Life의 펠로우들은 먼저 만들고, 나중에 정제합니다." }, { title: "World-class 네트워크", desc: "Hashed × NEXON의 글로벌 네트워크에 즉시 접근. 투자자, 멘토, 동료 빌더들이 당신 편입니다." }].map((item, i) => (<div key={i} className="card"><div className="accent-line" style={{ marginBottom: "24px" }} /><h3 className="card-title" style={{ marginBottom: "12px" }}>{item.title}</h3><p className="body-sm">{item.desc}</p></div>))}
          </div>
          <div className="stats-row" style={{ padding: "48px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            {[{ number: "1%", label: "TOP BUILDERS" }, { number: "6M", label: "RESIDENCY" }, { number: "∞", label: "POTENTIAL" }].map((s, i) => (<div key={i} style={{ textAlign: "center" }}><div className="stat-number">{s.number}</div><div className="stat-label">{s.label}</div></div>))}
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="house" className="section-pad">
        <div className="container-xl">
          <div className="grid-asymmetric" style={{ marginBottom: "80px" }}>
            <div><div className="section-label" style={{ marginBottom: "16px" }}>Vibers House</div><h2 className="section-title">WHERE<br />BUILDERS<br /><span className="text-accent">LIVE &amp; BUILD</span></h2></div>
            <div style={{ paddingTop: "16px" }}><p className="body-text" style={{ marginBottom: "32px" }}>Vibers House는 선발된 펠로우들이 함께 생활하며 빌드하는 <strong style={{ color: "var(--text)" }}>6개월 풀타임 레지던시</strong>입니다.</p><Link href="/house" className="btn-outline">EXPLORE HOUSE →</Link></div>
          </div>
          <div className="grid-editorial-3" style={{ marginBottom: "64px" }}>
            {[{ title: "공동 생활공간", items: ["최고의 시설 제공", "24/7 해킹 환경", "공용 워크스페이스"] }, { title: "펀딩 & 지원", items: ["생활비 지원", "프로젝트 시드 펀딩", "Hashed 투자 기회"] }, { title: "액셀러레이션", items: ["Hashed 멘토십", "NEXON 업계 연결", "글로벌 론칭 지원"] }].map((item, i) => (<div key={i} className="card"><h3 className="card-title" style={{ marginBottom: "20px" }}>{item.title}</h3><ul style={{ listStyle: "none", padding: 0 }}>{item.items.map((li, j) => (<li key={j} className="check-item" style={{ borderBottom: j < item.items.length - 1 ? "1px solid var(--border)" : "none" }}>{li}</li>))}</ul></div>))}
          </div>
          <div className="bg-alt" style={{ border: "1px solid var(--border)", padding: "48px" }}>
            <div className="section-label" style={{ marginBottom: "32px" }}>Program Timeline</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[{ month: "M01-02", title: "오리엔테이션 & 팀 빌딩", desc: "입주, 팀 구성, 멘토 매칭" }, { month: "M03-04", title: "프로토타입 스프린트", desc: "집중 개발, 주간 데모, 피드백 루프" }, { month: "M05", title: "베타 론칭", desc: "실제 사용자 확보, 지표 추적" }, { month: "M06", title: "데모 데이", desc: "투자자 피칭, 미디어 노출" }].map((step, i, arr) => (<div key={i} style={{ display: "flex", gap: "24px", alignItems: "flex-start", paddingBottom: i < arr.length - 1 ? "32px" : "0" }}><div style={{ minWidth: "72px", fontSize: "13px", fontWeight: 600, color: "var(--accent)", paddingTop: "2px" }}>{step.month}</div><div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, paddingTop: "6px" }}><div className="timeline-dot" />{i < arr.length - 1 && <div className="timeline-line" />}</div><div style={{ paddingBottom: "8px" }}><div style={{ fontSize: "16px", fontWeight: 600, color: "var(--text)", marginBottom: "4px" }}>{step.title}</div><div className="body-sm" style={{ fontSize: "14px" }}>{step.desc}</div></div></div>))}
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section className="section-pad bg-alt">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "80px" }}><div className="section-label" style={{ marginBottom: "16px" }}>Why Now</div><h2 className="section-title">THE WINDOW IS<br /><span className="text-accent">RIGHT NOW</span></h2></div>
          <div className="grid-editorial-3">
            {[{ title: "AI가 개발의 벽을 부쉈다", desc: "아이디어와 실행력이 있는 10대가 시리즈A 스타트업을 만들 수 있는 시대.", stat: "10×", sl: "Builder Leverage" }, { title: "다음 유니콘은 더 어리다", desc: "Zuckerberg(19), Gates(20), Buterin(19). 다음 세대는 더 어린 나이에 시작합니다.", stat: "19", sl: "Average Age" }, { title: "Web3 + AI 교차점", desc: "Hashed의 Web3 전문성과 NEXON의 게임 DNA가 만나는 교차점.", stat: "×", sl: "Hashed × NEXON" }].map((item, i) => (<div key={i} className="card"><div className="stat-number" style={{ marginBottom: "4px" }}>{item.stat}</div><div className="stat-label" style={{ marginBottom: "24px" }}>{item.sl}</div><h3 className="card-title" style={{ marginBottom: "12px" }}>{item.title}</h3><p className="body-sm">{item.desc}</p></div>))}
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section style={{ padding: "64px 0", textAlign: "center" }}>
        <div className="container-xl">
          <div className="stat-label" style={{ marginBottom: "24px", fontSize: "12px" }}>Powered By</div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
            <span className="text-accent" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 700, letterSpacing: "0.08em" }}>HASHED</span>
            <span style={{ fontSize: "clamp(20px, 4vw, 32px)", color: "var(--border)", fontWeight: 300 }}>×</span>
            <span className="text-accent" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 700, letterSpacing: "0.08em" }}>NEXON</span>
          </div>
          <p className="body-text" style={{ marginTop: "20px", maxWidth: "500px", margin: "20px auto 0" }}>Web3 투자의 선두 Hashed와 글로벌 게임 제국 NEXON이 함께 만드는 차세대 빌더 생태계</p>
        </div>
      </section>
      <hr className="divider" />
      <section id="waitlist" className="section-pad bg-alt">
        <div className="container-xl" style={{ maxWidth: "720px", textAlign: "center" }}>
          <div className="section-label" style={{ marginBottom: "16px" }}>Join the Waitlist</div>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "16px" }}>READY TO<br /><span className="text-accent">VIBE &amp; BUILD?</span></h2>
          <p className="body-text" style={{ fontSize: "17px", marginBottom: "48px", lineHeight: 1.8 }}>Season 01 선발은 제한된 인원으로 진행됩니다.<br />지금 바로 웨이트리스트에 등록하고 기회를 잡으세요.</p>
          {!submitted ? (<form onSubmit={handleSubmit} className="waitlist-form"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="input-field" /><button type="submit" disabled={loading} className="btn-primary" style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer", whiteSpace: "nowrap" }}>{loading ? "LOADING..." : "JOIN WAITLIST"}</button></form>) : (<div style={{ border: "1px solid var(--accent)", padding: "32px 40px" }}><div style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent)", marginBottom: "12px", letterSpacing: "0.1em" }}>REGISTERED</div><p className="body-sm">웨이트리스트에 등록되었습니다.</p></div>)}
          <div style={{ marginTop: "24px", fontSize: "12px", color: "var(--text-sub)", letterSpacing: "0.06em" }}>NO SPAM. WE ONLY SEND UPDATES THAT MATTER.</div>
        </div>
      </section>
      <footer style={{ borderTop: "1px solid var(--border)", padding: "64px 0 40px" }}>
        <div className="container-xl">
          <div className="footer-grid" style={{ marginBottom: "48px" }}>
            <div><div style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "var(--text)", marginBottom: "12px", textTransform: "uppercase" }}>Vibers Life</div><p className="body-sm" style={{ maxWidth: "280px" }}>상위 1% 어린 빌더를 위한 펠로우십 프로그램</p></div>
            <div><div className="stat-label" style={{ marginBottom: "16px" }}>Links</div><div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{[{ l: "About", h: "/about" }, { l: "House", h: "/house" }, { l: "Fellowship", h: "/fellowship" }].map((lk) => (<Link key={lk.l} href={lk.h} style={{ fontSize: "14px", color: "var(--text-sub)", textDecoration: "none" }}>{lk.l}</Link>))}</div></div>
            <div><div className="stat-label" style={{ marginBottom: "16px" }}>Backed By</div><div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent)" }}>HASHED</span><span style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent)" }}>NEXON</span></div></div>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", fontSize: "13px", color: "var(--text-sub)" }}><div>&copy; 2025 VIBERS LIFE. ALL RIGHTS RESERVED.</div><div>POWERED BY HASHED × NEXON</div></div>
        </div>
      </footer>
    </main>
  );
}
