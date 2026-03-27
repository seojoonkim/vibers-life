export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 80,
          padding: "160px 24px 80px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <p
          className="font-barlow"
          style={{
            color: "#FF4D00",
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          ABOUT
        </p>
        <h1
          className="font-serif-kr text-hero"
          style={{ marginBottom: 32 }}
        >
          Vibers Life
          <br />
          소개
        </h1>
        <p
          className="font-sans-kr"
          style={{
            fontSize: 20,
            color: "#6B6B6B",
            maxWidth: 640,
            lineHeight: 1.8,
          }}
        >
          Vibers Life는 차세대 빌더를 발굴하고 성장시키기 위해 만들어진
          선발형 펠로우십 프로그램입니다. Hashed와 NEXON이 함께 운영하며,
          뛰어난 잠재력을 가진 젊은 개발자에게 자금, 거주 공간, 멘토링,
          네트워크를 제공합니다.
        </p>
      </section>

      {/* 미션 */}
      <section className="bg-cream" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="font-serif-kr text-section"
            style={{ marginBottom: 48 }}
          >
            우리의 미션
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
            }}
          >
            <div>
              <p
                className="font-sans-kr"
                style={{ fontSize: 18, lineHeight: 1.8, color: "#6B6B6B" }}
              >
                기술의 민주화가 가속되는 시대, 진짜 차별화는 비전에서 옵니다.
                Vibers Life는 무엇을 만들지 고민하는 사람, 왜 만드는지 아는 사람,
                그리고 끝까지 만들어내는 사람을 찾습니다.
              </p>
            </div>
            <div>
              <p
                className="font-sans-kr"
                style={{ fontSize: 18, lineHeight: 1.8, color: "#6B6B6B" }}
              >
                우리는 이력서가 아니라 가능성을 봅니다. 학벌이 아니라 열정을 봅니다.
                경력이 아니라 잠재력을 봅니다. 당신이 아직 증명하지 못한 것에
                먼저 투자합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 운영 파트너 */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="font-serif-kr text-section"
            style={{ marginBottom: 64 }}
          >
            운영 파트너
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
            }}
          >
            {[
              {
                name: "Hashed",
                role: "웹3 생태계의 선두 투자사",
                desc: "아시아 최대 규모의 블록체인 벤처캐피탈로, 글로벌 웹3 생태계를 선도하고 있습니다. 빌더 중심의 투자 철학으로 수백 개의 프로젝트를 지원해 왔습니다.",
              },
              {
                name: "NEXON",
                role: "글로벌 게임 기업",
                desc: "전 세계 190여 개국에 서비스하는 글로벌 게임 기업입니다. 게임을 넘어 인터랙티브 엔터테인먼트의 미래를 만들어가고 있습니다.",
              },
            ].map((partner) => (
              <div
                key={partner.name}
                style={{
                  borderTop: "3px solid #FF4D00",
                  paddingTop: 32,
                }}
              >
                <p
                  className="font-barlow"
                  style={{
                    fontSize: 36,
                    fontWeight: 900,
                    marginBottom: 8,
                  }}
                >
                  {partner.name}
                </p>
                <p
                  className="font-sans-kr"
                  style={{
                    fontSize: 16,
                    color: "#FF4D00",
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  {partner.role}
                </p>
                <p
                  className="font-sans-kr"
                  style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.7 }}
                >
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="bg-cream" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="font-serif-kr text-section"
            style={{ marginBottom: 64 }}
          >
            핵심 가치
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 48,
            }}
          >
            {[
              { title: "가능성 우선", desc: "증명된 과거보다 증명되지 않은 미래에 베팅합니다." },
              { title: "몰입 환경", desc: "최고의 결과는 최고의 환경에서 나옵니다." },
              { title: "커뮤니티", desc: "혼자 빠르게가 아닌, 함께 멀리 가는 것을 추구합니다." },
              { title: "실행 중심", desc: "계획이 아니라 만들어낸 것으로 말합니다." },
            ].map((v) => (
              <div key={v.title}>
                <h3
                  className="font-serif-kr"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="font-sans-kr"
                  style={{ color: "#6B6B6B", fontSize: 16, lineHeight: 1.7 }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
