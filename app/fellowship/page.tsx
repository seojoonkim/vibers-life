"use client";

import Link from "next/link";

export default function FellowshipPage() {
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
              Fellowship
            </p>
            <h1 className="text-hero" style={{ marginBottom: 24 }}>
              Vibers
              <br />
              Fellowship
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#6B7280",
                lineHeight: 1.75,
                maxWidth: 520,
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
              style={{ width: 200, height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* 펠로우십이란 */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="text-section" style={{ marginBottom: 56 }}>
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
                borderLeft: "2px solid #E5E7EB",
                paddingLeft: 28,
              }}
            >
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  lineHeight: 1.5,
                  marginBottom: 20,
                  letterSpacing: "-0.02em",
                }}
              >
                &ldquo;당신이 만들고 싶은 것이 있다면,
                우리가 먼저 믿겠습니다.&rdquo;
              </p>
              <p style={{ color: "#6B7280", fontSize: 16, lineHeight: 1.75 }}>
                Vibers Fellowship은 학벌, 경력, 나이에 관계없이
                순수한 빌더 역량과 잠재력만으로 선발합니다.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "#6B7280",
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

      {/* 이런 사람을 찾습니다 */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <img
              src="/images/builders-group.png"
              alt="빌더 그룹"
              style={{ width: 160, height: "auto", margin: "0 auto 24px" }}
            />
            <h2 className="text-section">
              이런 사람을
              <br />
              찾습니다
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
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
                className="card"
                style={{ padding: "36px 28px" }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#8DC63F",
                    letterSpacing: "0.06em",
                  }}
                >
                  {item.num}
                </span>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    marginTop: 16,
                    marginBottom: 12,
                    letterSpacing: "-0.02em",
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

      {/* 펠로우에게 제공되는 것 */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="text-section" style={{ marginBottom: 64 }}>
            펠로우에게
            <br />
            제공되는 것
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 48,
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
              <div
                key={b.title}
                style={{
                  borderTop: "1px solid #E5E7EB",
                  paddingTop: 24,
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                    color: "#111111",
                  }}
                >
                  {b.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.75 }}>
                  {b.desc}
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
            지금 시작하세요
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
