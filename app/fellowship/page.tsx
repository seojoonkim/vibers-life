"use client";
import Link from "next/link";
const BENEFITS = [
  { title: "생활비 지원", desc: "펠로우십 기간 동안 생활비를 지원합니다. 빌드에만 집중하세요." },
  { title: "Hashed 멘토십", desc: "Web3 업계 최고 투자자들의 1:1 멘토링. 제품 전략부터 토크노믹스까지." },
  { title: "NEXON 네트워크", desc: "글로벌 게임 제국의 내부 네트워크와 직접 연결." },
  { title: "프리시드 투자 기회", desc: "성과 있는 팀에게 Hashed를 통한 프리시드 투자 기회." },
  { title: "글로벌 이벤트", desc: "ETHGlobal, 도쿄 게임쇼, 각종 해커톤 대표 참가." },
  { title: "평생 알럼나이", desc: "한 번 Vibers면 영원히 Vibers. 선배-후배 연결." },
];
const STEPS = [
  { step: "01", title: "온라인 지원서", desc: "기본 정보 + 빌드한 것들 + 왜 Vibers인지.", duration: "15분" },
  { step: "02", title: "포트폴리오 검토", desc: "GitHub, 앱스토어 링크, 데모 영상 등 모든 형태 환영.", duration: "1-2주" },
  { step: "03", title: "1차 인터뷰", desc: "30분 화상 미팅. 기술보다 마인드셋 확인.", duration: "30분" },
  { step: "04", title: "오프라인 챌린지", desc: "서울 오피스 방문. 24시간 미니 해커톤.", duration: "1일" },
  { step: "05", title: "최종 선발 & 입주", desc: "최종 20명 선발 통보. D-14 OT, D-Day 입주.", duration: "즉시" },
];
export default function FellowshipPage() {
  return (
    <main>
      <section style={{ paddingTop: "160px", paddingBottom: "100px" }}>
        <div className="container-xl" style={{ textAlign: "center" }}>
          <div className="section-label" style={{ marginBottom: "40px" }}>VIBERS FELLOWSHIP — TOP 1%</div>
          <h1 className="page-title" style={{ marginBottom: "24px" }}>SELECTED.<br />SUPPORTED.<br /><span className="text-accent">UNLEASHED.</span></h1>
          <p className="body-text" style={{ maxWidth: "560px", margin: "0 auto 48px" }}>Vibers Fellowship은 선발된 상위 1% 빌더들에게 제공되는 집중 지원 프로그램입니다. 빌더 생태계의 시작점입니다.</p>
          <div className="hero-ctas" style={{ justifyContent: "center" }}><a href="#process" className="btn-primary">How to Apply</a><Link href="/house" className="btn-outline">Explore House</Link></div>
        </div>
      </section>
      <hr className="divider" />
      <section id="architecture" className="section-pad">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "64px" }}><div className="section-label" style={{ marginBottom: "12px" }}>ARCHITECTURE</div><h2 className="section-title">3단계 <span className="text-accent">빌더 여정</span></h2></div>
          <div className="grid-editorial-3" style={{ alignItems: "stretch" }}>
            {[
              { tier: "TIER 1", title: "MEMBERSHIP", subtitle: "Vibers 커뮤니티", desc: "지원 후 합격한 모든 빌더. 온라인 커뮤니티, 이벤트 참가, 네트워크 접근 권한.", members: "열린 지원", hl: false },
              { tier: "TIER 2", title: "FELLOWSHIP", subtitle: "Vibers Fellows", desc: "엄격한 선발을 통과한 상위 빌더. 멘토링, 펀딩, 글로벌 이벤트, 집중 지원.", members: "선발제", hl: true },
              { tier: "TIER 3", title: "HOUSE", subtitle: "Vibers Residents", desc: "Fellows 중 최정예 20명. 풀타임 레지던시, 생활비 지원, 투자 기회.", members: "시즌 20명", hl: false },
            ].map((tier, i) => (<div key={i} style={{ border: tier.hl ? "2px solid var(--accent)" : "1px solid var(--border)", padding: "36px 28px", textAlign: "center", position: "relative", transform: tier.hl ? "translateY(-8px)" : "none", background: tier.hl ? "var(--bg-alt)" : "var(--bg)", transition: "border-color 0.3s ease" }}>{tier.hl && (<div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: "var(--accent)", fontSize: "11px", fontWeight: 600, color: "#FFFFFF", padding: "4px 16px", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>MAIN PROGRAM</div>)}<div className="section-label" style={{ marginBottom: "12px" }}>{tier.tier}</div><div style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: tier.hl ? "var(--accent)" : "var(--text)", marginBottom: "4px" }}>{tier.title}</div><div className="body-sm" style={{ fontSize: "14px", marginBottom: "20px" }}>{tier.subtitle}</div><p className="body-sm" style={{ fontSize: "14px", marginBottom: "24px" }}>{tier.desc}</p><div className="tag">{tier.members}</div></div>))}
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section className="section-pad bg-alt">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "64px" }}><div className="section-label" style={{ marginBottom: "12px" }}>BENEFITS</div><h2 className="section-title">펠로우가 되면 <span className="text-accent">무엇이 달라지나요?</span></h2></div>
          <div className="grid-editorial-2">
            {BENEFITS.map((b, i) => (<div key={i} className="card" style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}><div className="accent-line" style={{ minWidth: "3px", width: "3px", height: "40px", marginTop: "4px" }} /><div><h3 className="card-title" style={{ fontSize: "16px", marginBottom: "8px" }}>{b.title}</h3><p className="body-sm" style={{ fontSize: "14px" }}>{b.desc}</p></div></div>))}
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="process" className="section-pad">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "64px" }}><div className="section-label" style={{ marginBottom: "12px" }}>PROCESS</div><h2 className="section-title">5단계 <span className="text-accent">선발 프로세스</span></h2></div>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            {STEPS.map((step, i) => (<div key={i} style={{ display: "flex", gap: "24px", position: "relative" }}><div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: "48px" }}><div className={`process-step-num${i === STEPS.length - 1 ? " is-final" : ""}`}>{step.step}</div>{i < STEPS.length - 1 && (<div style={{ width: "2px", flexGrow: 1, background: "var(--border)", minHeight: "24px" }} />)}</div><div style={{ flex: 1, paddingBottom: i < STEPS.length - 1 ? "32px" : "0" }}><div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}><h3 className="card-title" style={{ fontSize: "17px" }}>{step.title}</h3><span className="tag">{step.duration}</span></div><p className="body-sm" style={{ fontSize: "14px" }}>{step.desc}</p></div></div>))}
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section className="section-pad bg-alt" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 32px" }}>
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 4vw, 40px)", marginBottom: "16px" }}>당신이 <span className="text-accent">상위 1%</span>라면<br />우리가 찾고 있습니다.</h2>
          <p className="body-text" style={{ fontSize: "16px", marginBottom: "40px" }}>지금 지원서를 작성하세요. 당신이 만든 것을 보여주세요.</p>
          <Link href="/" className="btn-primary">APPLY NOW</Link>
        </div>
      </section>
      <footer style={{ padding: "32px", borderTop: "1px solid var(--border)", textAlign: "center" }}><div className="body-sm" style={{ fontSize: "13px" }}>&copy; 2025 VIBERS LIFE · POWERED BY HASHED × NEXON</div></footer>
    </main>
  );
}
