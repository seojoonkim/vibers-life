"use client";

// ── Inline SVG Icon Components ─────────────────────────────────────────────

const PixelStar = ({ size = 16, color = "#00FF88" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <rect x="7" y="0" width="2" height="2" fill={color} />
    <rect x="7" y="14" width="2" height="2" fill={color} />
    <rect x="0" y="7" width="2" height="2" fill={color} />
    <rect x="14" y="7" width="2" height="2" fill={color} />
    <rect x="6" y="4" width="4" height="8" fill={color} />
    <rect x="4" y="6" width="8" height="4" fill={color} />
  </svg>
);

const PixelCheck = ({ color = "#00FF88" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="7" width="2" height="2" fill={color} />
    <rect x="3" y="9" width="2" height="2" fill={color} />
    <rect x="5" y="11" width="2" height="2" fill={color} />
    <rect x="7" y="9" width="2" height="2" fill={color} />
    <rect x="9" y="7" width="2" height="2" fill={color} />
    <rect x="11" y="5" width="2" height="2" fill={color} />
  </svg>
);

const PixelBuilding = ({ color = "#8B5CF6" }: { color?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="4" width="24" height="2" fill={color} />
    <rect x="4" y="6" width="2" height="22" fill={color} />
    <rect x="26" y="6" width="2" height="22" fill={color} />
    <rect x="4" y="28" width="24" height="2" fill={color} />
    <rect x="8" y="10" width="4" height="4" fill={color} opacity="0.6" />
    <rect x="14" y="10" width="4" height="4" fill={color} opacity="0.6" />
    <rect x="20" y="10" width="4" height="4" fill={color} opacity="0.6" />
    <rect x="8" y="16" width="4" height="4" fill={color} opacity="0.6" />
    <rect x="14" y="16" width="4" height="4" fill={color} opacity="0.6" />
    <rect x="20" y="16" width="4" height="4" fill={color} opacity="0.6" />
    <rect x="13" y="22" width="6" height="8" fill={color} opacity="0.8" />
  </svg>
);

const PixelLayers = ({ color = "#00FF88" }: { color?: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="12" width="24" height="2" fill={color} />
    <rect x="2" y="8" width="24" height="2" fill={color} opacity="0.6" />
    <rect x="2" y="16" width="24" height="2" fill={color} opacity="0.6" />
    <rect x="6" y="4" width="16" height="2" fill={color} opacity="0.3" />
    <rect x="6" y="20" width="16" height="2" fill={color} opacity="0.3" />
  </svg>
);

const PixelLounge = ({ color = "#00FF88" }: { color?: string }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="18" width="32" height="4" fill={color} opacity="0.9" />
    <rect x="4" y="14" width="28" height="4" fill={color} opacity="0.6" />
    <rect x="2" y="22" width="4" height="6" fill={color} opacity="0.7" />
    <rect x="30" y="22" width="4" height="6" fill={color} opacity="0.7" />
    <rect x="14" y="8" width="8" height="6" fill={color} opacity="0.4" />
    <rect x="16" y="6" width="4" height="2" fill={color} opacity="0.3" />
  </svg>
);

const PixelDesk = ({ color = "#8B5CF6" }: { color?: string }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="16" width="32" height="4" fill={color} opacity="0.9" />
    <rect x="4" y="20" width="4" height="10" fill={color} opacity="0.7" />
    <rect x="28" y="20" width="4" height="10" fill={color} opacity="0.7" />
    <rect x="10" y="8" width="16" height="8" fill={color} opacity="0.5" />
    <rect x="12" y="10" width="12" height="6" fill={color} opacity="0.3" />
    <rect x="14" y="6" width="2" height="2" fill={color} opacity="0.4" />
  </svg>
);

const PixelProgram = ({ color = "#FF6B35" }: { color?: string }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="4" width="28" height="20" fill={color} opacity="0.2" />
    <rect x="4" y="4" width="28" height="2" fill={color} opacity="0.8" />
    <rect x="4" y="4" width="2" height="20" fill={color} opacity="0.8" />
    <rect x="30" y="4" width="2" height="20" fill={color} opacity="0.8" />
    <rect x="4" y="22" width="28" height="2" fill={color} opacity="0.8" />
    <rect x="8" y="8" width="20" height="2" fill={color} opacity="0.6" />
    <rect x="8" y="12" width="14" height="2" fill={color} opacity="0.4" />
    <rect x="8" y="16" width="18" height="2" fill={color} opacity="0.4" />
    <rect x="14" y="26" width="8" height="4" fill={color} opacity="0.7" />
    <rect x="10" y="30" width="16" height="2" fill={color} opacity="0.5" />
  </svg>
);

const PixelBed = ({ color = "#FFD700" }: { color?: string }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="20" width="32" height="6" fill={color} opacity="0.9" />
    <rect x="2" y="20" width="32" height="2" fill={color} />
    <rect x="2" y="26" width="4" height="6" fill={color} opacity="0.7" />
    <rect x="30" y="26" width="4" height="6" fill={color} opacity="0.7" />
    <rect x="6" y="10" width="24" height="10" fill={color} opacity="0.3" />
    <rect x="8" y="12" width="8" height="6" fill={color} opacity="0.5" />
    <rect x="6" y="10" width="24" height="2" fill={color} opacity="0.6" />
  </svg>
);

const PixelHammer = ({ color = "#00FF88" }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="10" width="8" height="4" fill={color} opacity="0.8" />
    <rect x="4" y="8" width="6" height="2" fill={color} />
    <rect x="4" y="14" width="6" height="2" fill={color} />
    <rect x="10" y="11" width="12" height="2" fill={color} opacity="0.7" />
    <rect x="20" y="9" width="2" height="6" fill={color} opacity="0.5" />
  </svg>
);

const PixelCode = ({ color = "#8B5CF6" }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="0" y="10" width="2" height="4" fill={color} />
    <rect x="2" y="8" width="2" height="2" fill={color} />
    <rect x="2" y="14" width="2" height="2" fill={color} />
    <rect x="4" y="6" width="2" height="2" fill={color} />
    <rect x="4" y="16" width="2" height="2" fill={color} />
    <rect x="14" y="10" width="2" height="4" fill={color} />
    <rect x="12" y="8" width="2" height="2" fill={color} />
    <rect x="12" y="14" width="2" height="2" fill={color} />
    <rect x="10" y="6" width="2" height="2" fill={color} />
    <rect x="10" y="16" width="2" height="2" fill={color} />
    <rect x="7" y="14" width="2" height="4" fill={color} opacity="0.6" />
  </svg>
);

const PixelPerson = ({ color = "#00FF88" }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="10" y="2" width="4" height="4" fill={color} />
    <rect x="8" y="6" width="8" height="6" fill={color} opacity="0.8" />
    <rect x="6" y="12" width="12" height="2" fill={color} opacity="0.6" />
    <rect x="6" y="14" width="4" height="6" fill={color} opacity="0.7" />
    <rect x="14" y="14" width="4" height="6" fill={color} opacity="0.7" />
    <rect x="4" y="6" width="4" height="4" fill={color} opacity="0.4" />
    <rect x="16" y="6" width="4" height="4" fill={color} opacity="0.4" />
  </svg>
);

const PixelArrow = ({ color = "#00FF88" }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="0" y="7" width="10" height="2" fill={color} />
    <rect x="8" y="5" width="2" height="2" fill={color} />
    <rect x="10" y="3" width="2" height="2" fill={color} />
    <rect x="12" y="1" width="2" height="2" fill={color} />
    <rect x="8" y="9" width="2" height="2" fill={color} />
    <rect x="10" y="11" width="2" height="2" fill={color} />
    <rect x="12" y="13" width="2" height="2" fill={color} />
  </svg>
);

const PixelClock = ({ color = "#8B5CF6" }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="8" y="2" width="8" height="2" fill={color} />
    <rect x="4" y="4" width="4" height="2" fill={color} />
    <rect x="16" y="4" width="4" height="2" fill={color} />
    <rect x="2" y="8" width="2" height="8" fill={color} />
    <rect x="20" y="8" width="2" height="8" fill={color} />
    <rect x="4" y="18" width="4" height="2" fill={color} />
    <rect x="16" y="18" width="4" height="2" fill={color} />
    <rect x="8" y="20" width="8" height="2" fill={color} />
    <rect x="11" y="7" width="2" height="5" fill={color} opacity="0.8" />
    <rect x="11" y="11" width="5" height="2" fill={color} opacity="0.8" />
  </svg>
);

const PixelGlobe = ({ color = "#00FF88" }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="8" y="2" width="8" height="2" fill={color} />
    <rect x="4" y="4" width="4" height="2" fill={color} />
    <rect x="16" y="4" width="4" height="2" fill={color} />
    <rect x="2" y="8" width="2" height="8" fill={color} />
    <rect x="20" y="8" width="2" height="8" fill={color} />
    <rect x="4" y="18" width="4" height="2" fill={color} />
    <rect x="16" y="18" width="4" height="2" fill={color} />
    <rect x="8" y="20" width="8" height="2" fill={color} />
    <rect x="10" y="2" width="4" height="20" fill={color} opacity="0.3" />
    <rect x="2" y="10" width="20" height="4" fill={color} opacity="0.3" />
  </svg>
);

const PixelFire = ({ color = "#FF6B35" }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="10" y="2" width="4" height="4" fill={color} />
    <rect x="8" y="4" width="2" height="2" fill={color} opacity="0.6" />
    <rect x="14" y="4" width="2" height="2" fill={color} opacity="0.6" />
    <rect x="8" y="6" width="8" height="10" fill={color} opacity="0.8" />
    <rect x="6" y="10" width="12" height="8" fill={color} />
    <rect x="4" y="16" width="16" height="4" fill={color} opacity="0.9" />
    <rect x="8" y="20" width="8" height="2" fill={color} opacity="0.6" />
    <rect x="10" y="8" width="4" height="6" fill="#FFD700" opacity="0.7" />
  </svg>
);

const PixelDiamond = ({ color = "#FFD700" }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="10" y="2" width="4" height="2" fill={color} />
    <rect x="8" y="4" width="2" height="2" fill={color} />
    <rect x="14" y="4" width="2" height="2" fill={color} />
    <rect x="6" y="6" width="2" height="2" fill={color} />
    <rect x="16" y="6" width="2" height="2" fill={color} />
    <rect x="4" y="8" width="16" height="4" fill={color} />
    <rect x="6" y="12" width="2" height="2" fill={color} />
    <rect x="16" y="12" width="2" height="2" fill={color} />
    <rect x="8" y="14" width="2" height="2" fill={color} />
    <rect x="14" y="14" width="2" height="2" fill={color} />
    <rect x="10" y="16" width="4" height="2" fill={color} />
    <rect x="8" y="8" width="8" height="4" fill={color} opacity="0.4" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────

const FLOORS = [
  {
    floor: "1F",
    label: "FLOOR 01",
    title: "라운지 & 이벤트",
    desc: "빌더들이 쉬고, 모이고, 스파크를 일으키는 공간. 네트워킹 이벤트, 외부 게스트 강연, 밤샘 해커톤이 이 층에서 탄생합니다.",
    color: "#00FF88",
    icon: <PixelLounge color="#00FF88" />,
    items: ["오픈 라운지 & 카페 바", "이벤트 스테이지 (100명 수용)", "게스트 강연 & 파티 공간", "24/7 스낵 바 & 음료"],
  },
  {
    floor: "2F",
    label: "FLOOR 02",
    title: "코워킹 스페이스",
    desc: "24/7 오픈. 초고속 인터넷, 스탠딩 데스크, 집중 부스, 화상회의 룸까지 갖춘 프리미엄 업무 환경. 빌드만 하는 공간.",
    color: "#8B5CF6",
    icon: <PixelDesk color="#8B5CF6" />,
    items: ["스탠딩/시팅 데스크 40석", "화상회의 룸 × 4", "사일런트 포커스 존", "1Gbps 전용 인터넷"],
  },
  {
    floor: "3F",
    label: "FLOOR 03",
    title: "프로그램 & 멘토링",
    desc: "멘토링, 워크숍, 데모데이 준비까지. 모든 공식 프로그램이 이 층에서 진행됩니다. Hashed & NEXON의 멘토들과 만나는 곳.",
    color: "#FF6B35",
    icon: <PixelProgram color="#FF6B35" />,
    items: ["멘토링 룸 × 2", "워크숍 홀 (50명)", "리허설 & 피칭 스튜디오", "1:1 오피스아워 부스"],
  },
  {
    floor: "4-5F",
    label: "FLOOR 04-05",
    title: "주거 공간",
    desc: "펠로우들이 실제로 생활하는 공간. 1인 1실 개인룸 + 공용 주방/욕실. 완전 설비 상태로 입주 가능. 집 걱정은 여기서 끝.",
    color: "#FFD700",
    icon: <PixelBed color="#FFD700" />,
    items: ["1인 1실 개인룸 (20실)", "공용 주방 & 다이닝 2곳", "루프탑 데크 & 힐링 공간", "세탁/청소 서비스 포함"],
  },
];

const CRITERIA = [
  {
    id: "01",
    title: "빌드 밀도",
    subtitle: "Build Density",
    desc: "6개월 안에 얼마나 많은 것을 만들 수 있는가? 계획서보다 프로토타입. 말보다 배포 URL. 이미 무언가를 만든 사람.",
    color: "#00FF88",
    icon: <PixelHammer color="#00FF88" />,
  },
  {
    id: "02",
    title: "바이브코딩",
    subtitle: "Vibe Coding",
    desc: "AI를 도구로, 아이디어를 현실로. 기술 스택보다 만드는 것 자체에서 즐거움을 느끼는 사람. 코딩이 놀이인 사람.",
    color: "#8B5CF6",
    icon: <PixelCode color="#8B5CF6" />,
  },
  {
    id: "03",
    title: "자기주도성",
    subtitle: "Self-Direction",
    desc: "시키는 일만 하는 사람은 필요없다. 스스로 문제를 발견하고, 해결책을 설계하고, 실행까지 책임지는 사람.",
    color: "#00FF88",
    icon: <PixelPerson color="#00FF88" />,
  },
  {
    id: "04",
    title: "공동체 기여",
    subtitle: "Community Impact",
    desc: "개인 성과보다 팀의 성공에 기여하는 사람. 같은 공간을 쓰는 동료들을 성장시키는 사람. 받기보다 주는 에너지.",
    color: "#FF6B35",
    icon: <PixelGlobe color="#FF6B35" />,
  },
  {
    id: "05",
    title: "성장 속도",
    subtitle: "Growth Velocity",
    desc: "얼마나 빠르게 배우고, 적용하고, 다음 레벨로 가는가? 6개월 전 자신과 비교했을 때 알아볼 수 없을 만큼 달라진 사람.",
    color: "#FFD700",
    icon: <PixelFire color="#FFD700" />,
  },
  {
    id: "06",
    title: "끝까지 밀기",
    subtitle: "Ship to the End",
    desc: "멋진 시작보다 완성. 런칭까지, 사용자 피드백까지, 다음 버전까지. 포기하지 않고 끝을 보는 사람만이 남습니다.",
    color: "#8B5CF6",
    icon: <PixelDiamond color="#8B5CF6" />,
  },
];

// ── Component ─────────────────────────────────────────────────────────────

export default function HousePage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="grid-bg crt hero-pad"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 32px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div style={{
          position: "absolute", top: "25%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px", height: "700px",
          background: "radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", right: "15%",
          width: "300px", height: "300px",
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Floating decorations */}
        {[
          { top: "15%", left: "8%", delay: "0s", color: "#00FF88" },
          { top: "22%", right: "10%", delay: "1.5s", color: "#8B5CF6" },
          { top: "60%", left: "5%", delay: "0.8s", color: "#FFD700" },
          { top: "70%", right: "8%", delay: "2s", color: "#00FF88" },
        ].map((pos, i) => (
          <div key={i} className="float-deco" style={{
            position: "absolute", ...pos,
            animation: `float 3s ease-in-out infinite ${pos.delay}`,
          }}>
            <PixelStar size={14} color={pos.color} />
          </div>
        ))}

        {/* Badge */}
        <div style={{
          fontFamily: "var(--font-pixel)",
          fontSize: "9px", color: "#00FF88",
          background: "rgba(0,255,136,0.08)",
          border: "1px solid rgba(0,255,136,0.3)",
          padding: "8px 20px", marginBottom: "32px",
          letterSpacing: "2px",
          display: "flex", alignItems: "center", gap: "10px",
        }}>
          <PixelBuilding color="#00FF88" />
          ▶ VIBERS HOUSE — SEASON 01
        </div>

        {/* Main headline */}
        <h1 style={{
          fontFamily: "var(--font-pixel)",
          fontSize: "clamp(18px, 3.2vw, 36px)",
          color: "#F0F0FF",
          textAlign: "center",
          lineHeight: "1.8",
          marginBottom: "28px",
        }}>
          YOUR BASE.
          <br />
          YOUR CREW.
          <br />
          <span style={{
            color: "#00FF88",
            textShadow: "0 0 30px rgba(0,255,136,0.6)",
            animation: "pixel-pulse 2s ease-in-out infinite",
            display: "inline-block",
          }}>
            YOUR 6 MONTHS.
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(15px, 1.8vw, 19px)",
          color: "#9090B0",
          textAlign: "center",
          maxWidth: "640px",
          lineHeight: "1.8",
          marginBottom: "16px",
        }}>
          Vibers House는 선발된 최정예 20명의 빌더들이
          <br />
          <span style={{ color: "#F0F0FF", fontWeight: 600 }}>함께 생활하고, 함께 만들고, 함께 성장</span>하는
          <br />
          풀타임 레지던시 공간입니다.
        </p>

        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          color: "#6060A0",
          marginBottom: "52px",
          textAlign: "center",
          letterSpacing: "0.5px",
        }}>
          Powered by{" "}
          <span style={{ color: "#8B5CF6" }}>Hashed</span>
          {" "}×{" "}
          <span style={{ color: "#00FF88" }}>NEXON</span>
        </p>

        {/* CTAs */}
        <div className="cta-flex" style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#apply" style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "11px", color: "#0A0A0F",
            background: "#00FF88",
            padding: "16px 32px", textDecoration: "none",
            letterSpacing: "1px",
            boxShadow: "0 0 24px rgba(0,255,136,0.45)",
            display: "inline-flex", alignItems: "center", gap: "8px",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#00CC6A";
              e.currentTarget.style.boxShadow = "0 0 48px rgba(0,255,136,0.65)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#00FF88";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(0,255,136,0.45)";
            }}
          >
            ▶ APPLY FOR HOUSE
          </a>
          <a href="#floors" style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "11px", color: "#8B5CF6",
            background: "transparent",
            border: "1px solid #8B5CF6",
            padding: "16px 32px", textDecoration: "none",
            letterSpacing: "1px",
            display: "inline-flex", alignItems: "center", gap: "8px",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,92,246,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            <PixelLayers color="#8B5CF6" />
            EXPLORE FLOORS
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute", bottom: "40px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
          animation: "float 2s ease-in-out infinite",
        }}>
          <div style={{ fontFamily: "var(--font-pixel)", fontSize: "7px", color: "#3030A0", letterSpacing: "2px" }}>SCROLL</div>
          <div style={{ color: "#3030A0" }}>▼</div>
        </div>
      </section>

      {/* ── Floor Breakdown ───────────────────────────────────────────── */}
      <section id="floors" style={{ padding: "100px 32px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "9px", color: "#00FF88",
            letterSpacing: "3px", marginBottom: "20px",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          }}>
            <PixelBuilding color="#00FF88" />
            {"// SPACE_LAYOUT"}
          </div>
          <h2 style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(22px, 3.5vw, 36px)",
            fontWeight: 700,
            color: "#F0F0FF", lineHeight: "1.6",
          }}>
            5개 층의 완전한
            <br />
            <span style={{ color: "#8B5CF6", textShadow: "0 0 20px rgba(139,92,246,0.4)" }}>빌더 생태계</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px", color: "#6060A0",
            marginTop: "16px", maxWidth: "500px", margin: "16px auto 0",
          }}>
            1층부터 5층까지, 빌더가 필요한 모든 것이 한 건물에.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {FLOORS.map((floor, i) => (
            <div
              key={i}
              className="floor-row"
              style={{
                background: "#0F0F1A",
                border: "1px solid rgba(139,92,246,0.12)",
                padding: "36px 40px",
                display: "grid",
                gridTemplateColumns: "100px 1fr auto",
                gap: "40px",
                alignItems: "center",
                minWidth: 0,
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${floor.color}40`;
                e.currentTarget.style.background = "#111122";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.12)";
                e.currentTarget.style.background = "#0F0F1A";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              {/* Floor indicator */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                {floor.icon}
                <div style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "22px", color: floor.color,
                  textShadow: `0 0 20px ${floor.color}70`,
                  lineHeight: 1,
                }}>
                  {floor.floor}
                </div>
                <div style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "6px", color: floor.color,
                  opacity: 0.5, letterSpacing: "1px",
                }}>
                  {floor.label}
                </div>
              </div>

              {/* Info */}
              <div style={{ minWidth: 0, flex: 1 }}>
                <h3 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px", fontWeight: 700, color: floor.color,
                  marginBottom: "12px", letterSpacing: "0.5px",
                  textShadow: `0 0 10px ${floor.color}60`,
                }}>
                  {floor.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px", color: "#8080A0",
                  lineHeight: "1.7", maxWidth: "500px",
                }}>
                  {floor.desc}
                </p>
              </div>

              {/* Features */}
              <div className="floor-features" style={{
                display: "flex", flexDirection: "column", gap: "10px",
                minWidth: "0", width: "240px", flexShrink: 0,
              }}>
                {floor.items.map((item, j) => (
                  <div key={j} style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px", color: "#5050A0",
                  }}>
                    <PixelCheck color={floor.color} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pixel Divider */}
      <div className="pixel-divider" />

      {/* ── Selection Criteria ────────────────────────────────────────── */}
      <section style={{
        padding: "100px 32px",
        background: "rgba(15,15,26,0.8)",
        borderTop: "1px solid rgba(139,92,246,0.12)",
        borderBottom: "1px solid rgba(139,92,246,0.12)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <div style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "9px", color: "#8B5CF6",
              letterSpacing: "3px", marginBottom: "20px",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            }}>
              <PixelDiamond color="#8B5CF6" />
              {"// SELECTION_CRITERIA"}
            </div>
            <h2 style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(22px, 3.5vw, 36px)",
              fontWeight: 700,
              color: "#F0F0FF", lineHeight: "1.6",
            }}>
              우리가 찾는
              <br />
              <span style={{ color: "#00FF88", textShadow: "0 0 20px rgba(0,255,136,0.4)" }}>6가지 선발 기준</span>
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px", color: "#6060A0",
              marginTop: "16px", maxWidth: "500px", margin: "16px auto 0",
            }}>
              Vibers House는 스펙이 아닌 에너지로 선발합니다.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "16px",
          }}>
            {CRITERIA.map((c, i) => (
              <div
                key={i}
                className="card-scale-glow"
                style={{
                  background: "#0A0A0F",
                  border: "1px solid rgba(139,92,246,0.12)",
                  padding: "32px",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${c.color}50`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.12)";
                }}
              >
                {/* Background number */}
                <div style={{
                  position: "absolute", top: "16px", right: "20px",
                  fontFamily: "var(--font-pixel)",
                  fontSize: "52px", color: c.color,
                  opacity: 0.05, lineHeight: 1,
                  pointerEvents: "none",
                }}>
                  {c.id}
                </div>

                {/* Top row */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  {c.icon}
                  <div style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "8px", color: c.color,
                    letterSpacing: "1px", opacity: 0.8,
                  }}>
                    {c.id}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px", fontWeight: 700, color: c.color,
                  marginBottom: "6px", letterSpacing: "0.5px",
                  textShadow: `0 0 10px ${c.color}50`,
                }}>
                  {c.title}
                </h3>
                <div style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px", color: "#5050A0",
                  marginBottom: "14px", letterSpacing: "1px",
                }}>
                  {c.subtitle}
                </div>

                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px", color: "#6868A0",
                  lineHeight: "1.75",
                }}>
                  {c.desc}
                </p>

                {/* Bottom accent */}
                <div style={{
                  marginTop: "20px", paddingTop: "20px",
                  borderTop: `1px solid ${c.color}20`,
                  display: "flex", alignItems: "center", gap: "6px",
                }}>
                  <PixelArrow color={c.color} />
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px", color: c.color,
                    opacity: 0.6, letterSpacing: "1px",
                  }}>
                    필수 조건
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pixel Divider */}
      <div className="pixel-divider" />

      {/* ── Residency Structure ───────────────────────────────────────── */}
      <section style={{ padding: "100px 32px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "9px", color: "#00FF88",
            letterSpacing: "3px", marginBottom: "20px",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          }}>
            <PixelClock color="#00FF88" />
            {"// RESIDENCY_STRUCTURE"}
          </div>
          <h2 style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(22px, 3.5vw, 36px)",
            fontWeight: 700,
            color: "#F0F0FF", lineHeight: "1.6",
          }}>
            <span style={{ color: "#8B5CF6" }}>6개월 기본</span>
            <br />
            최대 2년까지 연장
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px", color: "#6060A0",
            marginTop: "16px", maxWidth: "520px", margin: "16px auto 0",
          }}>
            성과를 증명하면, 당신의 자리는 더 오래 유지됩니다.
          </p>
        </div>

        {/* TO Structure */}
        <div style={{
          background: "linear-gradient(135deg, rgba(139,92,246,0.07) 0%, rgba(0,255,136,0.04) 100%)",
          border: "1px solid rgba(139,92,246,0.2)",
          padding: "56px 48px",
          marginBottom: "40px",
          position: "relative", overflow: "hidden",
        }}>
          {/* BG texture */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: "radial-gradient(rgba(139,92,246,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            pointerEvents: "none",
          }} />

          <div className="residency-main-grid" style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr 80px 1fr",
            gap: "32px",
            alignItems: "center",
            marginBottom: "56px",
          }}>
            {/* Hashed */}
            <div style={{
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.25)",
              padding: "40px 32px",
              textAlign: "center",
            }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                <PixelPerson color="#8B5CF6" />
              </div>
              <div style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "56px", color: "#8B5CF6",
                textShadow: "0 0 40px rgba(139,92,246,0.6)",
                marginBottom: "8px", lineHeight: 1,
              }}>
                10
              </div>
              <div style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "9px", color: "#8B5CF6",
                letterSpacing: "2px", marginBottom: "16px",
              }}>
                HASHED SLOTS
              </div>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px", color: "#6060A0",
                lineHeight: "1.7",
              }}>
                Web3 / 블록체인 / DeFi<br />
                NFT / 게임파이 빌더<br />
                <span style={{ color: "#8B5CF6", fontSize: "12px" }}>Hashed 포트폴리오와 직연결</span>
              </p>
              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {["온체인 프로젝트 우선", "Web3 멘토링 제공", "Hashed 네트워크 접근"].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                    <PixelCheck color="#8B5CF6" />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#5050A0" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "28px", color: "#3030A0",
              }}>+</div>
              <div style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "36px", color: "#F0F0FF",
                margin: "4px 0",
              }}>=</div>
              <div style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "9px", color: "#5050A0",
                letterSpacing: "1px",
              }}>TOTAL</div>
            </div>

            {/* NEXON */}
            <div style={{
              background: "rgba(0,255,136,0.06)",
              border: "1px solid rgba(0,255,136,0.2)",
              padding: "40px 32px",
              textAlign: "center",
            }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                <PixelFire color="#00FF88" />
              </div>
              <div style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "56px", color: "#00FF88",
                textShadow: "0 0 40px rgba(0,255,136,0.6)",
                marginBottom: "8px", lineHeight: 1,
              }}>
                10
              </div>
              <div style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "9px", color: "#00FF88",
                letterSpacing: "2px", marginBottom: "16px",
              }}>
                NEXON SLOTS
              </div>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px", color: "#6060A0",
                lineHeight: "1.7",
              }}>
                게임 / 엔터테인먼트<br />
                크리에이터 이코노미<br />
                <span style={{ color: "#00FF88", fontSize: "12px" }}>NEXON 내부팀 협업 기회</span>
              </p>
              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {["게임 IP 활용 가능", "NEXON 멘토링 제공", "글로벌 배포 지원"].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                    <PixelCheck color="#00FF88" />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#5050A0" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div style={{
            position: "relative",
            borderTop: "1px solid rgba(139,92,246,0.15)",
            paddingTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            textAlign: "center",
          }}>
            {[
              { label: "총 정원", value: "20명", color: "#F0F0FF", note: "Hashed 10 + NEXON 10" },
              { label: "기본 기간", value: "6개월", color: "#8B5CF6", note: "입주 ~ 데모데이" },
              { label: "최대 연장", value: "2년", color: "#00FF88", note: "성과 평가 후 갱신" },
              { label: "코호트", value: "연 2회", color: "#FFD700", note: "봄 / 가을 시즌" },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "clamp(20px, 3vw, 32px)",
                  color: stat.color,
                  textShadow: `0 0 20px ${stat.color}50`,
                  marginBottom: "8px",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "7px", color: "#5050A0",
                  letterSpacing: "2px", marginBottom: "6px",
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px", color: "#3838A0",
                }}>
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extension tiers */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}>
          {[
            {
              period: "6개월",
              label: "기본 레지던시",
              color: "#8B5CF6",
              icon: <PixelClock color="#8B5CF6" />,
              items: [
                "오리엔테이션 → 빌드 → 데모데이",
                "주 1회 멘토링 세션",
                "생활비 + 주거비 지원",
                "Hashed/NEXON 네트워크 접근",
              ],
            },
            {
              period: "+6개월",
              label: "1차 연장",
              color: "#00FF88",
              icon: <PixelFire color="#00FF88" />,
              items: [
                "데모데이 성과 평가 통과",
                "투자 유치 또는 사용자 지표 달성",
                "Hashed / NEXON 공식 추천",
                "시드 라운드 패스트트랙",
              ],
            },
            {
              period: "+12개월",
              label: "최대 연장 (총 2년)",
              color: "#FFD700",
              icon: <PixelDiamond color="#FFD700" />,
              items: [
                "프리시드 이상 펀딩 완료",
                "액티브 유저 1,000명+ 달성",
                "후배 코호트 공식 멘토 역할",
                "졸업 후 Alumni 네트워크 입성",
              ],
            },
          ].map((tier, i) => (
            <div
              key={i}
              style={{
                background: "#0F0F1A",
                border: "1px solid rgba(139,92,246,0.12)",
                padding: "36px 32px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${tier.color}40`;
                e.currentTarget.style.background = "#111122";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.12)";
                e.currentTarget.style.background = "#0F0F1A";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                {tier.icon}
                <div>
                  <div style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "18px", color: tier.color,
                    textShadow: `0 0 15px ${tier.color}70`,
                    lineHeight: 1, marginBottom: "4px",
                  }}>
                    {tier.period}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "7px", color: "#5050A0",
                    letterSpacing: "1px",
                  }}>
                    {tier.label}
                  </div>
                </div>
              </div>

              <div style={{ borderTop: `1px solid ${tier.color}20`, paddingTop: "20px" }}>
                {tier.items.map((item, j) => (
                  <div key={j} style={{
                    display: "flex", alignItems: "flex-start", gap: "10px",
                    marginBottom: "10px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px", color: "#6060A0",
                    lineHeight: "1.5",
                  }}>
                    <span style={{ color: tier.color, fontSize: "10px", marginTop: "2px", flexShrink: 0 }}>▶</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Apply CTA ─────────────────────────────────────────────────── */}
      <section
        id="apply"
        className="grid-bg"
        style={{
          padding: "120px 32px",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,255,136,0.15)",
        }}
      >
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px", height: "500px",
          background: "radial-gradient(ellipse, rgba(0,255,136,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative", zIndex: 1,
        }}>
          {/* Badge */}
          <div style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "9px", color: "#00FF88",
            background: "rgba(0,255,136,0.08)",
            border: "1px solid rgba(0,255,136,0.25)",
            padding: "10px 20px",
            letterSpacing: "2px",
            display: "inline-flex", alignItems: "center", gap: "8px",
            marginBottom: "32px",
          }}>
            <PixelStar size={12} color="#00FF88" />
            {"// READY_TO_MOVE_IN"}
            <PixelStar size={12} color="#00FF88" />
          </div>

          <h2 style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(22px, 3.5vw, 36px)",
            fontWeight: 700,
            color: "#F0F0FF", lineHeight: "1.7",
            marginBottom: "20px",
          }}>
            당신의 자리는
            <br />
            <span style={{
              color: "#00FF88",
              textShadow: "0 0 30px rgba(0,255,136,0.6)",
              animation: "pixel-pulse 2.5s ease-in-out infinite",
              display: "inline-block",
            }}>
              단 20개
            </span>
            뿐입니다.
          </h2>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "17px", color: "#9090B0",
            lineHeight: "1.8", marginBottom: "16px",
          }}>
            Vibers House Season 01 선발은 극도로 제한된 인원으로 진행됩니다.
            Hashed 10석, NEXON 10석. 지금 웨이트리스트에 등록하세요.
          </p>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px", color: "#5050A0",
            marginBottom: "48px",
          }}>
            선발 결과는 개별 이메일로 통보됩니다.
          </p>

          {/* Email CTA */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}>
            <a
              href="mailto:apply@vibers.life?subject=Vibers House Season 01 Waitlist&body=안녕하세요, Vibers House Season 01 웨이트리스트에 등록하고 싶습니다.%0A%0A이름:%0A나이:%0A현재 빌드 중인 것:%0A지원 슬롯 (Hashed / NEXON):"
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "12px", color: "#0A0A0F",
                background: "#00FF88",
                padding: "20px 48px",
                textDecoration: "none",
                letterSpacing: "1px",
                boxShadow: "0 0 30px rgba(0,255,136,0.4)",
                display: "inline-flex", alignItems: "center", gap: "12px",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#00CC6A";
                e.currentTarget.style.boxShadow = "0 0 60px rgba(0,255,136,0.65)";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#00FF88";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,255,136,0.4)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <PixelArrow color="#0A0A0F" />
              REGISTER WAITLIST
            </a>
            <div style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "8px", color: "#4040A0",
              letterSpacing: "1px",
            }}>
              apply@vibers.life
            </div>
          </div>

          {/* Slots indicator */}
          <div style={{
            display: "flex", justifyContent: "center", gap: "24px",
            flexWrap: "wrap",
          }}>
            <div style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.3)",
              padding: "12px 24px",
              display: "flex", alignItems: "center", gap: "10px",
            }}>
              <PixelPerson color="#8B5CF6" />
              <div>
                <div style={{ fontFamily: "var(--font-pixel)", fontSize: "14px", color: "#8B5CF6" }}>10</div>
                <div style={{ fontFamily: "var(--font-pixel)", fontSize: "7px", color: "#5050A0", letterSpacing: "1px" }}>HASHED</div>
              </div>
            </div>
            <div style={{
              background: "rgba(0,255,136,0.08)",
              border: "1px solid rgba(0,255,136,0.25)",
              padding: "12px 24px",
              display: "flex", alignItems: "center", gap: "10px",
            }}>
              <PixelFire color="#00FF88" />
              <div>
                <div style={{ fontFamily: "var(--font-pixel)", fontSize: "14px", color: "#00FF88" }}>10</div>
                <div style={{ fontFamily: "var(--font-pixel)", fontSize: "7px", color: "#5050A0", letterSpacing: "1px" }}>NEXON</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer style={{
        padding: "40px 32px",
        borderTop: "1px solid rgba(139,92,246,0.12)",
        background: "#060609",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <PixelBuilding color="#3030A0" />
          <span style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "7px", color: "#3030A0",
            letterSpacing: "1px",
          }}>
            VIBERS HOUSE
          </span>
        </div>
        <div style={{
          fontFamily: "var(--font-pixel)",
          fontSize: "7px", color: "#2828A0",
          letterSpacing: "1px",
        }}>
          © 2025 VIBERS LIFE · POWERED BY HASHED × NEXON
        </div>
      </footer>
    </main>
  );
}
