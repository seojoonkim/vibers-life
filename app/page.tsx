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
            <span>🔥</span>
            <span>Powered by Hashed × NEXON</span>
          </div>

          <h1 className="text-hero" style={{ marginBottom: 28, maxWidth: 820 }}>
            당신이 만드는 것이,<br />
            다음 시대를<br />
            정의합니다.
          </h1>

          <p style={{
            fontSize: 20, color: "#555", lineHeight: 1.75,
            maxWidth: 620, marginBottom: 48, fontWeight: 500,
          }}>
            Hashed × NEXON이 선발한 20명의 빌더.<br />
            강남 한복판에서 6개월간 함께 살며, 함께 만듭니다.<br />
            자금, 멘토링, 글로벌 네트워크 — 당신의 가능성에 먼저 투자합니다.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="#waitlist" className="btn-primary">
              🚀 지금 웨이팅 등록
            </Link>
            <Link href="/about" className="btn-secondary">
              프로그램 상세 보기
            </Link>
          </div>

          {/* Social proof */}
          <div style={{ marginTop: 64, display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[
              { num: "20명", label: "기수당 선발" },
              { num: "6개월", label: "몰입 레지던시" },
              { num: "최대 2년", label: "펠로우십 지속" },
              { num: "100%", label: "생활비 전액 지원" },
            ].map((s) => (
              <div key={s.label}>
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
            <p style={{ fontSize: 17, color: "#888", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.75 }}>
              이력서가 아니라 가능성을, 학벌이 아니라 열정을, 경력이 아니라 잠재력을 봅니다.
            </p>
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
                desc: "누구에게나 열려있지 않습니다. 엄격한 서류 심사, 기술 과제, 심층 면접을 거쳐 선발된 빌더만이 참여합니다. 매 기수 경쟁률 10:1 이상을 목표로 최고의 밀도를 유지합니다.",
                color: "#FF6B35",
              },
              {
                icon: <IconBox color="#FFD166"><IconSprout size={22} /></IconBox>,
                num: "02",
                title: "펠로우십",
                desc: "당신의 가능성에 먼저 투자합니다. 월별 생활비 지원, 전담 멘토 배정, Hashed×NEXON 글로벌 네트워크 접근권을 제공하며, 뛰어난 프로젝트에는 시드 투자까지 연결합니다.",
                color: "#FFD166",
              },
              {
                icon: <IconBox color="#6B4EFF"><IconHome size={22} /></IconBox>,
                num: "03",
                title: "Vibers House",
                desc: "강남 한복판, 선발된 빌더 20명이 함께 사는 공유 레지던스. 개인 작업 공간, 공용 미팅룸, 이벤트 라운지까지 — 몰입과 협업을 동시에 가능하게 하는 최적의 환경입니다.",
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
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              WHY NOW
            </p>
            <h2 className="text-section" style={{ marginBottom: 16 }}>
              왜 지금이 결정적 순간인가
            </h2>
            <p style={{ fontSize: 17, color: "#555", maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>
              AI와 Web3가 동시에 폭발하는 지금, 역사상 가장 작은 팀이 가장 큰 영향력을 만들 수 있는 시대가 열렸습니다.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}>
            {[
              {
                icon: <IconCpu size={28} />,
                title: "바이브코딩의 시대",
                desc: "AI가 코드를 쓰는 시대, 10명이 하던 일을 1명이 해냅니다. 프롬프트 하나로 MVP를 만들고, 에이전트가 DevOps를 처리합니다. 진짜 차별화는 무엇을 만들지 결정하는 사람에게 있습니다.",
                color: "#FF6B35",
              },
              {
                icon: <IconGlobe size={28} />,
                title: "Web3 × AI × 게임의 교차점",
                desc: "온체인 에이전트, AI NPC, 탈중앙 게임 경제 — 세 가지 혁명이 교차하는 지금, 완전히 새로운 카테고리의 프로덕트가 탄생하고 있습니다. 이 교차점에서 시작하는 빌더가 다음 유니콘을 만듭니다.",
                color: "#6B4EFF",
              },
              {
                icon: <IconZap size={28} />,
                title: "초기 3년의 법칙",
                desc: "새로운 패러다임의 처음 3년 안에 뛰어드는 빌더가 산업의 표준을 만듭니다. 이더리움 초기의 Vitalik, 모바일 초기의 Instagram처럼 — 지금 시작하는 당신이 5년 뒤 산업을 이끕니다.",
                color: "#FFD166",
              },
            ].map((card, i) => (
              <div key={i} style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 20,
                padding: "36px 32px",
                boxShadow: `4px 4px 0px ${card.color}`,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: "#F5F0E8", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  border: "1.5px solid #DDD8CC", marginBottom: 20,
                }}>
                  <span style={{ color: "#1A1A1A" }}>{card.icon}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.02em" }}>
                  {card.title}
                </h3>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div style={{
            background: "#FFFDF7",
            border: "2px solid #1A1A1A",
            borderRadius: 20,
            padding: "36px 40px",
            boxShadow: "4px 4px 0px #1A1A1A",
            marginTop: 40,
            textAlign: "center",
          }}>
            <p style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.6, letterSpacing: "-0.02em" }}>
              &ldquo;AI가 코드를 쓰는 시대,<br />
              우리는 미래를 설계하는 사람에게 투자합니다.&rdquo;
            </p>
            <p style={{ fontSize: 14, color: "#888", marginTop: 12 }}>
              — Hashed, Vibers Life 운영 철학
            </p>
          </div>
        </div>
      </section>

      {/* ─── Partners Detail ─── */}
      <section className="section-padding" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              PARTNERS
            </p>
            <h2 className="text-section" style={{ color: "#F5F0E8", marginBottom: 16 }}>
              최고의 파트너가<br />뒤에 있습니다
            </h2>
            <p style={{ fontSize: 17, color: "#888", maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>
              대한민국을 대표하는 두 기업이 함께 만드는 펠로우십.<br />
              빌더에게 가장 강력한 출발점을 제공합니다.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}>
            {[
              {
                org: "Hashed",
                icon: <IconLink size={28} />,
                role: "아시아 최대 AI · Web3 벤처캐피탈",
                highlights: [
                  "100개+ 포트폴리오 — The Sandbox, Axie Infinity, LINE NEXT 등 글로벌 Web3 대표 프로젝트에 초기 투자",
                  "글로벌 투자 네트워크 — 실리콘밸리·싱가포르·두바이를 잇는 LP·VC 네트워크로 빌더의 후속 투자 연결",
                  "AI×Web3 융합 — 온체인 AI 에이전트, 탈중앙 인프라, DeFi 등 차세대 인터넷 빌더 집중 육성",
                  "Vibers Life에서 AI·Web3 트랙 10명의 전담 멘토링, 시드 투자, 포트폴리오사 협업 기회 제공",
                ],
                color: "#6B4EFF",
              },
              {
                org: "NEXON",
                icon: <IconGamepad size={28} />,
                role: "K-게임 레전드 · 글로벌 인터랙티브 엔터테인먼트",
                highlights: [
                  "글로벌 플레이어베이스 — 190개국, 수억 명의 유저에게 서비스하는 세계적 게임 퍼블리셔",
                  "전설적 IP — 메이플스토리, 던전앤파이터, 카트라이더 등 K-게임을 세계에 알린 아이콘",
                  "게임파이 개척 — 블록체인 게임, 가상경제, UGC 플랫폼 등 놀이의 미래를 적극적으로 실험 중",
                  "Vibers Life에서 게임·인터랙티브 트랙 10명에게 개발 인프라, IP 라이선스, 퍼블리싱 기회 제공",
                ],
                color: "#FF6B35",
              },
            ].map((partner) => (
              <div key={partner.org} style={{
                background: "#FFFDF7",
                border: "2px solid #F5F0E8",
                borderRadius: 20,
                padding: "36px 32px",
                boxShadow: `5px 5px 0px ${partner.color}`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: partner.color }}>{partner.icon}</span>
                  <p style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em" }}>{partner.org}</p>
                </div>
                <p style={{ fontSize: 14, fontWeight: 700, color: partner.color, marginBottom: 20 }}>
                  {partner.role}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {partner.highlights.map((h, i) => (
                    <li key={i} style={{
                      color: "#555", fontSize: 14, lineHeight: 1.7,
                      paddingLeft: 16, position: "relative",
                      marginBottom: i < partner.highlights.length - 1 ? 12 : 0,
                    }}>
                      <span style={{
                        position: "absolute", left: 0, top: 2,
                        color: partner.color, fontWeight: 700, fontSize: 12,
                      }}>●</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            <p style={{ fontSize: 18, color: "#555", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
              강남 한복판, 선발된 빌더 20명이 함께 거주하는 장학금형 레지던시.
              생활의 모든 것이 해결된 환경에서 오직 만드는 것에만 집중하세요.
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            marginBottom: 48,
          }}>
            {[
              { num: "6개월", label: "집중 레지던시", color: "#FF6B35" },
              { num: "20명", label: "기수당 선발", color: "#6B4EFF" },
              { num: "최대 2년", label: "펠로우십 지속", color: "#FFD166" },
              { num: "0원", label: "입주 비용", color: "#2D6A4F" },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 16,
                padding: "24px 20px",
                boxShadow: `3px 3px 0px ${stat.color}`,
                textAlign: "center",
              }}>
                <p style={{ fontSize: 30, fontWeight: 800, color: "#1A1A1A", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 8 }}>
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
                desc: "AI 에이전트, 탈중앙화 앱, 블록체인 프로토콜, DeFi — 차세대 인터넷을 설계하는 빌더",
                color: "#6B4EFF",
              },
              {
                org: "NEXON",
                icon: <IconGamepad size={28} />,
                count: "10명",
                desc: "게임 디자인, 인터랙티브 콘텐츠, 게임 엔진, 라이브 서비스 — 놀이의 미래를 만드는 빌더",
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

      {/* ─── Benefits ─── */}
      <section className="section-padding" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
            BENEFITS
          </p>
          <h2 className="text-section" style={{ color: "#F5F0E8", marginBottom: 20 }}>
            펠로우에게 제공되는 모든 것
          </h2>
          <p style={{ fontSize: 18, color: "#888", maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.75 }}>
            만드는 것에만 집중할 수 있도록,<br />나머지 모든 것을 해결합니다.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}>
            {[
              { icon: <IconHome size={28} />, title: "강남 공유 하우스", desc: "강남역 도보 10분 거리. 개인 침실, 코워킹 스페이스, 미팅룸, 이벤트 라운지를 갖춘 빌더 전용 레지던스.", color: "#6B4EFF" },
              { icon: <IconStar size={28} />, title: "1:1 전담 멘토십", desc: "Hashed 파트너, NEXON 현직 리더, 성공한 창업자가 전담 멘토로 매칭. 격주 1:1 세션으로 성장을 가속합니다.", color: "#FFD166" },
              { icon: <IconDollar size={28} />, title: "투자 기회 연결", desc: "우수 프로젝트에 대한 Hashed 시드 투자 및 글로벌 VC 네트워크를 통한 후속 투자 연결. 데모데이에서 직접 피칭.", color: "#2D6A4F" },
              { icon: <IconUsers size={28} />, title: "글로벌 빌더 네트워크", desc: "Hashed 포트폴리오 100개+ 기업 대표, NEXON 글로벌 스튜디오, Alumni 선배 빌더와의 직접 네트워킹 기회.", color: "#FF6B35" },
              { icon: <IconDollar size={28} />, title: "생활비 전액 지원", desc: "주거비·식비·교통비 포함 월별 생활비 전액 지급. 돈 걱정 없이 오직 프로덕트에만 집중할 수 있는 환경.", color: "#E76F51" },
              { icon: <IconTarget size={28} />, title: "주간 식사 & 이벤트", desc: "매주 업계 리더 초청 디너, 월간 해커톤, 분기별 오프사이트. 동료 빌더와의 교류가 최고의 영감을 줍니다.", color: "#6B4EFF" },
              { icon: <IconCpu size={28} />, title: "AI·개발 인프라", desc: "클라우드 크레딧, GPU 접근권, AI API 키, 개발 도구 라이선스를 무상 제공. 기술 스택에 제한 없이 빌딩하세요.", color: "#2D6A4F" },
              { icon: <IconGlobe size={28} />, title: "평생 Alumni 멤버십", desc: "프로그램 종료 후에도 Vibers Alumni 네트워크 영구 멤버. 후속 멘토링, 채용 연결, 커뮤니티 혜택이 계속됩니다.", color: "#FFD166" },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#FFFDF7",
                border: "2px solid #F5F0E8",
                borderRadius: 18,
                padding: "28px 24px",
                boxShadow: "3px 3px 0px rgba(255,255,255,0.15)",
                textAlign: "left",
              }}>
                <span style={{ color: item.color }}>{item.icon}</span>
                <p style={{ fontWeight: 800, fontSize: 17, marginTop: 12, marginBottom: 8 }}>{item.title}</p>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We're Looking For ─── */}
      <section className="section-padding" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              WHO WE&apos;RE LOOKING FOR
            </p>
            <h2 className="text-section" style={{ marginBottom: 16 }}>
              우리가 찾는 사람
            </h2>
            <p style={{ fontSize: 17, color: "#555", maxWidth: 540, margin: "0 auto", lineHeight: 1.75 }}>
              학벌도, 경력도, 나이도 묻지 않습니다.<br />
              오직 만드는 힘과 성장의 속도만 봅니다.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}>
            {[
              {
                num: "01",
                title: "🛠️ 빌더 (개발자)",
                desc: "풀스택, 블록체인, AI/ML, 게임 개발 — 분야는 상관없습니다. 아이디어를 코드로 바꾸는 사람. 해커톤 수상작이든 개인 프로젝트든, 실제로 동작하는 무언가를 만들어 본 경험이 핵심입니다. 바이브코딩 시대에 AI를 무기로 10배 빠르게 빌딩하는 개발자를 찾습니다.",
                color: "#FF6B35",
              },
              {
                num: "02",
                title: "🎨 크리에이터 (디자이너)",
                desc: "UX/UI, 프로덕트 디자인, 게임 아트, 인터랙티브 미디어 — 사용자 경험을 설계하는 사람. 아름다움만이 아니라 '왜 이렇게 동작해야 하는지'를 설명할 수 있는 디자이너. Figma 프로토타입이든 실제 구동되는 프론트엔드든, 직접 만든 것을 보여주세요.",
                color: "#6B4EFF",
              },
              {
                num: "03",
                title: "🧠 아키텍트 (기획자)",
                desc: "프로덕트 매니저, 게임 디자이너, 토크노믹스 설계자 — 시스템을 구상하고 로드맵을 그리는 사람. 시장을 읽고, 유저를 이해하고, 팀을 모아 실행까지 이끄는 추진력. 기획서가 아니라 실제 런칭한 프로덕트의 성장 스토리를 들려주세요.",
                color: "#FFD166",
              },
            ].map((item) => (
              <div key={item.num} style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 20,
                padding: "32px 28px",
                boxShadow: `4px 4px 0px ${item.color}`,
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: item.color, letterSpacing: "0.08em" }}>
                  {item.num}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginTop: 12, marginBottom: 12, letterSpacing: "-0.02em" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="section-padding" style={{ background: "#EDE8DC" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              JOURNEY
            </p>
            <h2 className="text-section" style={{ marginBottom: 16 }}>
              선발부터 데모데이까지
            </h2>
            <p style={{ fontSize: 17, color: "#555", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
              체계적인 과정을 통해 빌더로서의 여정을 함께합니다.
            </p>
          </div>

          {[
            { phase: "01", title: "지원서 제출", period: "온라인 접수", desc: "포트폴리오, 프로젝트 경험, 지원 동기를 담은 지원서를 제출합니다. 웨이팅 리스트 등록자에게 우선 심사 기회가 주어집니다.", color: "#FF6B35" },
            { phase: "02", title: "서류 심사", period: "지원 마감 후 2주", desc: "제출된 포트폴리오와 프로젝트 경험을 기반으로 1차 심사를 진행합니다. 실제로 만든 결과물과 성장 잠재력을 중점적으로 평가합니다.", color: "#6B4EFF" },
            { phase: "03", title: "인터뷰", period: "서류 합격자 대상", desc: "Hashed 파트너, NEXON 리더와의 심층 면접. 기술적 깊이뿐 아니라 비전, 협업 태도, 성장 마인드셋을 종합적으로 봅니다.", color: "#FFD166" },
            { phase: "04", title: "최종 합격 & 입주", period: "20명 선발", desc: "최종 합격 통보 후 2주 내 강남 Vibers House에 입주합니다. 동기 빌더들과의 첫 만남, 오리엔테이션으로 여정이 시작됩니다.", color: "#2D6A4F" },
            { phase: "05", title: "6개월 몰입 빌딩", period: "레지던시 기간", desc: "전담 멘토와 함께 프로덕트를 집중 개발합니다. 주간 멘토링, 월간 해커톤, 동료 빌더와의 끊임없는 피드백 루프 속에서 성장합니다.", color: "#FF6B35" },
            { phase: "06", title: "데모데이", period: "레지던시 종료", desc: "업계 리더, 투자자, 미디어 앞에서 6개월의 결과를 발표합니다. 우수 프로젝트는 Hashed 시드 투자 및 후속 VC 연결로 이어집니다.", color: "#6B4EFF" },
          ].map((step) => (
            <div key={step.phase} style={{
              display: "flex", gap: 24, alignItems: "flex-start",
              padding: "28px 0",
              borderBottom: "1.5px solid #C8C3B8",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: step.color, display: "flex",
                alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: 14, fontWeight: 800, flexShrink: 0,
              }}>
                {step.phase}
              </div>
              <div>
                <p style={{ fontSize: 18, fontWeight: 800, marginBottom: 4, letterSpacing: "-0.02em" }}>
                  {step.title}
                </p>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#888", marginBottom: 8 }}>{step.period}</p>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              FAQ
            </p>
            <h2 className="text-section">
              자주 묻는 질문
            </h2>
          </div>

          {[
            {
              q: "지원 자격이 따로 있나요?",
              a: "공식적인 학력·나이·전공 제한은 없습니다. 20대 초반부터 30대 초반의 초기 커리어 빌더를 주로 선발하지만, 핵심 기준은 '실제로 무엇을 만들었는가'와 '성장 잠재력'입니다. 비전공자, 독학 개발자, 디자이너 출신 빌더 모두 환영합니다.",
            },
            {
              q: "참가비나 주거 비용이 있나요?",
              a: "전혀 없습니다. 참가비 0원, 주거비 0원입니다. 오히려 주거비·식비·교통비를 포함한 생활비를 매월 전액 지급합니다. 개발 인프라(클라우드 크레딧, GPU, 도구 라이선스)도 무상 제공됩니다. 오직 만드는 것에만 집중하세요.",
            },
            {
              q: "프로그램 기간은 얼마나 되나요?",
              a: "핵심 레지던시는 6개월입니다. Vibers House에 입주하여 동료 빌더 19명과 함께 살며 프로덕트를 만듭니다. 레지던시 종료 후에도 최대 2년간 펠로우십이 유지되며, Alumni 네트워크의 영구 멤버로 남습니다.",
            },
            {
              q: "투자를 받을 수 있나요?",
              a: "네. 6개월 레지던시 기간 중 뛰어난 프로젝트에 대해 Hashed가 직접 시드 투자를 집행합니다. 데모데이에서는 글로벌 VC, 엔젤 투자자 앞에서 피칭하며, 후속 투자 연결까지 지원합니다. 투자는 의무가 아니라 기회입니다.",
            },
            {
              q: "원격 참여가 가능한가요?",
              a: "아니요, 원격 참여는 불가합니다. 6개월 레지던시 기간 동안 강남 Vibers House에 거주하는 것이 원칙입니다. 함께 살며 만드는 밀도 높은 환경이 프로그램의 핵심 가치이기 때문입니다. 몰입의 힘을 경험하게 됩니다.",
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#FFFDF7",
              border: "2px solid #1A1A1A",
              borderRadius: 16,
              padding: "28px 32px",
              marginBottom: 16,
              boxShadow: "3px 3px 0px #1A1A1A",
            }}>
              <p style={{ fontSize: 17, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.02em" }}>
                Q. {item.q}
              </p>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Waitlist ─── */}
      <section id="waitlist" className="section-padding" style={{ background: "#EDE8DC" }}>
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
              다음 기수,<br />당신의 자리입니다.
            </h2>
            <p style={{ color: "#666", fontSize: 16, lineHeight: 1.75, marginBottom: 12 }}>
              웨이팅 리스트에 등록하시면<br />
              모집이 시작될 때 가장 먼저 안내해 드립니다.
            </p>
            <p style={{ color: "#FF6B35", fontSize: 14, fontWeight: 700, marginBottom: 36 }}>
              ⚡ 선착순 등록자에게 우선 심사 기회 제공
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
              Vibers Life 🔥
            </p>
            <p style={{ color: "#888", fontSize: 13 }}>차세대 빌더를 위한 몰입형 펠로우십</p>
          </div>
          <p style={{ color: "#888", fontSize: 13, fontWeight: 600 }}>
            Powered by Hashed × NEXON
          </p>
        </div>
      </footer>
    </main>
  );
}
