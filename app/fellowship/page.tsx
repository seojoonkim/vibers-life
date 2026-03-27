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

const BENEFITS = [
  {
    title: "생활비 지원",
    desc: "펠로우십 기간 동안 생활비를 지원합니다. 돈 걱정 없이 빌드에만 집중하세요.",
    color: "#FFD700",
    icon: "💰",
  },
  {
    title: "Hashed 멘토십",
    desc: "Web3 업계 최고 투자자들의 1:1 멘토링. 제품 전략부터 토크노믹스까지.",
    color: "#8B5CF6",
    icon: "🎯",
  },
  {
    title: "NEXON 네트워크",
    desc: "글로벌 게임 제국의 내부 네트워크와 직접 연결. 파트너십, 배포, 마케팅 지원.",
    color: "#00FF88",
    icon: "🌐",
  },
  {
    title: "프리시드 투자 기회",
    desc: "성과 있는 팀에게 Hashed를 통한 프리시드 투자 기회. 검증된 VC 연결.",
    color: "#FF6B35",
    icon: "🚀",
  },
  {
    title: "글로벌 이벤트",
    desc: "ETHGlobal, 도쿄 게임쇼, 각종 해커톤 대표 참가. 세계 무대 데뷔 지원.",
    color: "#8B5CF6",
    icon: "🌍",
  },
  {
    title: "평생 알럼나이",
    desc: "Vibers Life 동문 네트워크. 한 번 Vibers면 영원히 Vibers. 선배-후배 연결.",
    color: "#00FF88",
    icon: "♾️",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "온라인 지원서",
    desc: "기본 정보 + 빌드한 것들 + 왜 Vibers인지. 길게 쓰지 마세요. 링크로 보여주세요.",
    duration: "15분",
    color: "#8B5CF6",
  },
  {
    step: "02",
    title: "포트폴리오 검토",
    desc: "운영진이 지원서를 검토합니다. GitHub, 앱스토어 링크, 데모 영상 등 모든 형태 환영.",
    duration: "1-2주",
    color: "#00FF88",
  },
  {
    step: "03",
    title: "1차 인터뷰",
    desc: "30분 화상 미팅. 기술보다 마인드셋 확인. 왜 지금, 왜 Vibers, 무엇을 만들고 싶은지.",
    duration: "30분",
    color: "#8B5CF6",
  },
  {
    step: "04",
    title: "오프라인 챌린지",
    desc: "서울 오피스 방문. 24시간 미니 해커톤. 같이 만들면서 팀 케미 확인.",
    duration: "1일",
    color: "#FF6B35",
  },
  {
    step: "05",
    title: "최종 선발 & 입주",
    desc: "최종 20명 선발 통보. D-14 OT, D-Day 입주. 새로운 6개월의 시작.",
    duration: "즉시",
    color: "#00FF88",
  },
];

export default function FellowshipPage() {
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
              "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
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
            bottom: "20%",
            right: "10%",
            animation: "float 5s ease-in-out infinite 2s",
          }}
        >
          <PixelStar />
        </div>

        <div
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "10px",
            color: "#8B5CF6",
            background: "rgba(139, 92, 246, 0.1)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            padding: "8px 16px",
            marginBottom: "32px",
            letterSpacing: "2px",
          }}
        >
          ▶ VIBERS FELLOWSHIP — TOP 1%
        </div>

        <h1
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "clamp(16px, 3vw, 32px)",
            color: "#F0F0FF",
            textAlign: "center",
            lineHeight: "1.6",
            marginBottom: "24px",
          }}
        >
          Selected.
          <br />
          Supported.
          <br />
          <span
            style={{
              color: "#8B5CF6",
              textShadow: "0 0 20px rgba(139,92,246,0.5)",
            }}
          >
            Unleashed.
          </span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "#9090B0",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: "1.7",
            marginBottom: "48px",
          }}
        >
          Vibers Fellowship은 선발된 상위 1% 빌더들에게 제공되는 집중 지원
          프로그램입니다. 단순한 펠로우십이 아닙니다. 빌더 생태계의 시작점입니다.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#process"
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
            ▶ HOW TO APPLY
          </a>
          <a
            href="#architecture"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "11px",
              color: "#00FF88",
              background: "transparent",
              border: "1px solid #00FF88",
              padding: "16px 32px",
              textDecoration: "none",
              letterSpacing: "1px",
              display: "inline-block",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,255,136,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            LEARN MORE
          </a>
        </div>
      </section>

      {/* 3-Tier Architecture */}
      <section
        id="architecture"
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
            {"// VIBERS_ARCHITECTURE"}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(16px, 2.5vw, 24px)",
              color: "#F0F0FF",
              lineHeight: "1.5",
            }}
          >
            3단계
            <br />
            <span style={{ color: "#00FF88" }}>빌더 여정</span>
          </h2>
        </div>

        {/* Tier cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            position: "relative",
          }}
        >
          {[
            {
              tier: "TIER 1",
              title: "MEMBERSHIP",
              subtitle: "Vibers 커뮤니티",
              desc: "지원 후 합격한 모든 빌더. 온라인 커뮤니티, 이벤트 참가, 네트워크 접근 권한.",
              color: "#5050A0",
              accent: "#9090B0",
              members: "열린 지원",
            },
            {
              tier: "TIER 2",
              title: "FELLOWSHIP",
              subtitle: "Vibers Fellows",
              desc: "엄격한 선발을 통과한 상위 빌더. 멘토링, 펀딩, 글로벌 이벤트, 집중 지원.",
              color: "#8B5CF6",
              accent: "#A78BFA",
              members: "선발제",
              highlight: true,
            },
            {
              tier: "TIER 3",
              title: "HOUSE",
              subtitle: "Vibers Residents",
              desc: "Fellows 중 최정예 20명. 풀타임 레지던시, 생활비 지원, 투자 기회.",
              color: "#00FF88",
              accent: "#00FF88",
              members: "시즌 20명",
            },
          ].map((tier, i) => (
            <div
              key={i}
              style={{
                background: tier.highlight ? "rgba(139,92,246,0.08)" : "#0F0F1A",
                border: `1px solid ${tier.highlight ? "rgba(139,92,246,0.5)" : "rgba(139,92,246,0.15)"}`,
                padding: "40px 28px",
                textAlign: "center",
                position: "relative",
                transition: "all 0.3s ease",
                transform: tier.highlight ? "scaleY(1.02)" : "none",
                zIndex: tier.highlight ? 1 : 0,
              }}
              onMouseEnter={(e) => {
                if (!tier.highlight) {
                  e.currentTarget.style.borderColor = `${tier.color}55`;
                }
              }}
              onMouseLeave={(e) => {
                if (!tier.highlight) {
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.15)";
                }
              }}
            >
              {tier.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#8B5CF6",
                    fontFamily: "var(--font-pixel)",
                    fontSize: "8px",
                    color: "#0A0A0F",
                    padding: "4px 12px",
                    letterSpacing: "1px",
                  }}
                >
                  ★ MAIN PROGRAM
                </div>
              )}

              <div
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "8px",
                  color: tier.color,
                  letterSpacing: "2px",
                  marginBottom: "12px",
                  opacity: 0.7,
                }}
              >
                {tier.tier}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "clamp(12px, 2vw, 18px)",
                  color: tier.accent,
                  textShadow: `0 0 15px ${tier.color}80`,
                  marginBottom: "8px",
                  letterSpacing: "1px",
                }}
              >
                {tier.title}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "#5050A0",
                  marginBottom: "20px",
                }}
              >
                {tier.subtitle}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "#6060A0",
                  lineHeight: "1.7",
                  marginBottom: "24px",
                }}
              >
                {tier.desc}
              </p>

              <div
                style={{
                  background: `${tier.color}18`,
                  border: `1px solid ${tier.color}44`,
                  padding: "8px 16px",
                  display: "inline-block",
                  fontFamily: "var(--font-pixel)",
                  fontSize: "8px",
                  color: tier.color,
                  letterSpacing: "1px",
                }}
              >
                {tier.members}
              </div>
            </div>
          ))}
        </div>

        {/* Arrow connectors */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0",
            marginTop: "8px",
          }}
        >
          <div
            style={{
              flex: 1,
              textAlign: "center",
              fontFamily: "var(--font-pixel)",
              fontSize: "9px",
              color: "#5050A0",
              padding: "16px",
            }}
          >
            ↓ 선발 통과
          </div>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              fontFamily: "var(--font-pixel)",
              fontSize: "9px",
              color: "#5050A0",
              padding: "16px",
            }}
          >
            ↓ 최종 20명
          </div>
          <div style={{ flex: 1 }} />
        </div>
      </section>

      {/* Benefits */}
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
              {"// FELLOWSHIP_BENEFITS"}
            </div>
            <h2
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "clamp(16px, 2.5vw, 24px)",
                color: "#F0F0FF",
                lineHeight: "1.5",
              }}
            >
              펠로우가 되면
              <br />
              <span style={{ color: "#8B5CF6" }}>무엇이 달라지나요?</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                style={{
                  background: "#0A0A0F",
                  border: "1px solid rgba(139,92,246,0.15)",
                  padding: "28px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${b.color}55`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.background = "#0F0F1A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.15)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "#0A0A0F";
                }}
              >
                <div style={{ fontSize: "28px", lineHeight: 1, flexShrink: 0 }}>
                  {b.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-pixel)",
                      fontSize: "10px",
                      color: b.color,
                      marginBottom: "10px",
                      letterSpacing: "1px",
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "#6060A0",
                      lineHeight: "1.7",
                    }}
                  >
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section
        id="process"
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
            {"// SELECTION_PROCESS"}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(16px, 2.5vw, 24px)",
              color: "#F0F0FF",
              lineHeight: "1.5",
            }}
          >
            5단계
            <br />
            <span style={{ color: "#00FF88" }}>선발 프로세스</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 2px 1fr auto",
                gap: "24px",
                alignItems: "stretch",
                paddingBottom: i < PROCESS_STEPS.length - 1 ? "0" : "0",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "32px",
                  color: step.color,
                  textShadow: `0 0 20px ${step.color}80`,
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "24px",
                  lineHeight: 1,
                  justifyContent: "center",
                }}
              >
                {step.step}
              </div>

              {/* Vertical line */}
              <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    width: "2px",
                    background:
                      i < PROCESS_STEPS.length - 1
                        ? `linear-gradient(${step.color}, ${PROCESS_STEPS[i + 1].color})`
                        : step.color,
                    flexGrow: 1,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "24px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "8px",
                      height: "8px",
                      background: step.color,
                      boxShadow: `0 0 8px ${step.color}`,
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  background: "#0F0F1A",
                  border: "1px solid rgba(139,92,246,0.12)",
                  padding: "24px 28px",
                  margin: "12px 0",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${step.color}44`;
                  e.currentTarget.style.background = "#141425";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.12)";
                  e.currentTarget.style.background = "#0F0F1A";
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "11px",
                    color: step.color,
                    marginBottom: "10px",
                    letterSpacing: "1px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    color: "#6060A0",
                    lineHeight: "1.6",
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Duration */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "36px",
                  minWidth: "80px",
                }}
              >
                <div
                  style={{
                    background: `${step.color}18`,
                    border: `1px solid ${step.color}44`,
                    padding: "6px 10px",
                    fontFamily: "var(--font-pixel)",
                    fontSize: "8px",
                    color: step.color,
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {step.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
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
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "700px",
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
              color: "#8B5CF6",
              letterSpacing: "3px",
              marginBottom: "16px",
            }}
          >
            {"// READY_TO_BE_SELECTED"}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(16px, 2.5vw, 24px)",
              color: "#F0F0FF",
              lineHeight: "1.6",
              marginBottom: "24px",
            }}
          >
            당신이{" "}
            <span style={{ color: "#8B5CF6" }}>상위 1%</span>라면
            <br />
            우리가 찾고 있습니다.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              color: "#9090B0",
              lineHeight: "1.7",
              marginBottom: "40px",
            }}
          >
            지금 지원서를 작성하세요. 길게 쓰지 마세요.
            <br />
            당신이 만든 것을 보여주세요.
          </p>
          <a
            href="/"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "12px",
              color: "#0A0A0F",
              background: "#8B5CF6",
              padding: "18px 40px",
              textDecoration: "none",
              letterSpacing: "1px",
              boxShadow: "0 0 30px rgba(139,92,246,0.4)",
              display: "inline-block",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#7C3AED";
              e.currentTarget.style.boxShadow =
                "0 0 50px rgba(139,92,246,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#8B5CF6";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(139,92,246,0.4)";
            }}
          >
            ▶ APPLY NOW
          </a>
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
