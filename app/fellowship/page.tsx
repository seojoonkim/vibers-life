"use client";

export default function FellowshipPage() {
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
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p
              className="font-barlow"
              style={{
                color: "#8DC63F",
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              FELLOWSHIP
            </p>
            <h1
              className="font-sans-kr text-hero"
              style={{ marginBottom: 28 }}
            >
              Vibers
              <br />
              Fellowship
            </h1>
            <p
              className="font-sans-kr"
              style={{
                fontSize: 20,
                color: "#5A6A7A",
                maxWidth: 640,
                lineHeight: 1.8,
              }}
            >
              아직 증명하지 못한 잠재력에 먼저 투자하는 프로그램.
              선발된 빌더에게 자금, 멘토링, 네트워크를 제공하고
              최대 2년간 함께 성장합니다.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <img
              src="/images/fellowship-badge.png"
              alt="펠로우십 배지"
              style={{ width: 220, height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* 펠로우십이란 */}
      <section className="bg-cream" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="font-sans-kr text-section"
            style={{ marginBottom: 56 }}
          >
            펠로우십이란
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 56,
            }}
          >
            <div
              style={{
                borderLeft: "3px solid #8DC63F",
                paddingLeft: 32,
              }}
            >
              <p
                className="font-sans-kr"
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}
              >
                &ldquo;당신이 만들고 싶은 것이 있다면,
                우리가 먼저 믿겠습니다.&rdquo;
              </p>
              <p
                className="font-sans-kr"
                style={{ color: "#5A6A7A", fontSize: 16, lineHeight: 1.8 }}
              >
                Vibers Fellowship은 학벌, 경력, 나이에 관계없이
                순수한 빌더 역량과 잠재력만으로 선발합니다.
              </p>
            </div>
            <div style={{ maxWidth: 640 }}>
              <p
                className="font-sans-kr"
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#5A6A7A",
                }}
              >
                기존의 장학금이나 지원 프로그램과 다릅니다.
                우리는 빌더의 자율성을 최대한 보장하면서도,
                필요한 순간에 결정적인 지원을 제공합니다.
                자금, 공간, 사람 — 빌더에게 필요한 세 가지를
                모두 갖춘 프로그램입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 지원 자격 */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <img
              src="/images/builders-group.png"
              alt="빌더 그룹"
              style={{ width: 180, height: "auto", margin: "0 auto 24px" }}
            />
            <h2 className="font-sans-kr text-section">
              이런 사람을
              <br />
              찾습니다
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
            }}
          >
            {[
              {
                num: "01",
                title: "만드는 사람",
                desc: "아이디어에서 멈추지 않고 실제로 프로덕트를 만들어 본 경험이 있는 빌더.",
              },
              {
                num: "02",
                title: "깊이 파는 사람",
                desc: "하나의 문제에 깊이 몰입할 줄 아는 사람. 넓은 지식보다 깊은 탐구를 중시합니다.",
              },
              {
                num: "03",
                title: "함께 하는 사람",
                desc: "독불장군이 아닌, 동료와 함께 시너지를 만들 수 있는 사람.",
              },
              {
                num: "04",
                title: "성장하는 사람",
                desc: "현재 실력보다 성장 속도와 방향성이 중요합니다. 배움을 멈추지 않는 사람.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "#F5F5F5",
                  padding: 44,
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
                <span
                  className="font-barlow"
                  style={{
                    color: "#8DC63F",
                    fontSize: 14,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.num}
                </span>
                <h3
                  className="font-sans-kr"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    marginTop: 20,
                    marginBottom: 16,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans-kr"
                  style={{ color: "#5A6A7A", fontSize: 15, lineHeight: 1.8 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 혜택 */}
      <section className="bg-cream" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="font-sans-kr text-section"
            style={{ marginBottom: 72 }}
          >
            펠로우에게
            <br />
            제공되는 것
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 56,
            }}
          >
            {[
              { title: "장학금", desc: "생활에 필요한 자금을 월 단위로 지원합니다." },
              { title: "Vibers House 입주", desc: "강남 레지던시에서 6개월간 거주하며 집중합니다." },
              { title: "1:1 멘토링", desc: "Hashed · NEXON 시니어 리더가 전담 멘토로 배정됩니다." },
              { title: "글로벌 네트워크", desc: "글로벌 빌더 · 투자자 · 창업자 네트워크에 합류합니다." },
              { title: "시드 투자 기회", desc: "뛰어난 프로젝트에 대한 직접 투자 기회를 제공합니다." },
              { title: "커뮤니티 멤버십", desc: "프로그램 종료 후에도 Vibers 커뮤니티의 영구 멤버가 됩니다." },
            ].map((b) => (
              <div key={b.title}>
                <h3
                  className="font-sans-kr"
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 14,
                    color: "#1B3054",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  className="font-sans-kr"
                  style={{ color: "#5A6A7A", fontSize: 15, lineHeight: 1.8 }}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-dark"
        style={{
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2
            className="font-sans-kr text-section"
            style={{ color: "#FFFFFF", marginBottom: 28 }}
          >
            지금 시작하세요
          </h2>
          <p
            className="font-sans-kr"
            style={{
              color: "#999999",
              fontSize: 18,
              marginBottom: 52,
              lineHeight: 1.8,
              maxWidth: 480,
              margin: "0 auto 52px",
            }}
          >
            웨이팅 리스트에 등록하시면 모집 시작 시 가장 먼저 안내해 드립니다.
          </p>
          <a
            href="/#waitlist"
            style={{
              display: "inline-block",
              background: "#8DC63F",
              color: "#FFFFFF",
              padding: "18px 48px",
              fontFamily: "'Pretendard', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              transition: "all 0.3s ease",
            }}
          >
            웨이팅 등록하기
          </a>
        </div>
      </section>
    </main>
  );
}
