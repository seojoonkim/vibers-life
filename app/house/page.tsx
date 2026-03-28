"use client";

import Link from "next/link";

export default function HousePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="section-padding"
        style={{ background: "#FFFFFF" }}
      >
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
              Residency Program
            </p>
            <h1 className="text-hero" style={{ marginBottom: 24 }}>
              Vibers House
            </h1>
            <p
              style={{
                fontSize: 20,
                color: "#6B7280",
                lineHeight: 1.75,
                marginBottom: 12,
                maxWidth: 560,
              }}
            >
              장학금형 빌더 레지던시
            </p>
            <p
              style={{
                fontSize: 17,
                color: "#6B7280",
                lineHeight: 1.75,
                maxWidth: 560,
              }}
            >
              강남 한복판, 선발된 20명의 빌더가 6개월간 함께 거주하며
              집중적으로 프로덕트를 만들어내는 몰입형 레지던시 프로그램입니다.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <img
              src="/images/house-illustration.png"
              alt="Vibers House 건물"
              style={{ width: 260, height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
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
            <div
              key={s.label}
              style={{
                borderTop: "1px solid #E5E7EB",
                paddingTop: 24,
              }}
            >
              <p
                style={{
                  fontSize: 40,
                  fontWeight: 700,
                  color: "#1B3054",
                  lineHeight: 1,
                  marginBottom: 10,
                  letterSpacing: "-0.03em",
                }}
              >
                {s.num}
              </p>
              <p style={{ fontSize: 14, color: "#6B7280" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 제공 내역 */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="text-section" style={{ marginBottom: 64 }}>
            무엇을 제공하나요
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
                  borderLeft: "2px solid #E5E7EB",
                  paddingLeft: 24,
                  paddingTop: 4,
                  paddingBottom: 4,
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#8DC63F";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB";
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
                  {item.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 두 개의 트랙 */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <img
              src="/images/builders-group.png"
              alt="빌더 그룹"
              style={{ width: 160, height: "auto", margin: "0 auto 24px" }}
            />
            <h2 className="text-section">두 개의 트랙</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                org: "Hashed",
                track: "AI · Web3 트랙",
                count: "10명",
                items: [
                  "AI 에이전트 개발",
                  "탈중앙화 애플리케이션",
                  "블록체인 프로토콜 개발",
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
                className="card"
                style={{ padding: "40px 36px" }}
              >
                <img
                  src="/images/fellowship-badge.png"
                  alt="펠로우십 배지"
                  style={{ width: 48, height: "auto", marginBottom: 20 }}
                />
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#8DC63F",
                    letterSpacing: "0.06em",
                    marginBottom: 8,
                  }}
                >
                  {t.org}
                </p>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {t.track}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#6B7280",
                    marginBottom: 28,
                  }}
                >
                  {t.count}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {t.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 15,
                        color: "#6B7280",
                        padding: "10px 0",
                        borderBottom: "1px solid #E5E7EB",
                        lineHeight: 1.75,
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
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 className="text-section" style={{ marginBottom: 56 }}>
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
                padding: "24px 0",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#8DC63F",
                  letterSpacing: "0.06em",
                  minWidth: 36,
                  flexShrink: 0,
                }}
              >
                {step.phase}
              </span>
              <div>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </p>
                <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>
                  {step.period}
                </p>
              </div>
            </div>
          ))}
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
            입주를 원하신다면
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
