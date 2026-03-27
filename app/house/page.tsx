"use client";
const FLOORS = [
  { floor: "1F", label: "FLOOR 01", title: "라운지 & 이벤트", desc: "빌더들이 쉬고, 모이고, 스파크를 일으키는 공간.", items: ["오픈 라운지 & 카페 바", "이벤트 스테이지 (100명 수용)", "게스트 강연 & 파티 공간", "24/7 스낵 바 & 음료"] },
  { floor: "2F", label: "FLOOR 02", title: "코워킹 스페이스", desc: "24/7 오픈. 초고속 인터넷, 스탠딩 데스크, 집중 부스까지 갖춘 프리미엄 업무 환경.", items: ["스탠딩/시팅 데스크 40석", "화상회의 룸 × 4", "사일런트 포커스 존", "1Gbps 전용 인터넷"] },
  { floor: "3F", label: "FLOOR 03", title: "프로그램 & 멘토링", desc: "멘토링, 워크숍, 데모데이 준비까지. Hashed & NEXON 멘토들과 만나는 곳.", items: ["멘토링 룸 × 2", "워크숍 홀 (50명)", "리허설 & 피칭 스튜디오", "1:1 오피스아워 부스"] },
  { floor: "4-5F", label: "FLOOR 04-05", title: "주거 공간", desc: "1인 1실 개인룸 + 공용 주방/욕실. 완전 설비 상태로 입주 가능.", items: ["1인 1실 개인룸 (20실)", "공용 주방 & 다이닝 2곳", "루프탑 데크 & 힐링 공간", "세탁/청소 서비스 포함"] },
];
const CRITERIA = [
  { id: "01", title: "빌드 밀도", subtitle: "Build Density", desc: "계획서보다 프로토타입. 말보다 배포 URL." },
  { id: "02", title: "바이브코딩", subtitle: "Vibe Coding", desc: "AI를 도구로, 아이디어를 현실로. 코딩이 놀이인 사람." },
  { id: "03", title: "자기주도성", subtitle: "Self-Direction", desc: "스스로 문제를 발견하고, 해결책을 설계하고, 실행까지 책임지는 사람." },
  { id: "04", title: "공동체 기여", subtitle: "Community Impact", desc: "개인 성과보다 팀의 성공에 기여하는 사람." },
  { id: "05", title: "성장 속도", subtitle: "Growth Velocity", desc: "얼마나 빠르게 배우고, 적용하고, 다음 레벨로 가는가?" },
  { id: "06", title: "끝까지 밀기", subtitle: "Ship to the End", desc: "멋진 시작보다 완성. 포기하지 않고 끝을 보는 사람." },
];
export default function HousePage() {
  return (
    <main>
      <section style={{ paddingTop: "160px", paddingBottom: "120px" }}>
        <div className="container-xl" style={{ textAlign: "center" }}>
          <div className="section-label" style={{ marginBottom: "32px" }}>VIBERS HOUSE — SEASON 01</div>
          <h1 className="page-title" style={{ marginBottom: "32px" }}>YOUR BASE.<br />YOUR CREW.<br /><span className="text-accent">YOUR 6 MONTHS.</span></h1>
          <p className="body-text" style={{ maxWidth: "560px", margin: "0 auto 12px" }}>Vibers House는 선발된 최정예 20명의 빌더들이<br /><strong style={{ color: "var(--text)" }}>함께 생활하고, 함께 만들고, 함께 성장</strong>하는 풀타임 레지던시 공간입니다.</p>
          <p className="body-sm" style={{ marginBottom: "48px" }}>Powered by <span className="text-accent" style={{ fontWeight: 600 }}>Hashed</span> × <span className="text-accent" style={{ fontWeight: 600 }}>NEXON</span></p>
          <div className="hero-ctas" style={{ justifyContent: "center" }}><a href="#apply" className="btn-primary">Apply for House</a><a href="#floors" className="btn-outline">Explore Floors</a></div>
        </div>
      </section>
      <hr className="divider" />
      <section id="floors" className="section-pad">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "64px" }}><div className="section-label" style={{ marginBottom: "16px" }}>SPACE LAYOUT</div><h2 className="section-title">5개 층의 완전한<br /><span className="text-accent">빌더 생태계</span></h2></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FLOORS.map((floor, i) => (<div key={i} className="card floor-card-grid"><div style={{ textAlign: "center" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, color: "var(--accent)", lineHeight: 1, marginBottom: "4px" }}>{floor.floor}</div><div className="section-label" style={{ fontSize: "10px" }}>{floor.label}</div></div><div><h3 className="card-title" style={{ marginBottom: "8px" }}>{floor.title}</h3><p className="body-sm" style={{ fontSize: "14px", maxWidth: "480px" }}>{floor.desc}</p></div><div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>{floor.items.map((item, j) => (<div key={j} className="check-item" style={{ padding: "4px 0", fontSize: "13px" }}>{item}</div>))}</div></div>))}
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section className="section-pad bg-alt">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "64px" }}><div className="section-label" style={{ marginBottom: "16px" }}>SELECTION CRITERIA</div><h2 className="section-title">우리가 찾는<br /><span className="text-accent">6가지 선발 기준</span></h2></div>
          <div className="grid-editorial-3">
            {CRITERIA.map((c, i) => (<div key={i} className="card" style={{ position: "relative", overflow: "hidden" }}><div className="editorial-number" style={{ position: "absolute", top: "20px", right: "24px" }}>{c.id}</div><div className="section-label" style={{ marginBottom: "16px", color: "var(--accent)" }}>{c.id}</div><h3 className="card-title" style={{ marginBottom: "4px" }}>{c.title}</h3><div className="body-sm" style={{ fontSize: "13px", marginBottom: "16px" }}>{c.subtitle}</div><p className="body-sm" style={{ fontSize: "14px" }}>{c.desc}</p></div>))}
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "64px" }}><div className="section-label" style={{ marginBottom: "16px" }}>RESIDENCY STRUCTURE</div><h2 className="section-title"><span className="text-accent">6개월 기본</span><br />최대 2년까지 연장</h2></div>
          <div className="residency-split" style={{ marginBottom: "48px" }}>
            <div className="card" style={{ textAlign: "center", padding: "40px 32px" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "56px", fontWeight: 700, color: "var(--accent)", lineHeight: 1, marginBottom: "8px" }}>10</div><div className="section-label" style={{ color: "var(--accent)", marginBottom: "20px" }}>HASHED SLOTS</div>{["온체인 프로젝트 우선", "Web3 멘토링 제공", "Hashed 네트워크 접근"].map((t, i) => (<div key={i} className="check-item" style={{ justifyContent: "center", fontSize: "13px" }}>{t}</div>))}</div>
            <div style={{ textAlign: "center", padding: "0 8px" }}><div style={{ fontSize: "24px", color: "var(--border)", fontWeight: 500 }}>+</div><div style={{ fontSize: "32px", color: "var(--text)", fontWeight: 700, margin: "4px 0" }}>=</div><div className="section-label">TOTAL</div></div>
            <div className="card" style={{ textAlign: "center", padding: "40px 32px" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "56px", fontWeight: 700, color: "var(--accent)", lineHeight: 1, marginBottom: "8px" }}>10</div><div className="section-label" style={{ color: "var(--accent)", marginBottom: "20px" }}>NEXON SLOTS</div>{["게임 IP 활용 가능", "NEXON 멘토링 제공", "글로벌 배포 지원"].map((t, i) => (<div key={i} className="check-item" style={{ justifyContent: "center", fontSize: "13px" }}>{t}</div>))}</div>
          </div>
          <div className="stats-4">
            {[{ label: "총 정원", value: "20명", note: "Hashed 10 + NEXON 10" }, { label: "기본 기간", value: "6개월", note: "입주 ~ 데모데이" }, { label: "최대 연장", value: "2년", note: "성과 평가 후 갱신" }, { label: "코호트", value: "연 2회", note: "봄 / 가을 시즌" }].map((stat, i) => (<div key={i} className="bg-alt" style={{ padding: "28px 24px", textAlign: "center" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "var(--accent)", marginBottom: "6px" }}>{stat.value}</div><div style={{ fontSize: "12px", fontWeight: 600, color: "var(--text)", marginBottom: "4px" }}>{stat.label}</div><div className="body-sm" style={{ fontSize: "12px" }}>{stat.note}</div></div>))}
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="apply" className="section-pad bg-alt">
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center", padding: "0 32px" }}>
          <div className="section-label" style={{ marginBottom: "24px" }}>READY TO MOVE IN</div>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "20px" }}>당신의 자리는<br /><span className="text-accent">단 20개</span>뿐입니다.</h2>
          <p className="body-text" style={{ fontSize: "16px", marginBottom: "40px" }}>선발 결과는 개별 이메일로 통보됩니다.</p>
          <a href="mailto:apply@vibers.life?subject=Vibers House Season 01 Waitlist" className="btn-primary">Register Waitlist</a>
          <div className="body-sm" style={{ fontSize: "13px", marginTop: "12px" }}>apply@vibers.life</div>
        </div>
      </section>
      <footer style={{ padding: "40px 32px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--text)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "8px" }}>VIBERS HOUSE</div>
        <div className="body-sm" style={{ fontSize: "12px" }}>&copy; 2025 VIBERS LIFE · POWERED BY HASHED × NEXON</div>
      </footer>
    </main>
  );
}
