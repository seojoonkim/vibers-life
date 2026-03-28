import Link from "next/link";

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
            flexWrap: "wrap",
            alignItems: "center",
            gap: 64,
          }}
        >
          <div style={{ flex: 1, minWidth: 300 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
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

      {/* 미션 */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="text-section" style={{ marginBottom: 56 }}>
            우리의 미션
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
            }}
          >
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#6B7280" }}>
              기술의 민주화가 가속되는 시대, 진짜 차별화는 비전에서 옵니다.
              Vibers Life는 무엇을 만들지 고민하는 사람, 왜 만드는지 아는 사람,
              그리고 끝까지 만들어내는 사람을 찾습니다.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#6B7280" }}>
              우리는 이력서가 아니라 가능성을 봅니다. 학벌이 아니라 열정을 봅니다.
              경력이 아니라 잠재력을 봅니다. 당신이 아직 증명하지 못한 것에
              먼저 투자합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 운영 파트너 */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
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
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 32,
            }}
          >
            {[
              {
                name: "Hashed",
                role: "웹3 생태계의 선두 투자사",
                desc: "AI · Web3 생태계를 선도하는 글로벌 벤처캐피탈입니다. 빌더 중심의 투자 철학으로 수백 개의 프로젝트를 지원해 왔습니다.",
              },
              {
                name: "NEXON",
                role: "글로벌 게임 기업",
                desc: "전 세계 190여 개국에 서비스하는 글로벌 게임 기업입니다. 게임을 넘어 인터랙티브 엔터테인먼트의 미래를 만들어가고 있습니다.",
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="card"
                style={{ padding: "36px 32px" }}
              >
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    marginBottom: 6,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {partner.name}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "#8DC63F",
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  {partner.role}
                </p>
                <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
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
              { title: "가능성 우선", desc: "증명된 과거보다 증명되지 않은 미래에 베팅합니다." },
              { title: "몰입 환경", desc: "최고의 결과는 최고의 환경에서 나옵니다." },
              { title: "커뮤니티", desc: "혼자 빠르게가 아닌, 함께 멀리 가는 것을 추구합니다." },
              { title: "실행 중심", desc: "계획이 아니라 만들어낸 것으로 말합니다." },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  borderTop: "1px solid #E5E7EB",
                  paddingTop: 24,
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ background: "#1B3054", textAlign: "center" }}
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
