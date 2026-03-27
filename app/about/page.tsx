"use client";

const PixelStar = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="7" y="0" width="2" height="2" fill="#00FF88" />
    <rect x="7" y="14" width="2" height="2" fill="#00FF88" />
    <rect x="0" y="7" width="2" height="2" fill="#00FF88" />
    <rect x="14" y="7" width="2" height="2" fill="#00FF88" />
    <rect x="6" y="4" width="4" height="8" fill="#00FF88" />
    <rect x="4" y="6" width="8" height="4" fill="#00FF88" />
  </svg>
);

const PixelDiamond = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="10" y="2" width="4" height="2" fill="#8B5CF6" />
    <rect x="8" y="4" width="2" height="2" fill="#8B5CF6" />
    <rect x="14" y="4" width="2" height="2" fill="#8B5CF6" />
    <rect x="6" y="6" width="2" height="2" fill="#8B5CF6" />
    <rect x="16" y="6" width="2" height="2" fill="#8B5CF6" />
    <rect x="4" y="8" width="2" height="4" fill="#8B5CF6" />
    <rect x="18" y="8" width="2" height="4" fill="#8B5CF6" />
    <rect x="6" y="14" width="2" height="2" fill="#8B5CF6" />
    <rect x="16" y="14" width="2" height="2" fill="#8B5CF6" />
    <rect x="8" y="16" width="2" height="2" fill="#8B5CF6" />
    <rect x="14" y="16" width="2" height="2" fill="#8B5CF6" />
    <rect x="10" y="18" width="4" height="2" fill="#8B5CF6" />
    <rect x="6" y="8" width="12" height="8" fill="#A78BFA" opacity="0.5" />
  </svg>
);

const PixelBolt = () => (
  <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
    <rect x="10" y="2" width="8" height="2" fill="#00FF88" />
    <rect x="8" y="4" width="6" height="2" fill="#00FF88" />
    <rect x="6" y="6" width="6" height="2" fill="#00FF88" />
    <rect x="6" y="8" width="8" height="2" fill="#00FF88" />
    <rect x="4" y="10" width="8" height="2" fill="#00FF88" />
    <rect x="4" y="12" width="6" height="2" fill="#00FF88" />
    <rect x="2" y="14" width="6" height="2" fill="#00FF88" />
    <rect x="2" y="16" width="8" height="2" fill="#00FF88" />
    <rect x="4" y="18" width="6" height="2" fill="#00FF88" />
    <rect x="6" y="20" width="4" height="2" fill="#00FF88" />
  </svg>
);

const PixelTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="10" y="2" width="4" height="2" fill="#8B5CF6" />
    <rect x="6" y="4" width="2" height="2" fill="#8B5CF6" />
    <rect x="16" y="4" width="2" height="2" fill="#8B5CF6" />
    <rect x="4" y="6" width="2" height="2" fill="#8B5CF6" />
    <rect x="18" y="6" width="2" height="2" fill="#8B5CF6" />
    <rect x="2" y="8" width="2" height="8" fill="#8B5CF6" />
    <rect x="20" y="8" width="2" height="8" fill="#8B5CF6" />
    <rect x="4" y="16" width="2" height="2" fill="#8B5CF6" />
    <rect x="18" y="16" width="2" height="2" fill="#8B5CF6" />
    <rect x="6" y="18" width="2" height="2" fill="#8B5CF6" />
    <rect x="16" y="18" width="2" height="2" fill="#8B5CF6" />
    <rect x="10" y="20" width="4" height="2" fill="#8B5CF6" />
    <rect x="10" y="6" width="4" height="12" fill="#8B5CF6" opacity="0.3" />
    <rect x="6" y="10" width="12" height="4" fill="#8B5CF6" opacity="0.3" />
    <rect x="11" y="11" width="2" height="2" fill="#00FF88" />
  </svg>
);

const WHY_NOW_POINTS = [
  {
    icon: <PixelBolt />,
    title: "AI가 개발의 레버리지를 폭발시켰다",
    desc: "바이브코딩의 시대. 소수 정예 개발자 한 명이 AI와 함께라면 과거 팀 10명의 생산성을 낸다. 인재 밀도가 곧 경쟁력이다.",
    highlight: "10× 생산성",
    color: "#00FF88",
  },
  {
    icon: <PixelTarget />,
    title: "조기 발굴이 모든 것을 바꾼다",
    desc: "Zuckerberg는 19세에 Facebook을 시작했다. Vitalik은 19세에 Ethereum을 제안했다. 다음 세대 창업자들은 더 어린 나이에 시작한다. 일찍 찾아야 한다.",
    highlight: "골든 타임",
    color: "#8B5CF6",
  },
  {
    icon: <PixelDiamond />,
    title: "스폰서십 타이밍이 결정적이다",
    desc: "재능이 있어도 환경이 없으면 싹이 죽는다. 상위 1% 어린 개발자를 가장 임팩트 있는 시점에 조기 스폰서하는 것 — 그게 Vibers Life의 존재 이유다.",
    highlight: "Early Win",
    color: "#00FF88",
  },
];

const PHILOSOPHY = [
  {
    number: "01",
    title: "소수 정예, 극한 집중",
    body: "우리는 많은 사람을 뽑지 않는다. 진짜 상위 1%만 선발해서, 그들에게 세상이 줄 수 있는 최고의 환경을 제공한다. 숫자가 아니라 밀도를 믿는다.",
    color: "#8B5CF6",
  },
  {
    number: "02",
    title: "빌드 퍼스트",
    body: "이론보다 실행. 계획보다 프로토타입. 우리가 가장 존중하는 것은 실제로 뭔가를 만들어본 경험이다. CV가 아니라 GitHub 링크를 봐라.",
    color: "#00FF88",
  },
  {
    number: "03",
    title: "바이브코딩 시대의 인재",
    body: "AI 툴을 잘 다루고, 빠르게 실험하고, 아이디어를 제품으로 만드는 능력. 이것이 다음 10년의 핵심 역량이다. 우리는 그 역량을 가진 사람을 찾는다.",
    color: "#8B5CF6",
  },
  {
    number: "04",
    title: "네트워크는 자산이다",
    body: "Hashed의 Web3 생태계, NEXON의 글로벌 게임 제국 — 이 두 세계가 만나는 교차점에 Vibers Life가 있다. 우리 펠로우들은 이 네트워크의 일부가 된다.",
    color: "#00FF88",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>

      {/* Hero */}
      <section
        className="grid-bg crt"
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
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <PixelStar />
        </div>
        <div
          style={{
            position: "absolute",
            top: "25%",
            right: "12%",
            animation: "float 4s ease-in-out infinite 1s",
          }}
        >
          <PixelStar />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "8%",
            animation: "float 5s ease-in-out infinite 2s",
          }}
        >
          <PixelStar />
        </div>

        {/* Badge */}
        <div
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "10px",
            color: "#00FF88",
            background: "rgba(0, 255, 136, 0.1)",
            border: "1px solid rgba(0, 255, 136, 0.3)",
            padding: "8px 16px",
            marginBottom: "32px",
            letterSpacing: "2px",
          }}
        >
          ▶ ABOUT VIBERS LIFE
        </div>

        {/* Main title */}
        <h1
          className="glitch-text"
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "clamp(20px, 4vw, 44px)",
            color: "#F0F0FF",
            textAlign: "center",
            lineHeight: "1.5",
            marginBottom: "24px",
          }}
        >
          WE BUILD
          <br />
          <span
            style={{
              color: "#00FF88",
              textShadow: "0 0 20px rgba(0,255,136,0.5)",
            }}
          >
            THE BUILDERS.
          </span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "#9090B0",
            textAlign: "center",
            maxWidth: "640px",
            lineHeight: "1.7",
            marginBottom: "48px",
          }}
        >
          다음 세대의 창업자와 개발자를 조기에 발굴하고,<br />
          그들이 세상을 바꿀 수 있도록 모든 자원을 쏟아붓는다.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="#philosophy"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "11px",
              color: "#0A0A0F",
              background: "#00FF88",
              padding: "16px 32px",
              textDecoration: "none",
              letterSpacing: "1px",
              boxShadow: "0 0 20px rgba(0,255,136,0.4)",
              display: "inline-block",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00CC6A";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(0,255,136,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#00FF88";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,136,0.4)";
            }}
          >
            ▶ OUR PHILOSOPHY
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "11px",
              color: "#8B5CF6",
              background: "transparent",
              border: "1px solid #8B5CF6",
              padding: "16px 32px",
              textDecoration: "none",
              letterSpacing: "1px",
              display: "inline-block",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(139,92,246,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            PARTNER WITH US
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-pixel)",
            fontSize: "8px",
            color: "#5050A0",
            letterSpacing: "2px",
            animation: "pixel-pulse 2s infinite",
          }}
        >
          ▼ SCROLL
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        style={{ padding: "100px 32px", maxWidth: "1100px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "10px",
              color: "#8B5CF6",
              letterSpacing: "3px",
              marginBottom: "16px",
            }}
          >
            {"// OUR_PHILOSOPHY"}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(16px, 2.5vw, 24px)",
              color: "#F0F0FF",
              lineHeight: "1.5",
            }}
          >
            우리가 믿는 것들
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {PHILOSOPHY.map((item, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "32px",
                alignItems: "flex-start",
                background: "#0F0F1A",
                border: `1px solid rgba(${i % 2 === 0 ? "139,92,246" : "0,255,136"}, 0.12)`,
                padding: "32px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${i % 2 === 0 ? "139,92,246" : "0,255,136"}, 0.45)`;
                e.currentTarget.style.background = "#141425";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `rgba(${i % 2 === 0 ? "139,92,246" : "0,255,136"}, 0.12)`;
                e.currentTarget.style.background = "#0F0F1A";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  color: item.color,
                  opacity: 0.25,
                  lineHeight: 1,
                }}
              >
                {item.number}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "clamp(10px, 1.5vw, 13px)",
                    color: item.color,
                    marginBottom: "14px",
                    letterSpacing: "1px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    color: "#7070A0",
                    lineHeight: "1.75",
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Now */}
      <section
        style={{
          padding: "100px 32px",
          background: "rgba(15,15,26,0.6)",
          borderTop: "1px solid rgba(139,92,246,0.15)",
          borderBottom: "1px solid rgba(139,92,246,0.15)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "10px",
                color: "#00FF88",
                letterSpacing: "3px",
                marginBottom: "16px",
              }}
            >
              {"// WHY_NOW"}
            </div>
            <h2
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "clamp(16px, 2.5vw, 24px)",
                color: "#F0F0FF",
                lineHeight: "1.5",
              }}
            >
              지금이어야 하는 이유
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "18px",
                color: "#7070A0",
                maxWidth: "620px",
                margin: "20px auto 0",
                lineHeight: "1.7",
              }}
            >
              바이브코딩 시대 — AI와 함께라면 소수 정예 한 팀이
              예전의 조직 10개를 이긴다. 인재 밀도가 곧 경쟁력이다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {WHY_NOW_POINTS.map((point, i) => (
              <div
                key={i}
                style={{
                  background: "#0A0A0F",
                  border: `1px solid rgba(${i % 2 === 0 ? "0,255,136" : "139,92,246"}, 0.18)`,
                  padding: "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = `rgba(${i % 2 === 0 ? "0,255,136" : "139,92,246"}, 0.5)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = `rgba(${i % 2 === 0 ? "0,255,136" : "139,92,246"}, 0.18)`;
                }}
              >
                {/* Background number */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "16px",
                    fontFamily: "var(--font-pixel)",
                    fontSize: "10px",
                    color: point.color,
                    opacity: 0.18,
                    letterSpacing: "1px",
                  }}
                >
                  {point.highlight}
                </div>

                <div style={{ marginBottom: "20px" }}>{point.icon}</div>

                <div
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "9px",
                    color: point.color,
                    letterSpacing: "2px",
                    marginBottom: "14px",
                    opacity: 0.85,
                  }}
                >
                  {point.highlight}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#F0F0FF",
                    marginBottom: "12px",
                    lineHeight: "1.4",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    color: "#6060A0",
                    lineHeight: "1.75",
                  }}
                >
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Vibe Coding Callout */}
          <div
            style={{
              marginTop: "48px",
              background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(0,255,136,0.04) 100%)",
              border: "1px solid rgba(139,92,246,0.25)",
              padding: "48px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "10px",
                color: "#8B5CF6",
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              {"// VIBE_CODING_ERA"}
            </div>
            <blockquote
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "clamp(12px, 2vw, 18px)",
                color: "#F0F0FF",
                lineHeight: "1.6",
                margin: 0,
                textShadow: "0 0 15px rgba(139,92,246,0.3)",
              }}
            >
              &ldquo;소수 정예가 단시간에 만드는 고생산성.&rdquo;
              <br />
              <span style={{ color: "#00FF88" }}>그 소수를 우리가 키운다.</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Backed By — Hashed × NEXON */}
      <section
        style={{ padding: "100px 32px", maxWidth: "1100px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "10px",
              color: "#8B5CF6",
              letterSpacing: "3px",
              marginBottom: "16px",
            }}
          >
            {"// BACKED_BY"}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(16px, 2.5vw, 24px)",
              color: "#F0F0FF",
              lineHeight: "1.5",
            }}
          >
            HASHED × NEXON
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "18px",
              color: "#7070A0",
              maxWidth: "560px",
              margin: "20px auto 0",
              lineHeight: "1.7",
            }}
          >
            두 거인이 만든 빌더 생태계
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Hashed Card */}
          <div
            style={{
              background: "#0F0F1A",
              border: "1px solid rgba(139,92,246,0.25)",
              padding: "48px 36px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.55)";
              e.currentTarget.style.background = "#141425";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)";
              e.currentTarget.style.background = "#0F0F1A";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "clamp(18px, 3vw, 28px)",
                color: "#8B5CF6",
                textShadow: "0 0 20px rgba(139,92,246,0.5)",
                marginBottom: "20px",
                letterSpacing: "2px",
              }}
            >
              HASHED
            </div>
            <div
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "8px",
                color: "#5050A0",
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              WEB3 VENTURE CAPITAL
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                color: "#7070A0",
                lineHeight: "1.75",
                marginBottom: "24px",
              }}
            >
              아시아 최고의 Web3 전문 벤처캐피털. Axie Infinity, The Sandbox,
              Klaytn 등 수십 개의 글로벌 블록체인 프로젝트를 초기 발굴하고
              성장시킨 경험. 그 네트워크와 인사이트가 Vibers 펠로우들에게 열린다.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {["Web3 네트워크", "VC 연결", "토크노믹스", "글로벌 론칭"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(139,92,246,0.12)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      padding: "4px 10px",
                      fontFamily: "var(--font-pixel)",
                      fontSize: "8px",
                      color: "#8B5CF6",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* NEXON Card */}
          <div
            style={{
              background: "#0F0F1A",
              border: "1px solid rgba(0,255,136,0.25)",
              padding: "48px 36px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,255,136,0.55)";
              e.currentTarget.style.background = "#141425";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,255,136,0.25)";
              e.currentTarget.style.background = "#0F0F1A";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle, rgba(0,255,136,0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "clamp(18px, 3vw, 28px)",
                color: "#00FF88",
                textShadow: "0 0 20px rgba(0,255,136,0.5)",
                marginBottom: "20px",
                letterSpacing: "2px",
              }}
            >
              NEXON
            </div>
            <div
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "8px",
                color: "#5050A0",
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              GLOBAL GAME EMPIRE
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                color: "#7070A0",
                lineHeight: "1.75",
                marginBottom: "24px",
              }}
            >
              MapleStory, Dungeon&Fighter, KartRider 등 수십 개의 글로벌
              흥행 IP를 보유한 글로벌 게임 제국. 엔터테인먼트와 기술의
              교차점에서 차세대 빌더들이 실질적인 산업 경험을 쌓을 수 있다.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {["게임 IP", "글로벌 유통", "엔터테인먼트", "파트너십"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(0,255,136,0.10)",
                      border: "1px solid rgba(0,255,136,0.25)",
                      padding: "4px 10px",
                      fontFamily: "var(--font-pixel)",
                      fontSize: "8px",
                      color: "#00FF88",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Combined Power */}
        <div
          style={{
            marginTop: "32px",
            background: "linear-gradient(90deg, rgba(139,92,246,0.08) 0%, rgba(0,255,136,0.06) 100%)",
            border: "1px solid rgba(139,92,246,0.2)",
            padding: "40px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(14px, 2vw, 20px)",
              color: "#8B5CF6",
              textShadow: "0 0 15px rgba(139,92,246,0.4)",
            }}
          >
            HASHED
          </div>
          <div
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(20px, 3vw, 32px)",
              color: "#3030A0",
            }}
          >
            ×
          </div>
          <div
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(14px, 2vw, 20px)",
              color: "#00FF88",
              textShadow: "0 0 15px rgba(0,255,136,0.4)",
            }}
          >
            NEXON
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              color: "#5050A0",
              maxWidth: "400px",
              lineHeight: "1.7",
            }}
          >
            Web3의 전문성과 게임의 DNA가 만나는 교차점.
            완전히 새로운 카테고리를 만들 무대.
          </div>
        </div>
      </section>

      {/* Contact / Partnership CTA */}
      <section
        id="contact"
        className="grid-bg"
        style={{
          padding: "100px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(0,255,136,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "10px",
              color: "#00FF88",
              letterSpacing: "3px",
              marginBottom: "16px",
            }}
          >
            {"// GET_IN_TOUCH"}
          </div>

          <h2
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(16px, 2.5vw, 24px)",
              color: "#F0F0FF",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            빌더이거나, 파트너이거나,
            <br />
            <span style={{ color: "#8B5CF6" }}>아니면 둘 다이거나.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              color: "#9090B0",
              lineHeight: "1.7",
              marginBottom: "48px",
            }}
          >
            Vibers Life에 합류하거나, 파트너십을 논의하거나,<br />
            그냥 우리 이야기를 더 듣고 싶다면 — 연락하세요.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "48px",
            }}
          >
            <a
              href="/fellowship"
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "11px",
                color: "#0A0A0F",
                background: "#8B5CF6",
                padding: "16px 32px",
                textDecoration: "none",
                letterSpacing: "1px",
                boxShadow: "0 0 20px rgba(139,92,246,0.4)",
                display: "inline-block",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#7C3AED";
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(139,92,246,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#8B5CF6";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(139,92,246,0.4)";
              }}
            >
              ▶ APPLY AS BUILDER
            </a>
            <a
              href="mailto:hello@vibers.life"
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "11px",
                color: "#00FF88",
                background: "transparent",
                border: "1px solid rgba(0,255,136,0.5)",
                padding: "16px 32px",
                textDecoration: "none",
                letterSpacing: "1px",
                display: "inline-block",
                transition: "all 0.2s",
                boxShadow: "0 0 10px rgba(0,255,136,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,255,136,0.08)";
                e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(0,255,136,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(0,255,136,0.15)";
              }}
            >
              PARTNER INQUIRY
            </a>
          </div>

          {/* Contact Info */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "EMAIL", value: "hello@vibers.life", color: "#8B5CF6" },
              { label: "TWITTER", value: "@VibersLife", color: "#00FF88" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "8px",
                    color: "#3030A0",
                    letterSpacing: "2px",
                    marginBottom: "6px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    color: item.color,
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer
        style={{
          padding: "32px",
          borderTop: "1px solid rgba(139,92,246,0.15)",
          background: "#060609",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "8px",
            color: "#3030A0",
            letterSpacing: "1px",
          }}
        >
          © 2025 VIBERS LIFE · POWERED BY HASHED × NEXON
        </div>
      </footer>
    </main>
  );
}
