"use client";

import Link from "next/link";
import {
  IconHome, IconRocket, IconGlobe, IconZap, IconTarget, IconCpu,
  IconUsers, IconStar, IconBox,
} from "../components/icons";

/* ── Additional inline SVG icons (Feather-style) ── */
const IconTrain = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="16" rx="2" />
    <path d="M4 11h16" />
    <path d="M12 3v8" />
    <circle cx="8" cy="15" r="1" />
    <circle cx="16" cy="15" r="1" />
    <path d="M8 19l-2 3" />
    <path d="M16 19l2 3" />
  </svg>
);

const IconBuilding = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="18" />
    <line x1="15" y1="22" x2="15" y2="18" />
    <line x1="9" y1="6" x2="9.01" y2="6" />
    <line x1="15" y1="6" x2="15.01" y2="6" />
    <line x1="9" y1="10" x2="9.01" y2="10" />
    <line x1="15" y1="10" x2="15.01" y2="10" />
    <line x1="9" y1="14" x2="9.01" y2="14" />
    <line x1="15" y1="14" x2="15.01" y2="14" />
  </svg>
);

const IconUtensils = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
  </svg>
);

const IconMonitor = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IconBed = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 012 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8v2a2 2 0 002 2h0a2 2 0 002-2V8" />
  </svg>
);

const IconMic = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
    <path d="M19 10v2a7 7 0 01-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const IconLayout = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const IconWifi = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0114.08 0" />
    <path d="M1.42 9a16 16 0 0121.16 0" />
    <path d="M8.53 16.11a6 6 0 016.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const IconSun = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const IconMoon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const IconCoffee = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 010 8h-1" />
    <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const IconTool = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

const IconClipboard = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);

const IconCheck = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IconCode = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

/* ── Page ── */

export default function HousePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="section-padding"
        style={{
          background: "#F5F0E8",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: -80, right: -60,
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(107,78,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -120, left: -100,
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#FFFDF7", border: "2px solid #1A1A1A",
            borderRadius: 50, padding: "8px 18px",
            fontSize: 13, fontWeight: 700, marginBottom: 36,
            boxShadow: "3px 3px 0px #6B4EFF",
          }}>
            <IconHome size={16} />
            <span>Vibers House · Residency Program</span>
          </div>

          <h1 className="text-hero" style={{ marginBottom: 24, maxWidth: 750 }}>
            강남 한복판,<br />
            20명의 빌더가<br />
            함께 사는 공간.
          </h1>
          <p
            style={{
              fontSize: 20,
              color: "#555",
              lineHeight: 1.75,
              marginBottom: 20,
              maxWidth: 620,
              fontWeight: 500,
            }}
          >
            Y Combinator가 실리콘밸리에서 증명한 것을
            서울 강남에서 다시 증명합니다.
            선발된 20명의 빌더가 6개월간 한 지붕 아래 모여,
            생활의 모든 것이 해결된 환경에서 오직 빌딩에만 집중합니다.
          </p>
          <p style={{ fontSize: 16, color: "#888", lineHeight: 1.75, marginBottom: 40, maxWidth: 620 }}>
            식사, 주거, 인터넷, 커피 — 빌더의 일상을 방해하는 모든 것을 해결했습니다.
            당신은 코드와 프로덕트에만 집중하세요.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/#waitlist" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <IconRocket size={16} />
              입주 웨이팅 등록
            </Link>
            <Link href="/fellowship" className="btn-secondary">
              펠로우십 알아보기
            </Link>
          </div>
          </div>
          <div style={{ flexShrink: 0, width: "100%", maxWidth: 440, minWidth: "min(440px, 100%)" }}>
            <img
              src="/images/house-illustration.png"
              alt="Vibers House"
              style={{ width: "100%", borderRadius: 20, border: "3px solid #1A1A1A", boxShadow: "6px 6px 0px #6B4EFF" }}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ background: "#EDE8DC" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
          }}
        >
          {[
            { num: "6개월", label: "집중 레지던시 기간", color: "#FF6B35" },
            { num: "20명", label: "기수당 선발 인원", color: "#6B4EFF" },
            { num: "100%", label: "생활비 전액 지원", color: "#2D6A4F" },
            { num: "₩0", label: "참가비 · 입주비 일체", color: "#FFD166" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 16,
                padding: "28px 20px",
                boxShadow: `3px 3px 0px ${s.color}`,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: "#1A1A1A",
                  lineHeight: 1,
                  marginBottom: 10,
                  letterSpacing: "-0.03em",
                }}
              >
                {s.num}
              </p>
              <p style={{ fontSize: 14, color: "#888", fontWeight: 600 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story — 왜 함께 사는가 */}
      <section className="section-padding" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: 64,
            alignItems: "center",
          }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
                OUR STORY
              </p>
              <h2 className="text-section" style={{ color: "#F5F0E8", marginBottom: 24 }}>
                왜 &lsquo;함께 사는 것&rsquo;인가
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#999", marginBottom: 24 }}>
                실리콘밸리의 전설적인 스타트업들은 하나같이 차고에서 시작했습니다.
                Y Combinator의 배치 프로그램은 같은 공간에서의 밀도 높은 협업이
                기적 같은 결과를 만든다는 것을 증명했습니다.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#999", marginBottom: 24 }}>
                Vibers House는 그 철학을 서울 강남에 가져왔습니다.
                새벽 3시에 동료에게 코드 리뷰를 받고, 아침 식사를 하며
                어제의 버그를 토론하고, 저녁에는 업계 리더의 파이어사이드 챗에
                참여하는 — 매일이 성장인 환경을 만들었습니다.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#999" }}>
                한 연구에 따르면, 물리적으로 같은 공간에서 일하는 팀은
                원격 팀 대비 <span style={{ color: "#FF6B35", fontWeight: 700 }}>생산성이 3.5배</span>,
                아이디어 공유 빈도가 <span style={{ color: "#6B4EFF", fontWeight: 700 }}>5배 이상</span> 높습니다.
                우연한 만남에서 나오는 영감, 식탁에서 시작되는 프로젝트 —
                이것이 코리빙의 진짜 힘입니다.
              </p>
            </div>
            <div style={{
              background: "#FFFDF7",
              border: "2px solid #F5F0E8",
              borderRadius: 24,
              padding: "40px 36px",
              boxShadow: "6px 6px 0px #6B4EFF",
            }}>
              <p style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.5, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: 20 }}>
                &ldquo;최고의 프로덕트는<br />최고의 환경에서 나온다.&rdquo;
              </p>
              <p style={{ fontSize: 15, color: "#888", lineHeight: 1.75, marginBottom: 24 }}>
                혼자 카페에서 코딩하는 것과, 20명의 뛰어난 동료와 함께 사는 것은
                차원이 다릅니다. Vibers House는 단순한 거주 공간이 아니라,
                빌더를 위한 성장 인큐베이터입니다.
              </p>
              <div style={{ borderTop: "1px solid #EDE8DC", paddingTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: <IconCoffee size={16} />, text: "새벽에 떠오른 아이디어를 바로 논의할 동료" },
                  { icon: <IconZap size={16} />, text: "매주 열리는 업계 리더 파이어사이드 챗" },
                  { icon: <IconUsers size={16} />, text: "자연스럽게 형성되는 팀과 프로젝트" },
                  { icon: <IconStar size={16} />, text: "하루 100번의 우연한 영감" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#555", lineHeight: 1.75 }}>
                    <span style={{ color: "#6B4EFF", flexShrink: 0 }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 왜 강남인가 */}
      <section className="section-padding" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              WHY GANGNAM
            </p>
            <h2 className="text-section" style={{ marginBottom: 16 }}>
              왜 강남인가
            </h2>
            <p style={{ fontSize: 17, color: "#555", maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
              대한민국 스타트업 생태계의 심장부.
              투자자, 창업자, 개발자가 반경 2km 안에 밀집한 세계에서 가장 밀도 높은 빌더 클러스터.
              우연한 만남이 곧 기회가 되는 유일한 동네입니다.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
            gap: 24,
          }}>
            {[
              {
                icon: <IconTrain size={28} />,
                title: "강남역 도보 10분",
                desc: "지하철 2호선·신분당선 더블 접근. 판교 30분, 여의도 25분, 서울 어디든 30분 이내. 인천공항 리무진 직행.",
                color: "#6B4EFF",
              },
              {
                icon: <IconBuilding size={28} />,
                title: "테크 생태계 중심",
                desc: "VC 사무실 50개+, 스타트업 허브, 코워킹 스페이스가 도보 거리에 밀집. 커피 한 잔으로 투자자 미팅이 가능합니다.",
                color: "#FF6B35",
              },
              {
                icon: <IconUtensils size={28} />,
                title: "완벽한 생활 인프라",
                desc: "편의점, 카페, 음식점, 헬스장, 병원, 은행, 세탁소 — 반경 5분 내 생활에 필요한 모든 것. 새벽 배달도 가능.",
                color: "#2D6A4F",
              },
              {
                icon: <IconGlobe size={28} />,
                title: "글로벌 접근성",
                desc: "외국인 빌더도 편하게 생활할 수 있는 인프라. 국제학교, 글로벌 커뮤니티, 영어 서비스 완비 지역.",
                color: "#FFD166",
              },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 18,
                padding: "28px 24px",
                boxShadow: "4px 4px 0px #1A1A1A",
              }}>
                <IconBox color={item.color} boxSize={48} borderRadius={12}>
                  {item.icon}
                </IconBox>
                <p style={{ fontWeight: 800, fontSize: 17, marginTop: 16, marginBottom: 8 }}>{item.title}</p>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Ecosystem density callout */}
          <div style={{
            marginTop: 40,
            background: "#FFFDF7",
            border: "2px solid #1A1A1A",
            borderRadius: 20,
            padding: "32px 36px",
            boxShadow: "4px 4px 0px #6B4EFF",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
            textAlign: "center",
          }}>
            {[
              { value: "50+", label: "VC 사무실" },
              { value: "200+", label: "스타트업 오피스" },
              { value: "30+", label: "코워킹 스페이스" },
              { value: "10분", label: "삼성·선릉 테헤란로" },
            ].map((d) => (
              <div key={d.label}>
                <p style={{ fontSize: 28, fontWeight: 800, color: "#6B4EFF", lineHeight: 1, marginBottom: 6 }}>{d.value}</p>
                <p style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              FACILITIES
            </p>
            <h2 className="text-section" style={{ color: "#F5F0E8", marginBottom: 16 }}>
              빌더를 위해 설계된 공간
            </h2>
            <p style={{ fontSize: 17, color: "#888", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
              &ldquo;빌더에게 필요 없는 건 뺐고, 필요한 건 모두 넣었습니다.&rdquo;<br />
              코딩에 집중할 수 있는 개인 공간부터, 팀 미팅, 이벤트까지.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: 24,
          }}>
            {[
              {
                icon: <IconMonitor size={24} />,
                title: "코워킹 스페이스",
                desc: "100평 규모 오픈 플로어. 화이트보드 10대, 대형 스크린 4대, 프로젝터 완비. 자유로운 자리 배치와 팀 프로젝트 공간. 새벽 3시에도 누군가 코딩하고 있는 공간.",
                color: "#6B4EFF",
              },
              {
                icon: <IconBed size={24} />,
                title: "개인 룸",
                desc: "1인 1실 원칙. 퀸사이즈 침대, 개인 데스크, 수납장, 에어컨 완비. 방음 설계로 프라이버시 보장. 충분한 수면이 최고의 생산성입니다.",
                color: "#FF6B35",
              },
              {
                icon: <IconUsers size={24} />,
                title: "미팅룸 & 통화 부스",
                desc: "6인 미팅룸 3개, 4인 미팅룸 2개, 1인 통화 부스 4개. 방음 완비. 멘토 미팅, 투자자 콜, 팀 회의를 위한 프로페셔널 공간.",
                color: "#FFD166",
              },
              {
                icon: <IconLayout size={24} />,
                title: "이벤트 라운지",
                desc: "50인 수용 다목적 공간. 파이어사이드 챗, 해커톤, 데모데이, 영화 감상회까지. 매주 최소 2회 커뮤니티 이벤트 진행.",
                color: "#2D6A4F",
              },
              {
                icon: <IconUtensils size={24} />,
                title: "공용 주방 & 다이닝",
                desc: "전문 셰프가 준비하는 3끼 식사 제공. 아침은 건강식, 점심은 도시락 또는 강남 맛집 탐방, 저녁은 팀 디너. 바리스타급 커피 머신, 음료·간식 24시간 비치.",
                color: "#E76F51",
              },
              {
                icon: <IconWifi size={24} />,
                title: "기가인터넷 & IT 인프라",
                desc: "기가비트 유선 + Wi-Fi 6E 듀얼 백본. 개인 모니터 대여, 외장 GPU 서버, 클라우드 크레딧 제공. 빌더에게 필요한 모든 기술 인프라.",
                color: "#6B4EFF",
              },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#FFFDF7",
                border: "2px solid #F5F0E8",
                borderRadius: 20,
                padding: "32px 28px",
                boxShadow: `4px 4px 0px ${item.color}`,
              }}>
                <IconBox color={item.color} boxSize={44} borderRadius={12}>
                  {item.icon}
                </IconBox>
                <h3 style={{ fontSize: 19, fontWeight: 800, marginTop: 16, marginBottom: 12, letterSpacing: "-0.02em" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Builder's Day */}
      <section className="section-padding" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              A BUILDER&apos;S DAY
            </p>
            <h2 className="text-section" style={{ marginBottom: 16 }}>
              빌더의 하루
            </h2>
            <p style={{ fontSize: 17, color: "#555", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
              Vibers House에서의 평범한 하루. 하지만 결과는 결코 평범하지 않습니다.
            </p>
          </div>

          {(() => {
            const schedule: { time: string; title: string; desc: string; icon: React.ReactNode; color: string }[] = [
              { time: "07:30", title: "기상 & 아침 식사", desc: "전문 셰프가 준비한 건강한 조식. 신선한 주스, 과일, 따뜻한 식사로 하루를 시작합니다. 얼리버드는 옥상에서 명상이나 조깅으로 리프레시.", icon: <IconSun size={20} />, color: "#FFD166" },
              { time: "09:00", title: "모닝 스탠드업", desc: "15분 스탠드업 미팅. 어제 한 일, 오늘 할 일, 막힌 점을 공유합니다. 누군가의 막힌 점이 다른 누군가에게는 이미 해결한 문제일 수 있습니다.", icon: <IconMic size={20} />, color: "#6B4EFF" },
              { time: "09:30", title: "딥워크 타임 (오전)", desc: "집중 코딩·설계·리서치의 시간. 코워킹 스페이스의 '사일런트 존'에서 방해 없이 몰입합니다. 슬랙 알림 OFF, 헤드폰 ON.", icon: <IconCode size={20} />, color: "#2D6A4F" },
              { time: "12:00", title: "점심 & 네트워킹 런치", desc: "동료 빌더들과 강남 맛집 탐방. 매주 금요일은 외부 게스트 초청 런치 — VC 파트너, 유니콘 CTO, 업계 리더와 격의 없는 대화.", icon: <IconUtensils size={20} />, color: "#FF6B35" },
              { time: "13:30", title: "멘토 세션 / 워크숍", desc: "주 2회 전담 멘토와 1:1 딥다이브. 주 1회 기술·비즈니스 워크숍 (최근: 'AI 에이전트 아키텍처', '시드 라운드 피칭'). 나머지 날은 자유 빌딩.", icon: <IconTarget size={20} />, color: "#6B4EFF" },
              { time: "15:00", title: "오후 빌딩 & 코드 리뷰", desc: "동료와 페어 프로그래밍, 코드 리뷰, 디자인 크리틱. 혼자 3일 걸릴 문제를 1시간에 해결합니다. 라운지에서 화이트보드 세션.", icon: <IconTool size={20} />, color: "#FF6B35" },
              { time: "18:30", title: "저녁 식사 & 커뮤니티 타임", desc: "셰프의 저녁 식사 후 커뮤니티 이벤트. 월요일 파이어사이드 챗, 수요일 해커톤, 금요일 데모 프라이데이. 화·목은 자유 시간.", icon: <IconMoon size={20} />, color: "#6B4EFF" },
              { time: "21:00", title: "나이트 세션 (선택)", desc: "영감이 찾아오는 밤. 24시간 개방된 코워킹에서 뜻이 맞는 동료와 새벽 코딩. 최고의 아이디어는 대부분 이 시간에 탄생합니다.", icon: <IconCpu size={20} />, color: "#FF6B35" },
            ];
            return schedule.map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: 20, alignItems: "flex-start",
                padding: "24px 0",
                borderBottom: i < schedule.length - 1 ? "1.5px solid #C8C3B8" : "none",
              }}>
                <IconBox color={item.color} boxSize={48} borderRadius={12}>
                  {item.icon}
                </IconBox>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#FF6B35", marginBottom: 4 }}>{item.time}</p>
                  <p style={{ fontSize: 18, fontWeight: 800, marginBottom: 6, letterSpacing: "-0.02em" }}>{item.title}</p>
                  <p style={{ color: "#555", fontSize: 15, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ));
          })()}
        </div>
      </section>

      {/* Tracks */}
      <section className="section-padding" style={{ background: "#EDE8DC" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              TWO TRACKS
            </p>
            <h2 className="text-section">두 개의 트랙, 하나의 커뮤니티</h2>
            <p style={{ fontSize: 17, color: "#555", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.75 }}>
              관심 분야에 따라 전문화된 트랙을 선택하세요.
              트랙은 다르지만 하나의 지붕 아래에서 매일 만나고, 서로 배웁니다.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                org: "Hashed",
                track: "AI · Web3 트랙",
                count: "10명",
                desc: "차세대 인터넷을 설계하는 빌더를 위한 트랙. Hashed 포트폴리오 100개+ 기업 네트워크, Web3 전문 멘토링, 토큰 이코노미 설계 지원을 제공합니다.",
                items: [
                  "AI 에이전트 & 바이브코딩",
                  "탈중앙화 앱(dApp) & 프로토콜",
                  "블록체인 인프라 & 레이어2",
                  "토큰 이코노미 & DeFi 설계",
                  "NFT · GameFi · 소셜 프로토콜",
                ],
                color: "#6B4EFF",
              },
              {
                org: "NEXON",
                track: "게임 · 인터랙티브 트랙",
                count: "10명",
                desc: "놀이의 미래를 만드는 빌더를 위한 트랙. NEXON의 30년 게임 개발 노하우, 퍼블리싱 인프라, 라이브 서비스 운영 경험을 직접 전수받습니다.",
                items: [
                  "게임 개발 & 시스템 디자인",
                  "인터랙티브 콘텐츠 & 메타버스",
                  "Unity / Unreal Engine 심화",
                  "라이브 서비스 & 커뮤니티 운영",
                  "AI 기반 게임 시스템 & 프로시저럴",
                ],
                color: "#FF6B35",
              },
            ].map((t) => (
              <div
                key={t.org}
                style={{
                  background: "#FFFDF7",
                  border: "2px solid #1A1A1A",
                  borderRadius: 20,
                  padding: "40px 36px",
                  boxShadow: `5px 5px 0px ${t.color}`,
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: t.color,
                    letterSpacing: "0.06em",
                    marginBottom: 8,
                  }}
                >
                  {t.org}
                </p>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {t.track}
                </h3>
                <p style={{ fontSize: 14, fontWeight: 700, color: t.color, marginBottom: 16 }}>
                  {t.count} 선발
                </p>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
                  {t.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {t.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 15,
                        color: "#555",
                        padding: "10px 0",
                        borderBottom: "1px solid #EDE8DC",
                        lineHeight: 1.75,
                        paddingLeft: 16,
                        position: "relative",
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: t.color }}>●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 입주 조건 & 비용 */}
      <section className="section-padding" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              COST & CONDITIONS
            </p>
            <h2 className="text-section" style={{ marginBottom: 16 }}>
              투명한 입주 조건
            </h2>
            <p style={{ fontSize: 17, color: "#555", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
              돈 때문에 빌딩을 포기하는 일은 없어야 합니다.
              Vibers House는 선발된 빌더에게 모든 비용을 지원합니다.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: 24,
            marginBottom: 48,
          }}>
            <div style={{
              background: "#FFFDF7",
              border: "2px solid #1A1A1A",
              borderRadius: 20,
              padding: "36px 32px",
              boxShadow: "5px 5px 0px #2D6A4F",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <IconBox color="#2D6A4F" boxSize={36} borderRadius={10}>
                  <IconCheck size={18} />
                </IconBox>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#2D6A4F" }}>
                  Vibers가 지원하는 것
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "개인 룸 숙소 (6개월)",
                  "3끼 식사 제공 (전문 셰프 + 주방)",
                  "코워킹 스페이스 24시간 이용",
                  "기가비트 인터넷 · Wi-Fi 6E",
                  "월 생활비 지원금 (장학금)",
                  "멘토링 · 워크숍 · 이벤트 전체",
                  "클라우드 크레딧 & 개발 도구",
                  "데모데이 참여 · 투자 연결",
                ].map((item) => (
                  <li key={item} style={{
                    fontSize: 15, color: "#555", lineHeight: 1.75,
                    padding: "10px 0", borderBottom: "1px solid #EDE8DC",
                    paddingLeft: 24, position: "relative",
                  }}>
                    <span style={{ position: "absolute", left: 0, color: "#2D6A4F", fontWeight: 700 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: "#FFFDF7",
              border: "2px solid #1A1A1A",
              borderRadius: 20,
              padding: "36px 32px",
              boxShadow: "5px 5px 0px #FF6B35",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <IconBox color="#FF6B35" boxSize={36} borderRadius={10}>
                  <IconClipboard size={18} />
                </IconBox>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#FF6B35" }}>
                  입주 자격 요건
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "만 18세 이상, 국적 무관",
                  "프로덕트를 직접 만들어 본 경험 (포트폴리오 필수)",
                  "6개월 풀타임 거주 가능 (겸직 불가)",
                  "팀 협업 및 커뮤니티 활동 참여 의지",
                  "매주 진행 상황 공유 (주간 데모)",
                  "프로그램 종료 후 Alumni 네트워크 참여",
                  "데모데이 발표 참여 필수",
                  "한국어 또는 영어 소통 가능",
                ].map((item) => (
                  <li key={item} style={{
                    fontSize: 15, color: "#555", lineHeight: 1.75,
                    padding: "10px 0", borderBottom: "1px solid #EDE8DC",
                    paddingLeft: 24, position: "relative",
                  }}>
                    <span style={{ position: "absolute", left: 0, color: "#FF6B35" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            background: "#1A1A1A",
            borderRadius: 20,
            padding: "32px 36px",
            textAlign: "center",
          }}>
            <p style={{ fontSize: 24, fontWeight: 800, color: "#F5F0E8", marginBottom: 8 }}>
              참가비 ₩0 · 입주비 ₩0 · 보증금 ₩0
            </p>
            <p style={{ fontSize: 15, color: "#888", lineHeight: 1.75 }}>
              지원자에게 어떤 금전적 부담도 요구하지 않습니다. 지분 요구도 없습니다.
              오직 당신의 실력과 열정만으로 선발됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "#EDE8DC" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              HOW TO JOIN
            </p>
            <h2 className="text-section">
              입주까지의 여정
            </h2>
          </div>
          {[
            { phase: "01", title: "웨이팅 리스트 등록", period: "지금 바로 등록", desc: "이메일을 남겨주세요. 모집 시작 시 가장 먼저 알려드립니다. 등록자에게 우선 심사 기회가 주어집니다." },
            { phase: "02", title: "지원서 제출", period: "포트폴리오 + 프로젝트 + 동기", desc: "무엇을 만들었는지, 왜 Vibers House에 오고 싶은지, 6개월 동안 무엇을 만들 계획인지 알려주세요." },
            { phase: "03", title: "3단계 심사", period: "서류 → 기술 과제 → 면접", desc: "서류 심사(1주), 실전 기술 과제(1주), 그리고 Hashed·NEXON 리더와의 심층 면접(30분). 총 3주 내 결과 발표." },
            { phase: "04", title: "최종 선발 & 입주", period: "20명 선발 → 2주 내 입주", desc: "축하합니다! 강남 Vibers House에 입주하여 6개월간의 집중 빌딩 여정을 시작합니다. 오리엔테이션 포함." },
            { phase: "05", title: "데모데이 & 런칭", period: "6개월 후", desc: "업계 리더 100명+, 투자자 50명+ 앞에서 프로젝트 발표. 시드 투자와 후속 프로그램 연결. 졸업 후 Alumni 네트워크 합류." },
          ].map((step) => (
            <div
              key={step.phase}
              style={{
                display: "flex",
                gap: 32,
                alignItems: "baseline",
                padding: "24px 0",
                borderBottom: "1.5px solid #C8C3B8",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#FF6B35",
                  letterSpacing: "0.06em",
                  minWidth: 36,
                  flexShrink: 0,
                }}
              >
                {step.phase}
              </span>
              <div>
                <p style={{ fontSize: 17, fontWeight: 800, marginBottom: 4, letterSpacing: "-0.01em" }}>
                  {step.title}
                </p>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#888", marginBottom: 6 }}>{step.period}</p>
                <p style={{ fontSize: 15, color: "#555", lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ background: "#1A1A1A", textAlign: "center" }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            className="text-section"
            style={{ color: "#F5F0E8", marginBottom: 20 }}
          >
            다음 기수의 자리,<br />지금 확보하세요.
          </h2>
          <p
            style={{
              color: "#888",
              fontSize: 16,
              lineHeight: 1.75,
              marginBottom: 12,
            }}
          >
            웨이팅 리스트 등록자에게 모집 시작 시 가장 먼저 안내하며,<br />
            선착순 등록자에게 우선 심사 기회를 제공합니다.
          </p>
          <p style={{ color: "#FF6B35", fontSize: 14, fontWeight: 700, marginBottom: 36, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <IconZap size={14} />
            매 기수 10:1 이상의 경쟁률 — 빠른 등록이 유리합니다
          </p>
          <Link
            href="/#waitlist"
            className="btn-primary"
            style={{
              background: "#FF6B35",
              borderColor: "#FF6B35",
              color: "#fff",
              padding: "16px 40px",
              fontSize: 16,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <IconRocket size={16} />
            웨이팅 등록하기
          </Link>
        </div>
      </section>
    </main>
  );
}
