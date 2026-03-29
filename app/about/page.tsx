import Link from "next/link";
import {
  IconTarget,
  IconSprout,
  IconRocket,
  IconGlobe,
  IconZap,
  IconUsers,
  IconGamepad,
  IconCpu,
  IconLink,
} from "../components/icons";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap" as const,
            alignItems: "center",
            gap: 64,
          }}
        >
          <div style={{ flex: 1, minWidth: "min(300px, 100%)" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "#6B7280",
                marginBottom: 24,
              }}
            >
              About
            </p>
            <h1 className="text-hero" style={{ marginBottom: 24 }}>
              Vibers Life
              <br />
              소개
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#6B7280",
                lineHeight: 1.75,
                maxWidth: 520,
              }}
            >
              Vibers Life는 차세대 빌더를 발굴하고 성장시키기 위해 만들어진
              선발형 펠로우십 프로그램입니다. Hashed와 NEXON이 함께 운영하며,
              뛰어난 잠재력을 가진 젊은 개발자에게 자금, 거주 공간, 멘토링,
              네트워크를 제공합니다.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <img
              src="/images/hero-character.png"
              alt="Vibers 캐릭터"
              style={{ width: 220, height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* 비전 스토리 */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <IconTarget size={28} className="" />
            <h2 className="text-section" style={{ margin: 0 }}>
              왜 Vibers Life를 만들었나
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
              gap: 48,
            }}
          >
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#374151" }}>
                AI와 바이브코딩의 시대가 열리며, 누구나 아이디어를 제품으로 만들 수 있는 세상이 왔습니다.
                하지만 진정한 혁신은 도구가 아니라 사람에게서 나옵니다.
                한국을 대표하는 두 기업 — Hashed와 NEXON — 은 같은 질문을 던졌습니다.
              </p>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#1B3054",
                  marginTop: 24,
                  lineHeight: 1.5,
                  borderLeft: "4px solid #8DC63F",
                  paddingLeft: 20,
                }}
              >
                &ldquo;다음 세대의 위대한 빌더를, 어떻게 하면 가장 빨리 세상에 내보낼 수 있을까?&rdquo;
              </p>
            </div>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#374151" }}>
                기술의 민주화가 가속되는 시대, 진짜 차별화는 비전에서 옵니다.
                Vibers Life는 무엇을 만들지 고민하는 사람, 왜 만드는지 아는 사람,
                그리고 끝까지 만들어내는 사람을 찾습니다.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#374151", marginTop: 16 }}>
                우리는 이력서가 아니라 가능성을 봅니다. 학벌이 아니라 열정을 봅니다.
                경력이 아니라 잠재력을 봅니다. 당신이 아직 증명하지 못한 것에 먼저 투자합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 운영 파트너 — Hashed */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
            <img
              src="/images/nexon-hashed.png"
              alt="NEXON x Hashed"
              style={{ width: 180, height: "auto", margin: "0 auto 24px" }}
            />
            <h2 className="text-section">운영 파트너</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
              gap: 32,
            }}
          >
            {/* Hashed 상세 */}
            <div className="card" style={{ padding: "40px 36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <IconGlobe size={22} />
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    margin: 0,
                  }}
                >
                  Hashed
                </p>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#8DC63F",
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                AI / Web3 생태계 선도 VC
              </p>
              <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.85, marginBottom: 20 }}>
                2016년 설립된 Hashed는 AI와 Web3 생태계를 선도하는 글로벌 벤처캐피탈입니다.
                빌더 중심의 투자 철학으로 100개 이상의 프로젝트를 지원해 왔으며,
                서울, 싱가포르, 실리콘밸리를 잇는 글로벌 네트워크를 운영합니다.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                {[
                  { label: "설립", value: "2016년" },
                  { label: "포트폴리오", value: "100개+" },
                  { label: "글로벌 거점", value: "서울 / 싱가포르 / 실리콘밸리" },
                  { label: "전문 분야", value: "AI / Web3 / DeFi" },
                ].map((item) => (
                  <div key={item.label} style={{ padding: "12px 0", borderTop: "1px solid #E5E7EB" }}>
                    <p style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 600, textTransform: "uppercase" as const, marginBottom: 4 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 14, color: "#1B3054", fontWeight: 600 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* NEXON 상세 */}
            <div className="card" style={{ padding: "40px 36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <IconGamepad size={22} />
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    margin: 0,
                  }}
                >
                  NEXON
                </p>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#8DC63F",
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                글로벌 인터랙티브 엔터테인먼트 기업
              </p>
              <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.85, marginBottom: 20 }}>
                1994년 설립 이후 30년간 글로벌 게임 산업을 이끌어온 레전드 기업입니다.
                전 세계 190여 개국에 서비스하며 누적 13억 명 이상의 플레이어를 보유하고 있습니다.
                게임파이(GameFi)와 AI 분야에서 새로운 도전을 이어가고 있습니다.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                {[
                  { label: "설립", value: "1994년" },
                  { label: "글로벌 플레이어", value: "13억+" },
                  { label: "서비스 국가", value: "190개국+" },
                  { label: "새 도전", value: "GameFi / AI" },
                ].map((item) => (
                  <div key={item.label} style={{ padding: "12px 0", borderTop: "1px solid #E5E7EB" }}>
                    <p style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 600, textTransform: "uppercase" as const, marginBottom: 4 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 14, color: "#1B3054", fontWeight: 600 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 파트너십 배경 */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <IconLink size={28} />
            <h2 className="text-section" style={{ margin: 0 }}>
              두 비전이 만나는 지점
            </h2>
          </div>
          <div
            className="card"
            style={{
              padding: "48px 40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: 48,
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <IconCpu size={20} />
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1B3054", margin: 0 }}>
                  기술 인프라 x 투자 생태계
                </h3>
              </div>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.85 }}>
                NEXON의 30년 기술 인프라와 Hashed의 Web3 투자 생태계가 결합하면,
                빌더에게 필요한 모든 것 — 기술, 자금, 멘토링, 네트워크 — 을 한 곳에서 제공할 수 있습니다.
              </p>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <IconSprout size={20} />
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1B3054", margin: 0 }}>
                  다음 세대 빌더 양성
                </h3>
              </div>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.85 }}>
                두 기업은 경쟁이 아닌 협력을 선택했습니다. 게임, AI, Web3의 경계를 넘어
                새로운 카테고리를 개척할 다음 세대의 빌더를 함께 키우겠다는 공동의 비전으로
                Vibers Life가 탄생했습니다.
              </p>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <IconRocket size={20} />
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1B3054", margin: 0 }}>
                  빌더 퍼스트 철학
                </h3>
              </div>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.85 }}>
                좋은 제품은 좋은 환경에서 나옵니다. 주거, 생활비, 커뮤니티, 그리고
                최고의 멘토까지 — 빌더가 오직 만드는 것에만 집중할 수 있도록
                모든 것을 설계했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="text-section" style={{ marginBottom: 64 }}>
            핵심 가치
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 40,
            }}
          >
            {[
              {
                icon: <IconTarget size={20} />,
                title: "가능성 우선",
                desc: "증명된 과거보다 증명되지 않은 미래에 베팅합니다.",
              },
              {
                icon: <IconZap size={20} />,
                title: "몰입 환경",
                desc: "최고의 결과는 최고의 환경에서 나옵니다.",
              },
              {
                icon: <IconUsers size={20} />,
                title: "커뮤니티",
                desc: "혼자 빠르게가 아닌, 함께 멀리 가는 것을 추구합니다.",
              },
              {
                icon: <IconRocket size={20} />,
                title: "실행 중심",
                desc: "계획이 아니라 만들어낸 것으로 말합니다.",
              },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  borderTop: "1px solid #E5E7EB",
                  paddingTop: 24,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  {v.icon}
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      margin: 0,
                    }}
                  >
                    {v.title}
                  </h3>
                </div>
                <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 팀 / 문의 */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <IconUsers size={28} />
            <h2 className="text-section" style={{ margin: 0 }}>
              팀 / 문의
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
              gap: 32,
            }}
          >
            <div className="card" style={{ padding: "36px 32px" }}>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1B3054",
                  marginBottom: 16,
                }}
              >
                운영팀
              </h3>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.85 }}>
                Vibers Life는 Hashed와 NEXON의 공동 운영 팀이 이끕니다.
                투자, 기술, 커뮤니티 전문가들이 펠로우의 성장을 전방위로 지원합니다.
                각 기수마다 전담 매니저가 배정되어 프로그램 전 과정을 함께합니다.
              </p>
            </div>
            <div className="card" style={{ padding: "36px 32px" }}>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1B3054",
                  marginBottom: 16,
                }}
              >
                문의하기
              </h3>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.85, marginBottom: 20 }}>
                프로그램, 파트너십, 또는 기타 문의사항이 있으시면
                아래 이메일로 연락해 주세요. 가능한 빠르게 답변 드리겠습니다.
              </p>
              <a
                href="mailto:contact@viberslife.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#1B3054",
                  textDecoration: "none",
                  borderBottom: "2px solid #8DC63F",
                  paddingBottom: 2,
                }}
              >
                contact@viberslife.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ background: "#1B3054", textAlign: "center" as const }}
      >
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <h2
            className="text-section"
            style={{ color: "#FFFFFF", marginBottom: 20 }}
          >
            함께하고 싶으신가요?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 16,
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            웨이팅 리스트에 등록하시면 모집 시작 시 가장 먼저 안내해 드립니다.
          </p>
          <Link
            href="/#waitlist"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#8DC63F",
              color: "#FFFFFF",
              padding: "14px 36px",
              borderRadius: 9999,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            웨이팅 등록하기
          </Link>
        </div>
      </section>
    </main>
  );
}
