"use client";

import Link from "next/link";
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section
        className="section-padding"
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 64,
          }}
        >
          <div style={{ flex: 1, minWidth: 320 }}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#6B7280",
                marginBottom: 24,
              }}
            >
              Powered by Hashed × NEXON
            </p>
            <h1 className="text-hero" style={{ marginBottom: 24 }}>
              차세대 빌더를
              <br />
              위한 펠로우십
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#6B7280",
                lineHeight: 1.75,
                maxWidth: 480,
                marginBottom: 40,
              }}
            >
              상위 1%의 젊은 개발자를 발굴하고,
              <br />
              후원하고, 함께 성장하는 프로그램
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="#waitlist" className="btn-primary">
                웨이팅 등록
              </Link>
              <Link href="/about" className="btn-secondary">
                더 알아보기
              </Link>
            </div>
          </div>
          <div style={{ flexShrink: 0 }}>
            <img
              src="/images/hero-character.png"
              alt="Vibers 개발자 캐릭터"
              style={{ width: 300, height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* ─── Vibers Life란? ─── */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 className="text-section">Vibers Life란?</h2>
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
                num: "01",
                title: "선발형 멤버십",
                desc: "누구에게나 열려있지 않습니다. 엄격한 심사를 거쳐 선발된 빌더만이 참여할 수 있습니다.",
              },
              {
                num: "02",
                title: "펠로우십",
                desc: "당신의 가능성에 먼저 투자합니다. 자금, 멘토링, 네트워크를 아낌없이 제공합니다.",
              },
              {
                num: "03",
                title: "Vibers House",
                desc: "강남에서 6개월, 함께 살고 만들고 성장합니다. 몰입할 수 있는 환경을 만들어 드립니다.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="card"
                style={{ padding: "36px 32px" }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#8DC63F",
                    letterSpacing: "0.05em",
                  }}
                >
                  {card.num}
                </span>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginTop: 16,
                    marginBottom: 12,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.75 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 왜 지금 Vibers인가 ─── */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 64,
            }}
          >
            <div style={{ flexShrink: 0 }}>
              <img
                src="/images/why-now.png"
                alt="로켓 캐릭터"
                style={{ width: 200, height: "auto" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 300 }}>
              <h2 className="text-section" style={{ marginBottom: 32 }}>
                왜 지금
                <br />
                Vibers인가
              </h2>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "#6B7280",
                  marginBottom: 32,
                  maxWidth: 560,
                }}
              >
                바이브코딩의 시대가 도래했습니다. AI가 코드를 쓰는 시대,
                진짜 차별화는 무엇을 만들지 결정하는 사람에게 있습니다.
                기술의 민주화가 가속될수록, 비전과 실행력을 겸비한 빌더의 가치는
                기하급수적으로 높아집니다.
              </p>
              <div
                style={{
                  borderLeft: "2px solid #E5E7EB",
                  paddingLeft: 24,
                }}
              >
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: "#111111",
                    letterSpacing: "-0.02em",
                  }}
                >
                  &ldquo;AI가 코드를 쓰는 시대,
                  <br />
                  우리는 미래를 설계하는
                  <br />
                  사람에게 투자합니다.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vibers House 미리보기 ─── */}
      <section className="section-padding" style={{ background: "#FAFAF9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 64,
              marginBottom: 64,
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
                  marginBottom: 16,
                }}
              >
                Residency Program
              </p>
              <h2 className="text-section" style={{ marginBottom: 16 }}>
                Vibers House
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "#6B7280",
                  lineHeight: 1.75,
                  maxWidth: 480,
                }}
              >
                장학금형 빌더 레지던시. 강남 한복판에서 6개월간
                함께 거주하며 집중적으로 프로덕트를 만들어냅니다.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <img
                src="/images/house-illustration.png"
                alt="Vibers House 건물"
                style={{ width: 240, height: "auto" }}
              />
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 32,
              marginBottom: 48,
            }}
          >
            {[
              { num: "6개월", label: "집중 레지던시 기간" },
              { num: "20명", label: "기수당 선발 인원" },
              { num: "최대 2년", label: "펠로우십 지속 기간" },
            ].map((stat) => (
              <div
                key={stat.num}
                style={{ borderTop: "1px solid #E5E7EB", paddingTop: 20 }}
              >
                <p
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#1B3054",
                    lineHeight: 1,
                    marginBottom: 8,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.num}
                </p>
                <p style={{ fontSize: 14, color: "#6B7280" }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tracks */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                org: "Hashed",
                count: "10명",
                desc: "AI · Web3 · internet-native 빌더",
              },
              {
                org: "NEXON",
                count: "10명",
                desc: "게임 · 인터랙티브 · 엔터테인먼트 빌더",
              },
            ].map((track) => (
              <div
                key={track.org}
                className="card"
                style={{ padding: "32px 28px" }}
              >
                <p
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: 4,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {track.org}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#8DC63F",
                    marginBottom: 12,
                  }}
                >
                  {track.count}
                </p>
                <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.75 }}>
                  {track.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 웨이팅 등록 ─── */}
      <section
        id="waitlist"
        className="section-padding"
        style={{ background: "#1B3054" }}
      >
        <div style={{ maxWidth: 540, margin: "0 auto", textAlign: "center" }}>
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
            웨이팅 리스트에 등록하시면, 모집이 시작될 때 가장 먼저 안내해 드립니다.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        style={{
          borderTop: "1px solid #E5E7EB",
          padding: "32px 24px",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: 15,
                marginBottom: 2,
                letterSpacing: "-0.01em",
              }}
            >
              Vibers Life
            </p>
            <p style={{ color: "#6B7280", fontSize: 13 }}>
              차세대 빌더 펠로우십
            </p>
          </div>
          <p style={{ color: "#6B7280", fontSize: 13 }}>
            Powered by Hashed × NEXON
          </p>
        </div>
      </footer>
    </main>
  );
}
