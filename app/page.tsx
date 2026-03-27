"use client";

import Link from "next/link";
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 24px 80px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <p
          className="font-barlow"
          style={{
            color: "#FF4D00",
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          POWERED BY HASHED × NEXON
        </p>
        <h1
          className="font-sans-kr text-hero"
          style={{ color: "#0A0A0A", marginBottom: 36 }}
        >
          차세대 빌더를
          <br />
          위한 펠로우십
        </h1>
        <p
          className="font-sans-kr"
          style={{
            fontSize: 20,
            color: "#6B6B6B",
            maxWidth: 560,
            marginBottom: 52,
            lineHeight: 1.8,
          }}
        >
          상위 1%의 젊은 개발자를 발굴하고,
          <br />
          후원하고, 함께 성장하는 프로그램
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="#waitlist" className="btn-orange">
            웨이팅 등록
          </Link>
          <Link href="/about" className="btn-outline">
            더 알아보기
          </Link>
        </div>
      </section>

      {/* ─── Vibers Life란? ─── */}
      <section className="bg-cream" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="font-sans-kr text-section"
            style={{ marginBottom: 72 }}
          >
            Vibers Life란?
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
                style={{
                  background: "#FFFFFF",
                  padding: 44,
                  borderTop: "3px solid #FF4D00",
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
                    color: "#FF4D00",
                    fontSize: 14,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                  }}
                >
                  {card.num}
                </span>
                <h3
                  className="font-sans-kr"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    marginTop: 20,
                    marginBottom: 16,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-sans-kr"
                  style={{ color: "#6B6B6B", fontSize: 16, lineHeight: 1.8 }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 왜 지금 Vibers인가 ─── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="font-sans-kr text-section"
            style={{ marginBottom: 56 }}
          >
            왜 지금
            <br />
            Vibers인가
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
            className="grid-cols-1 md:grid-cols-2"
          >
            <div style={{ maxWidth: 640 }}>
              <p
                className="font-sans-kr"
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#6B6B6B",
                  marginBottom: 32,
                }}
              >
                바이브코딩의 시대가 도래했습니다. AI가 코드를 쓰는 시대,
                진짜 차별화는 무엇을 만들지 결정하는 사람에게 있습니다.
                기술의 민주화가 가속될수록, 비전과 실행력을 겸비한 빌더의 가치는
                기하급수적으로 높아집니다.
              </p>
              <p
                className="font-sans-kr"
                style={{ fontSize: 18, lineHeight: 1.8, color: "#6B6B6B" }}
              >
                Vibers Life는 이 전환기에 가장 뛰어난 젊은 빌더를 조기에 발굴하고,
                그들이 최고의 환경에서 성장할 수 있도록 모든 것을 제공합니다.
              </p>
            </div>
            <div
              style={{
                borderLeft: "3px solid #FF4D00",
                paddingLeft: 40,
              }}
            >
              <p
                className="font-sans-kr"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  lineHeight: 1.5,
                  color: "#0A0A0A",
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
      </section>

      {/* ─── Vibers House ─── */}
      <section className="bg-cream" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p
            className="font-barlow"
            style={{
              color: "#FF4D00",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            RESIDENCY PROGRAM
          </p>
          <h2
            className="font-sans-kr text-section"
            style={{ marginBottom: 20 }}
          >
            Vibers House
          </h2>
          <p
            className="font-sans-kr"
            style={{
              fontSize: 20,
              color: "#6B6B6B",
              marginBottom: 72,
              maxWidth: 640,
              lineHeight: 1.8,
            }}
          >
            장학금형 빌더 레지던시
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 40,
              marginBottom: 72,
            }}
          >
            {[
              { num: "6개월", label: "집중 레지던시 기간" },
              { num: "20명", label: "기수당 선발 인원" },
              { num: "최대 2년", label: "펠로우십 지속 기간" },
            ].map((stat) => (
              <div
                key={stat.num}
                style={{
                  borderTop: "1px solid #E8E8E8",
                  paddingTop: 28,
                }}
              >
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
                  {stat.num}
                </p>
                <p
                  className="font-sans-kr"
                  style={{ fontSize: 15, color: "#6B6B6B" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tracks */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
            }}
            className="grid-cols-1 md:grid-cols-2"
          >
            {[
              {
                org: "Hashed",
                count: "10명",
                desc: "웹3 · 블록체인 · 크립토 빌더",
              },
              {
                org: "NEXON",
                count: "10명",
                desc: "게임 · 인터랙티브 · 엔터테인먼트 빌더",
              },
            ].map((track) => (
              <div
                key={track.org}
                style={{
                  background: "#FFFFFF",
                  padding: 44,
                  borderBottom: "3px solid #FF4D00",
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
                    fontSize: 32,
                    fontWeight: 900,
                    marginBottom: 8,
                    color: "#0A0A0A",
                  }}
                >
                  {track.org}
                </p>
                <p
                  className="font-barlow"
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#FF4D00",
                    marginBottom: 16,
                  }}
                >
                  {track.count}
                </p>
                <p
                  className="font-sans-kr"
                  style={{ color: "#6B6B6B", fontSize: 16, lineHeight: 1.8 }}
                >
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
        className="bg-dark"
        style={{ padding: "80px 24px" }}
      >
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            className="font-sans-kr text-section"
            style={{ color: "#FFFFFF", marginBottom: 28 }}
          >
            함께하고
            <br />
            싶으신가요?
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
            웨이팅 리스트에 등록하시면, 모집이 시작될 때 가장 먼저 안내해 드립니다.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        style={{
          borderTop: "1px solid #E8E8E8",
          padding: "48px 24px",
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
              className="font-barlow"
              style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}
            >
              Vibers Life
            </p>
            <p
              className="font-sans-kr"
              style={{ color: "#6B6B6B", fontSize: 14 }}
            >
              차세대 빌더 펠로우십
            </p>
          </div>
          <p
            className="font-barlow"
            style={{ color: "#6B6B6B", fontSize: 14, fontWeight: 700 }}
          >
            Powered by Hashed × NEXON
          </p>
        </div>
      </footer>
    </main>
  );
}
