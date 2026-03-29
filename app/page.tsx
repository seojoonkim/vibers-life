"use client";

import Link from "next/link";
import WaitlistForm from "./components/WaitlistForm";
import {
  IconTarget, IconSprout, IconHome, IconRocket,
  IconCpu, IconGlobe, IconZap, IconLink, IconGamepad,
  IconUsers, IconDollar, IconBox, IconStar,
} from "./components/icons";

export default function Home() {
  return (
    <main style={{ background: "#F5F0E8" }}>
      {/* ─── Hero ─── */}
      <section
        className="section-padding"
        style={{
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#F5F0E8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -100, left: -80,
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(107,78,255,0.08) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", position: "relative" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#FFFDF7", border: "2px solid #1A1A1A",
            borderRadius: 50, padding: "8px 18px",
            fontSize: 13, fontWeight: 700, marginBottom: 36,
            boxShadow: "3px 3px 0px #1A1A1A",
          }}>
            <span></span>
            <span>Powered by Hashed × NEXON</span>
          </div>

          <h1 className="text-hero" style={{ marginBottom: 28, maxWidth: 780 }}>
            차세대 빌더를<br />
            위한 펠로우십
          </h1>

          <p style={{
            fontSize: 20, color: "#555", lineHeight: 1.75,
            maxWidth: 520, marginBottom: 48, fontWeight: 500,
          }}>
            상위 1%의 젊은 개발자를 발굴하고,<br />
            후원하고, 함께 성장하는 프로그램
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="#waitlist" className="btn-primary">
               웨이팅 등록
            </Link>
            <Link href="/about" className="btn-secondary">
              더 알아보기
            </Link>
          </div>

          {/* Social proof */}
          <div style={{ marginTop: 64, display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[
              { num: "20명", label: "기수당 선발" },
              { num: "6개월", label: "레지던시" },
              { num: "2년", label: "펠로우십" },
            ].map((s) => (
              <div key={s.num}>
                <p style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.num}</p>
                <p style={{ fontSize: 14, color: "#888", marginTop: 4, fontWeight: 600 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What is Vibers Life ─── */}
      <section className="section-padding" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              ABOUT
            </p>
            <h2 className="text-section" style={{ color: "#F5F0E8" }}>
              Vibers Life란?
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}>
            {[
              {
                icon: <IconBox color="#FF6B35"><IconTarget size={22} /></IconBox>,
                num: "01",
                title: "선발형 멤버십",
                desc: "누구에게나 열려있지 않습니다. 엄격한 심사를 거쳐 선발된 빌더만이 참여할 수 있습니다.",
                color: "#FF6B35",
              },
              {
                icon: <IconBox color="#FFD166"><IconSprout size={22} /></IconBox>,
                num: "02",
                title: "펠로우십",
                desc: "당신의 가능성에 먼저 투자합니다. 자금, 멘토링, 네트워크를 아낌없이 제공합니다.",
                color: "#FFD166",
              },
              {
                icon: <IconBox color="#6B4EFF"><IconHome size={22} /></IconBox>,
                num: "03",
                title: "Vibers House",
                desc: "강남에서 6개월, 함께 살고 만들고 성장합니다. 몰입할 수 있는 환경을 만들어 드립니다.",
                color: "#6B4EFF",
              },
            ].map((card) => (
              <div key={card.num} style={{
                background: "#FFFDF7",
                border: "2px solid #F5F0E8",
                borderRadius: 20,
                padding: "32px 28px",
                boxShadow: `4px 4px 0px ${card.color}`,
                transition: "all 0.15s",
              }}>
                <div style={{ marginBottom: 20 }}>
                  {card.icon}
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em" }}>
                  {card.num}
                </span>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginTop: 10, marginBottom: 12, letterSpacing: "-0.02em" }}>
                  {card.title}
                </h3>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Now ─── */}
      <section className="section-padding" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "center",
          }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
                WHY NOW
              </p>
              <h2 className="text-section" style={{ marginBottom: 24 }}>
                왜 지금<br />Vibers인가
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "#555", marginBottom: 36, maxWidth: 520 }}>
                바이브코딩의 시대가 도래했습니다. AI가 코드를 쓰는 시대,
                진짜 차별화는 무엇을 만들지 결정하는 사람에게 있습니다.
              </p>
              <div style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 20,
                padding: "28px 32px",
                boxShadow: "4px 4px 0px #1A1A1A",
              }}>
                <p style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.5, letterSpacing: "-0.02em" }}>
                  &ldquo;AI가 코드를 쓰는 시대,<br />
                  우리는 미래를 설계하는<br />
                  사람에게 투자합니다.&rdquo;
                </p>
              </div>
            </div>

            <div style={{
              background: "#FFFDF7",
              border: "2px solid #1A1A1A",
              borderRadius: 24,
              padding: "40px 36px",
              boxShadow: "6px 6px 0px #FF6B35",
            }}>
              {[
                { icon: <IconCpu size={20} />, title: "AI 네이티브 시대", desc: "AI 툴을 제대로 다루는 개발자가 10배 이상의 생산성을 냅니다." },
                { icon: <IconGlobe size={20} />, title: "Web3 × AI 교차점", desc: "두 혁명이 만나는 곳에서 새로운 카테고리가 탄생합니다." },
                { icon: <IconZap size={20} />, title: "지금이 타이밍", desc: "초기 빌더가 미래의 리더가 됩니다. 이 기회는 짧습니다." },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: 16, alignItems: "flex-start",
                  paddingBottom: i < 2 ? 28 : 0,
                  borderBottom: i < 2 ? "1.5px solid #EDE8DC" : "none",
                  marginBottom: i < 2 ? 28 : 0,
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "#F5F0E8", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: 20, flexShrink: 0,
                    border: "1.5px solid #DDD8CC",
                  }}>
                    <span style={{ color: "#1A1A1A" }}>{item.icon}</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{item.title}</p>
                    <p style={{ color: "#666", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vibers House ─── */}
      <section className="section-padding" style={{ background: "#EDE8DC" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              RESIDENCY PROGRAM
            </p>
            <h2 className="text-section" style={{ marginBottom: 16 }}>Vibers House</h2>
            <p style={{ fontSize: 18, color: "#555", maxWidth: 520, margin: "0 auto" }}>
              장학금형 빌더 레지던시. 강남 한복판에서 6개월간
              함께 거주하며 집중적으로 프로덕트를 만들어냅니다.
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}>
            {[
              { num: "6개월", label: "집중 레지던시 기간", color: "#FF6B35" },
              { num: "20명", label: "기수당 선발 인원", color: "#6B4EFF" },
              { num: "최대 2년", label: "펠로우십 지속 기간", color: "#FFD166" },
            ].map((stat) => (
              <div key={stat.num} style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 16,
                padding: "24px 20px",
                boxShadow: `3px 3px 0px ${stat.color}`,
                textAlign: "center",
              }}>
                <p style={{ fontSize: 34, fontWeight: 800, color: "#1A1A1A", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 8 }}>
                  {stat.num}
                </p>
                <p style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tracks */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}>
            {[
              {
                org: "Hashed",
                icon: <IconLink size={28} />,
                count: "10명",
                desc: "AI · Web3 · internet-native 빌더",
                color: "#6B4EFF",
              },
              {
                org: "NEXON",
                icon: <IconGamepad size={28} />,
                count: "10명",
                desc: "게임 · 인터랙티브 · 엔터테인먼트 빌더",
                color: "#FF6B35",
              },
            ].map((track) => (
              <div key={track.org} style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 20,
                padding: "36px 32px",
                boxShadow: `5px 5px 0px ${track.color}`,
                transition: "all 0.15s",
              }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 12, marginBottom: 16,
                }}>
                  <span style={{ color: track.color }}>{track.icon}</span>
                  <p style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em" }}>{track.org}</p>
                </div>
                <p style={{ fontSize: 14, fontWeight: 700, color: track.color, marginBottom: 12 }}>
                  {track.count} 선발
                </p>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75 }}>{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Builders ─── */}
      <section className="section-padding" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
            COMMUNITY
          </p>
          <h2 className="text-section" style={{ color: "#F5F0E8", marginBottom: 20 }}>
            빌더들과 함께 성장하세요
          </h2>
          <p style={{ fontSize: 18, color: "#888", maxWidth: 480, margin: "0 auto 56px" }}>
            혼자보다 함께. 같은 비전을 가진 동료들과
            최고의 환경에서 만들어냅니다.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}>
            {[
              { icon: <IconStar size={28} />, title: "멘토링", desc: "업계 최고 전문가들의 1:1 멘토링", color: "#FFD166" },
              { icon: <IconDollar size={28} />, title: "생활비 지원", desc: "6개월 전액 장학금 지급", color: "#2D6A4F" },
              { icon: <IconHome size={28} />, title: "주거 제공", desc: "강남 공유 하우스 무료 입주", color: "#6B4EFF" },
              { icon: <IconUsers size={28} />, title: "네트워크", desc: "Hashed × NEXON 글로벌 네트워크", color: "#FF6B35" },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#FFFDF7",
                border: "2px solid #F5F0E8",
                borderRadius: 18,
                padding: "28px 24px",
                boxShadow: "3px 3px 0px rgba(255,255,255,0.15)",
                textAlign: "left",
              }}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <span style={{ color: (item as any).color || "#FF6B35" }}>{(item as any).icon}</span>
                <p style={{ fontWeight: 800, fontSize: 17, marginTop: 12, marginBottom: 8 }}>{item.title}</p>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Waitlist ─── */}
      <section id="waitlist" className="section-padding" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            background: "#FFFDF7",
            border: "2px solid #1A1A1A",
            borderRadius: 28,
            padding: "56px 48px",
            boxShadow: "6px 6px 0px #FF6B35",
          }}>
            <span style={{ color: "#FF6B35" }}><IconRocket size={40} /></span>
            <h2 className="text-section" style={{ marginTop: 16, marginBottom: 16 }}>
              함께하고<br />싶으신가요?
            </h2>
            <p style={{ color: "#666", fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}>
              웨이팅 리스트에 등록하시면,<br />
              모집이 시작될 때 가장 먼저 안내해 드립니다.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        borderTop: "2px solid #1A1A1A",
        padding: "32px 24px",
        background: "#EDE8DC",
      }}>
        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: 16, marginBottom: 2, letterSpacing: "-0.02em" }}>
              Vibers Life 
            </p>
            <p style={{ color: "#888", fontSize: 13 }}>차세대 빌더 펠로우십</p>
          </div>
          <p style={{ color: "#888", fontSize: 13, fontWeight: 600 }}>
            Powered by Hashed × NEXON
          </p>
        </div>
      </footer>
    </main>
  );
}
