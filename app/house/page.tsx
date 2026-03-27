"use client";

export default function HousePage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
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
          RESIDENCY PROGRAM
        </p>
        <h1
          className="font-sans-kr text-hero"
          style={{ marginBottom: 28 }}
        >
          Vibers House
        </h1>
        <p
          className="font-sans-kr"
          style={{
            fontSize: 22,
            color: "#6B6B6B",
            maxWidth: 640,
            lineHeight: 1.8,
            marginBottom: 20,
          }}
        >
          장학금형 빌더 레지던시
        </p>
        <p
          className="font-sans-kr"
          style={{
            fontSize: 18,
            color: "#6B6B6B",
            maxWidth: 640,
            lineHeight: 1.8,
          }}
        >
          강남 한복판, 선발된 20명의 빌더가 6개월간 함께 거주하며
          집중적으로 프로덕트를 만들어내는 몰입형 레지던시 프로그램입니다.
        </p>
      </section>

      {/* 통계 */}
      <section className="bg-cream" style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
          }}
        >
          {[
            { num: "6개월", label: "집중 레지던시" },
            { num: "20명", label: "기수당 선발" },
            { num: "최대 2년", label: "펠로우십 기간" },
            { num: "100%", label: "생활비 지원" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: 36 }}>
              <p
                className="font-barlow"
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: "#0A0A0A",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {s.num}
              </p>
              <p
                className="font-sans-kr"
                style={{ fontSize: 15, color: "#6B6B6B" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 제공 내역 */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="font-sans-kr text-section"
            style={{ marginBottom: 72 }}
          >
            무엇을 제공하나요
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 40,
            }}
          >
            {[
              {
                title: "거주 공간",
                desc: "강남 핵심 지역의 공유 레지던스. 개인 공간과 협업 공간을 모두 갖춘 최적의 환경을 제공합니다.",
              },
              {
                title: "생활비 지원",
                desc: "주거비, 식비, 교통비를 포함한 생활비를 전액 지원합니다. 오직 만드는 것에만 집중하세요.",
              },
              {
                title: "멘토링",
                desc: "Hashed와 NEXON의 현직 리더, 성공한 창업자, 시니어 개발자가 1:1 멘토로 배정됩니다.",
              },
              {
                title: "네트워크",
                desc: "업계 최고의 인적 네트워크에 접근할 수 있습니다. 동기 빌더들과의 유대는 평생 자산이 됩니다.",
              },
              {
                title: "투자 기회",
                desc: "레지던시 기간 중 뛰어난 프로젝트에 대해 시드 투자 기회를 제공합니다.",
              },
              {
                title: "데모데이",
                desc: "6개월의 여정을 마무리하는 데모데이에서 업계 리더와 투자자 앞에서 프로젝트를 발표합니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderLeft: "3px solid #FF4D00",
                  paddingLeft: 28,
                  paddingTop: 8,
                  paddingBottom: 8,
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <h3
                  className="font-sans-kr"
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 14,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans-kr"
                  style={{ color: "#6B6B6B", fontSize: 15, lineHeight: 1.8, maxWidth: 400 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 트랙 */}
      <section className="bg-cream" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="font-sans-kr text-section"
            style={{ marginBottom: 72 }}
          >
            두 개의 트랙
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
            }}
          >
            {[
              {
                org: "Hashed",
                track: "웹3 트랙",
                count: "10명",
                items: [
                  "블록체인 프로토콜 개발",
                  "탈중앙화 애플리케이션",
                  "크립토 인프라 구축",
                  "토큰 이코노미 설계",
                ],
              },
              {
                org: "NEXON",
                track: "게임 트랙",
                count: "10명",
                items: [
                  "게임 개발 및 디자인",
                  "인터랙티브 콘텐츠",
                  "게임 엔진 활용",
                  "라이브 서비스 운영",
                ],
              },
            ].map((t) => (
              <div
                key={t.org}
                style={{
                  background: "#FFFFFF",
                  padding: 48,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <p
                  className="font-barlow"
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#FF4D00",
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                  }}
                >
                  {t.org}
                </p>
                <h3
                  className="font-sans-kr"
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {t.track}
                </h3>
                <p
                  className="font-barlow"
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#6B6B6B",
                    marginBottom: 28,
                  }}
                >
                  {t.count}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {t.items.map((item) => (
                    <li
                      key={item}
                      className="font-sans-kr"
                      style={{
                        fontSize: 15,
                        color: "#6B6B6B",
                        padding: "10px 0",
                        borderBottom: "1px solid #E8E8E8",
                        lineHeight: 1.8,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 일정 */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            className="font-sans-kr text-section"
            style={{ marginBottom: 72 }}
          >
            일정
          </h2>
          {[
            { phase: "01", title: "지원 접수", period: "웨이팅 리스트 등록 후 개별 안내" },
            { phase: "02", title: "심사 및 면접", period: "서류 심사 → 기술 과제 → 심층 면접" },
            { phase: "03", title: "최종 선발", period: "20명 최종 선발 및 입주 안내" },
            { phase: "04", title: "레지던시 시작", period: "강남 Vibers House 입주 및 프로그램 시작" },
            { phase: "05", title: "데모데이", period: "6개월 후 프로젝트 발표 및 투자 연결" },
          ].map((step) => (
            <div
              key={step.phase}
              style={{
                display: "flex",
                gap: 32,
                alignItems: "baseline",
                padding: "28px 0",
                borderBottom: "1px solid #E8E8E8",
              }}
            >
              <span
                className="font-barlow"
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#FF4D00",
                  letterSpacing: "0.1em",
                  minWidth: 40,
                }}
              >
                {step.phase}
              </span>
              <div>
                <p
                  className="font-sans-kr"
                  style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}
                >
                  {step.title}
                </p>
                <p
                  className="font-sans-kr"
                  style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.8 }}
                >
                  {step.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
