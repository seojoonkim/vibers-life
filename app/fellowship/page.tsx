"use client";

import Link from "next/link";

/* ── Inline SVG Icons (replacing all emojis) ── */
function SeedlingIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V10" />
      <path d="M6 13c0-3.5 2.5-6 6-6s6 2.5 6 6" />
      <path d="M12 4c-2 0-4 1-5 3" />
      <path d="M12 4c2 0 4 1 5 3" />
    </svg>
  );
}

function BriefcaseIcon({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function GamepadIcon({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="15" cy="13" r="1" />
      <circle cx="18" cy="11" r="1" />
      <rect x="2" y="6" width="20" height="12" rx="5" ry="5" />
    </svg>
  );
}

function StarIcon({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function UserIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function FlameIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function ChatIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ClockIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LinkChainIcon({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function WalletIcon({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
      <circle cx="18" cy="15" r="1.5" />
    </svg>
  );
}

function MicIcon({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="11" rx="3" ry="3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  );
}

function GlobeIcon({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ZapIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function CheckIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ── Page ── */
export default function FellowshipPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="section-padding"
        style={{
          background: "#F5F0E8",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: -100, right: -80,
          width: 450, height: 450,
          background: "radial-gradient(circle, rgba(141,198,63,0.1) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#FFFDF7", border: "2px solid #1A1A1A",
            borderRadius: 50, padding: "8px 18px",
            fontSize: 13, fontWeight: 700, marginBottom: 36,
            boxShadow: "3px 3px 0px #2D6A4F",
          }}>
            <SeedlingIcon size={16} color="#2D6A4F" />
            <span>Vibers Fellowship</span>
          </div>

          <h1 className="text-hero" style={{ marginBottom: 24, maxWidth: 750 }}>
            아직 세상이 모르는<br />
            당신의 잠재력에,<br />
            먼저 투자합니다.
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
            학벌도, 경력도, 나이도 묻지 않습니다.
            오직 &ldquo;무엇을 만들 수 있는가&rdquo;만 봅니다.
            6개월간의 집중 지원으로, 아이디어를 실제 프로덕트로
            세상에 내보내는 여정을 함께합니다.
          </p>
          <p style={{ fontSize: 16, color: "#888", lineHeight: 1.75, marginBottom: 40, maxWidth: 620 }}>
            Hashed x NEXON이 자금, 멘토링, 네트워크, 거주 공간을 모두 제공합니다.
            당신은 오직 만드는 것에만 집중하세요.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/#waitlist" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <SeedlingIcon size={16} color="#fff" />
              펠로우십 지원하기
            </Link>
            <Link href="/house" className="btn-secondary">
              Vibers House 둘러보기
            </Link>
          </div>
          </div>
          <div style={{ flexShrink: 0, width: "100%", maxWidth: 440, minWidth: "min(440px, 100%)" }}>
            <img
              src="/images/fellowship-badge.png"
              alt="Vibers Fellowship"
              style={{ width: "100%", borderRadius: 20, border: "3px solid #1A1A1A", boxShadow: "6px 6px 0px #2D6A4F" }}
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
            { num: "6개월", label: "성장 프로그램", color: "#2D6A4F" },
            { num: "20명", label: "기수당 선발", color: "#6B4EFF" },
            { num: "3단계", label: "체계적 성장 트랙", color: "#FF6B35" },
            { num: "100%", label: "전액 지원 (비용 ₩0)", color: "#FFD166" },
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
              <p style={{ fontSize: 36, fontWeight: 800, color: "#1A1A1A", lineHeight: 1, marginBottom: 10, letterSpacing: "-0.03em" }}>
                {s.num}
              </p>
              <p style={{ fontSize: 14, color: "#888", fontWeight: 600 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3단계 성장 트랙 */}
      <section className="section-padding" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              GROWTH TRACK
            </p>
            <h2 className="text-section" style={{ color: "#F5F0E8", marginBottom: 16 }}>
              3단계 성장 트랙
            </h2>
            <p style={{ fontSize: 17, color: "#888", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
              6개월을 세 단계로 나누어, 각 단계마다 명확한 목표와
              맞춤형 지원을 제공합니다. 방황 없이, 방향을 잡고 달립니다.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: 24,
          }}>
            {[
              {
                phase: "PHASE 1",
                period: "1-2개월",
                title: "온보딩 — 네트워크 형성, 아이디어 탐색",
                subtitle: "방향을 잡는 시간",
                color: "#FFD166",
                items: [
                  { label: "오리엔테이션 & 팀 빌딩", desc: "프로그램 구조 안내, 동료 펠로우 소개, 전담 멘토 매칭, 6개월 목표 설정 워크숍" },
                  { label: "아이디어 스프린트", desc: "3주간 3개의 프로토타입을 빠르게 만들어보는 탐색 기간. 실패를 두려워하지 않는 실험의 시간" },
                  { label: "기술 부트캠프", desc: "AI, Web3, 게임 개발 등 트랙별 핵심 기술 집중 교육. Hashed 포트폴리오 기업 CTO 직강" },
                  { label: "1:1 방향 설정", desc: "멘토와 함께 6개월 로드맵 수립, 프로젝트 방향 확정. 주간 체크인 리듬 시작" },
                ],
                outcome: "결과물: 프로젝트 방향 확정 + 첫 프로토타입 완성",
              },
              {
                phase: "PHASE 2",
                period: "3-4개월",
                title: "빌딩 — MVP 개발, 주간 리뷰",
                subtitle: "만드는 시간",
                color: "#FF6B35",
                items: [
                  { label: "풀타임 빌딩", desc: "확정된 방향으로 MVP를 집중 개발. 매주 금요일 데모에서 진행 상황을 동료와 멘토에게 공유" },
                  { label: "기술 멘토링 심화", desc: "아키텍처 리뷰, 코드 리뷰, 성능 최적화. NEXON 시니어 개발자의 실전 수준 기술 지도" },
                  { label: "유저 테스트 & 이터레이션", desc: "실사용자 대상 알파/베타 테스트 진행. 데이터 기반 피드백으로 매주 빠르게 개선" },
                  { label: "중간 데모데이", desc: "내부 데모데이에서 진행 상황 발표. 멘토와 동료의 날카로운 피드백으로 방향 재점검" },
                ],
                outcome: "결과물: 실사용자가 있는 베타 버전 완성",
              },
              {
                phase: "PHASE 3",
                period: "5-6개월",
                title: "런칭 — 실제 유저, 투자 준비",
                subtitle: "세상에 내보내는 시간",
                color: "#6B4EFF",
                items: [
                  { label: "프로덕트 폴리싱", desc: "UX 개선, 버그 수정, 성능 최적화. 실제 유저가 매일 사용할 수 있는 런칭 수준으로 완성도 향상" },
                  { label: "피칭 트레이닝", desc: "Hashed VC 파트너 출신 코치와 투자 피칭 집중 훈련. 스토리텔링, 재무 모델, Q&A 대비" },
                  { label: "그로스 & 마케팅", desc: "프로덕트 런칭 마케팅 전략 수립. 프레스킷, 랜딩 페이지, 소셜 미디어 캠페인 실행" },
                  { label: "최종 데모데이", desc: "40명 이상의 투자자, 업계 리더 앞에서 최종 발표. 실제 투자 검토와 미디어 커버리지" },
                ],
                outcome: "결과물: 프로덕트 정식 런칭 + 시드 투자 기회",
              },
            ].map((track) => (
              <div key={track.phase} style={{
                background: "#FFFDF7",
                border: "2px solid #F5F0E8",
                borderRadius: 20,
                padding: "36px 32px",
                boxShadow: `5px 5px 0px ${track.color}`,
                display: "flex",
                flexDirection: "column",
              }}>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: track.color, letterSpacing: "0.08em" }}>
                    {track.phase} · {track.period}
                  </span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, marginTop: 8, marginBottom: 4, letterSpacing: "-0.02em" }}>
                    {track.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#888" }}>{track.subtitle}</p>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                  {track.items.map((item) => (
                    <li key={item.label} style={{
                      padding: "12px 0",
                      borderBottom: "1px solid #EDE8DC",
                    }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 4 }}>{item.label}</p>
                      <p style={{ fontSize: 14, color: "#555", lineHeight: 1.65 }}>{item.desc}</p>
                    </li>
                  ))}
                </ul>

                <div style={{
                  marginTop: 20,
                  padding: "14px 16px",
                  background: "#F5F0E8",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#1A1A1A",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}>
                  <CheckIcon size={16} color="#2D6A4F" />
                  {track.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 멘토십 */}
      <section className="section-padding" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              MENTORSHIP
            </p>
            <h2 className="text-section" style={{ marginBottom: 16 }}>
              당신을 이끌어 줄 멘토들
            </h2>
            <p style={{ fontSize: 17, color: "#555", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
              교과서가 아니라 전장에서 배웁니다. Hashed VC 파트너, NEXON 임원,
              업계 최고의 전문가가 당신의 전담 멘토가 됩니다.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: 24,
          }}>
            {[
              {
                icon: <BriefcaseIcon size={28} color="#6B4EFF" />,
                title: "Hashed VC 파트너 1:1",
                desc: "Web3, AI 분야 최전선의 투자자들이 전담 멘토로 배정됩니다. 수백 개 프로젝트를 검토하고 투자한 경험으로, 프로덕트-마켓 핏, 토큰 이코노미, 펀드레이징 전략을 직접 지도합니다.",
                details: "주 1회 1:1 세션 / 포트폴리오 기업 네트워크 연결 / 투자 파이프라인 직접 소개",
                color: "#6B4EFF",
              },
              {
                icon: <GamepadIcon size={28} color="#FF6B35" />,
                title: "NEXON 임원 월간 세션",
                desc: "메이플스토리, 던전앤파이터 등 글로벌 히트작을 만든 레전드들의 월간 마스터클래스. 게임 디자인, 라이브 서비스 운영, 대규모 시스템 아키텍처를 전수합니다.",
                details: "월 1회 임원 그룹 세션 / NEXON 내부 기술 세미나 참여 / 사내 인프라 지원",
                color: "#FF6B35",
              },
              {
                icon: <StarIcon size={28} color="#2D6A4F" />,
                title: "업계 전문가 특강",
                desc: "유니콘 창업자, 빅테크 CTO, 디자인 리더, 그로스 해커 등 50명 이상의 전문가 풀에서 필요한 분야별로 맞춤 매칭합니다.",
                details: "월 2회 파이어사이드 챗 / 필요시 수시 1:1 매칭 / 외부 컨퍼런스 초대",
                color: "#2D6A4F",
              },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 20,
                padding: "36px 28px",
                boxShadow: `4px 4px 0px ${item.color}`,
              }}>
                {item.icon}
                <h3 style={{ fontSize: 19, fontWeight: 800, marginTop: 12, marginBottom: 12, letterSpacing: "-0.02em" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75, marginBottom: 16 }}>{item.desc}</p>
                <p style={{
                  fontSize: 13, fontWeight: 700, color: item.color,
                  background: "#F5F0E8", borderRadius: 8,
                  padding: "8px 12px", display: "inline-block",
                  lineHeight: 1.6,
                }}>
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          {/* 멘토링 방식 */}
          <div style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}>
            {[
              { title: "주 2회 1:1 세션", desc: "전담 멘토와 30분 딥다이브. 기술, 전략, 고민 무엇이든.", icon: <UserIcon size={24} color="#1A1A1A" /> },
              { title: "월 2회 파이어사이드 챗", desc: "업계 리더 초청 강연. 질의응답과 네트워킹.", icon: <FlameIcon size={24} color="#FF6B35" /> },
              { title: "24/7 슬랙 채널", desc: "멘토와 동료에게 실시간 질문. 막힘 없이 전진.", icon: <ChatIcon size={24} color="#6B4EFF" /> },
              { title: "오피스 아워", desc: "매주 금요일 오후, 멘토 자유 상담 시간.", icon: <ClockIcon size={24} color="#2D6A4F" /> },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 14,
                padding: "24px 20px",
                boxShadow: "3px 3px 0px #1A1A1A",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                {item.icon}
                <p style={{ fontSize: 15, fontWeight: 800, marginTop: 10, marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 데모데이 */}
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
                DEMO DAY
              </p>
              <h2 className="text-section" style={{ color: "#F5F0E8", marginBottom: 24 }}>
                6개월의 결실,<br />무대 위에서 증명하다
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#999", marginBottom: 24 }}>
                Vibers 데모데이는 단순한 발표회가 아닙니다.
                40명 이상의 VC 파트너와 투자 심사역이 직접 참석하여
                실제 투자 검토를 진행하는 실전 무대입니다.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#999", marginBottom: 24 }}>
                5분의 피칭, 5분의 Q&A. 그 10분이 당신의 프로젝트를
                다음 레벨로 끌어올립니다. 데모데이 당일부터
                후속 투자 미팅이 시작되며, 주요 미디어 커버리지를 통해
                프로덕트가 세상에 알려집니다.
              </p>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}>
              {[
                { num: "40+", label: "참석 투자자", color: "#6B4EFF" },
                { num: "70%", label: "후속 투자 미팅 전환율", color: "#FF6B35" },
                { num: "10분", label: "피칭 + Q&A", color: "#FFD166" },
                { num: "15+", label: "미디어 보도", color: "#2D6A4F" },
              ].map((s) => (
                <div key={s.label} style={{
                  background: "#FFFDF7",
                  border: "2px solid #F5F0E8",
                  borderRadius: 16,
                  padding: "24px 16px",
                  boxShadow: `3px 3px 0px ${s.color}`,
                  textAlign: "center",
                }}>
                  <p style={{ fontSize: 28, fontWeight: 800, color: "#1A1A1A", lineHeight: 1, marginBottom: 8, letterSpacing: "-0.03em" }}>
                    {s.num}
                  </p>
                  <p style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 데모데이 준비 과정 */}
          <div style={{ marginTop: 64 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#F5F0E8", marginBottom: 32, textAlign: "center" }}>
              데모데이까지의 준비
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}>
              {[
                { week: "D-8주", title: "피칭 덱 작성", desc: "스토리, 문제 정의, 솔루션, 비즈니스 모델, 팀 소개를 구조화합니다." },
                { week: "D-4주", title: "리허설 시작", desc: "멘토 앞에서 주 2회 리허설. 날카로운 피드백으로 계속 개선합니다." },
                { week: "D-2주", title: "모의 데모데이", desc: "실제 환경과 동일한 조건으로 모의 발표. 외부 심사위원 피드백." },
                { week: "D-Day", title: "본무대", desc: "40명 이상의 투자자 앞에서 당신의 프로덕트와 비전을 증명합니다." },
              ].map((item) => (
                <div key={item.week} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: "24px 20px",
                }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#FF6B35", marginBottom: 8 }}>{item.week}</p>
                  <p style={{ fontSize: 16, fontWeight: 800, color: "#F5F0E8", marginBottom: 8 }}>{item.title}</p>
                  <p style={{ fontSize: 14, color: "#888", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 미디어 커버리지 */}
          <div style={{
            marginTop: 48,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 18,
            padding: "32px",
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#F5F0E8", marginBottom: 16 }}>
              미디어 커버리지
            </h3>
            <p style={{ fontSize: 15, color: "#999", lineHeight: 1.75, marginBottom: 20 }}>
              데모데이 전후로 주요 미디어에 펠로우들의 프로덕트와 스토리가 보도됩니다.
              프레스킷 준비부터 기자 네트워킹까지, 미디어 노출 전략을 전담 지원합니다.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["TechCrunch Korea", "플래텀", "벤처스퀘어", "블로터", "디스트리트"].map((m) => (
                <span key={m} style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8,
                  padding: "6px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#ccc",
                }}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni 네트워크 */}
      <section className="section-padding" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
              ALUMNI NETWORK
            </p>
            <h2 className="text-section" style={{ marginBottom: 16 }}>
              졸업이 끝이 아니라,<br />진짜 시작입니다
            </h2>
            <p style={{ fontSize: 17, color: "#555", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
              Vibers 펠로우십은 6개월로 끝나지 않습니다.
              졸업 후에도 평생 함께하는 빌더 네트워크의 일원이 됩니다.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
            gap: 24,
          }}>
            {[
              {
                icon: <LinkChainIcon size={28} color="#6B4EFF" />,
                title: "평생 커뮤니티 멤버십",
                desc: "Vibers Alumni 전용 슬랙, 분기별 동문 모임, 연간 리트릿. 기수가 다른 동문들과도 자연스럽게 연결됩니다. 졸업 후에도 Vibers House 이용 가능.",
              },
              {
                icon: <WalletIcon size={28} color="#FF6B35" />,
                title: "우선 투자 검토",
                desc: "Hashed와 NEXON 투자 파이프라인에 Alumni 우선 추천. 졸업 후 새로운 프로젝트를 시작하거나 후속 라운드를 진행할 때 먼저 검토합니다.",
              },
              {
                icon: <MicIcon size={28} color="#2D6A4F" />,
                title: "후배 기수 멘토",
                desc: "다음 기수의 멘토, 게스트 스피커, 데모데이 심사위원으로 참여합니다. 받은 것을 돌려주며 커뮤니티를 함께 키웁니다.",
              },
              {
                icon: <GlobeIcon size={28} color="#FFD166" />,
                title: "글로벌 네트워크",
                desc: "Hashed 포트폴리오 100개 이상 기업, NEXON 글로벌 네트워크, Alumni 스타트업 간 협업 기회. 전 세계에 동문이 있습니다.",
              },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 18,
                padding: "32px 24px",
                boxShadow: "4px 4px 0px #1A1A1A",
              }}>
                {item.icon}
                <h3 style={{ fontSize: 18, fontWeight: 800, marginTop: 12, marginBottom: 10, letterSpacing: "-0.02em" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Alumni 혜택 요약 */}
          <div style={{
            marginTop: 48,
            background: "#FFFDF7",
            border: "2px solid #1A1A1A",
            borderRadius: 18,
            padding: "32px",
            boxShadow: "4px 4px 0px #2D6A4F",
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 20 }}>
              Alumni 혜택 한눈에 보기
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
            }}>
              {[
                "평생 Alumni 슬랙 채널",
                "분기별 동문 네트워킹",
                "연간 Alumni 리트릿",
                "Hashed 투자 우선 검토",
                "후배 기수 멘토 참여",
                "Vibers House 이용권",
              ].map((benefit) => (
                <div key={benefit} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 0",
                }}>
                  <CheckIcon size={16} color="#2D6A4F" />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 이런 사람을 찾습니다 */}
      <section className="section-padding" style={{ background: "#EDE8DC" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 className="text-section">이런 사람을 찾습니다</h2>
            <p style={{ fontSize: 17, color: "#555", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.75 }}>
              완벽한 이력서가 아니라, 불완전하지만 뜨거운 열정을 가진 빌더.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
            gap: 24,
          }}>
            {[
              { num: "01", title: "만드는 사람", desc: "아이디어에서 멈추지 않고 실제로 프로덕트를 만들어 본 사람. 완성도보다 실행력을 봅니다.", color: "#6B4EFF" },
              { num: "02", title: "깊이 파는 사람", desc: "하나의 문제에 밤새 몰입할 수 있는 사람. 넓은 지식보다 깊은 탐구를 중시합니다.", color: "#FF6B35" },
              { num: "03", title: "함께 하는 사람", desc: "독불장군이 아닌, 동료의 코드를 리뷰하고, 밤새 토론하고, 함께 만드는 사람.", color: "#2D6A4F" },
              { num: "04", title: "성장하는 사람", desc: "어제보다 오늘 더 나은 사람. 현재 실력보다 성장 속도와 방향성이 중요합니다.", color: "#FFD166" },
            ].map((item) => (
              <div key={item.num} style={{
                background: "#FFFDF7",
                border: "2px solid #1A1A1A",
                borderRadius: 18,
                padding: "32px 24px",
                boxShadow: `4px 4px 0px ${item.color}`,
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: item.color, letterSpacing: "0.06em" }}>
                  {item.num}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginTop: 12, marginBottom: 10, letterSpacing: "-0.02em" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
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
            당신의 잠재력,<br />우리가 먼저 믿겠습니다.
          </h2>
          <p
            style={{
              color: "#888",
              fontSize: 16,
              lineHeight: 1.75,
              marginBottom: 12,
            }}
          >
            웨이팅 리스트 등록자에게 모집 시작 시 가장 먼저 안내합니다.<br />
            선착순 등록자에게 우선 심사 기회를 제공합니다.
          </p>
          <p style={{ color: "#FF6B35", fontSize: 14, fontWeight: 700, marginBottom: 36, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <ZapIcon size={14} color="#FF6B35" />
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
            <SeedlingIcon size={16} color="#fff" />
            펠로우십 지원하기
          </Link>
        </div>
      </section>
    </main>
  );
}
