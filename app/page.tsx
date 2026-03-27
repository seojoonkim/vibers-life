"use client";

import { useState } from "react";

// SVG Icons
const PixelStar = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="0" width="2" height="2" fill="#00FF88"/>
    <rect x="7" y="14" width="2" height="2" fill="#00FF88"/>
    <rect x="0" y="7" width="2" height="2" fill="#00FF88"/>
    <rect x="14" y="7" width="2" height="2" fill="#00FF88"/>
    <rect x="5" y="2" width="2" height="2" fill="#00FF88"/>
    <rect x="9" y="2" width="2" height="2" fill="#00FF88"/>
    <rect x="2" y="5" width="2" height="2" fill="#00FF88"/>
    <rect x="12" y="5" width="2" height="2" fill="#00FF88"/>
    <rect x="2" y="9" width="2" height="2" fill="#00FF88"/>
    <rect x="12" y="9" width="2" height="2" fill="#00FF88"/>
    <rect x="5" y="12" width="2" height="2" fill="#00FF88"/>
    <rect x="9" y="12" width="2" height="2" fill="#00FF88"/>
    <rect x="6" y="4" width="4" height="8" fill="#00FF88"/>
    <rect x="4" y="6" width="8" height="4" fill="#00FF88"/>
  </svg>
);

const PixelHouse = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="2" width="4" height="4" fill="#8B5CF6"/>
    <rect x="10" y="6" width="4" height="4" fill="#8B5CF6"/>
    <rect x="18" y="6" width="4" height="4" fill="#8B5CF6"/>
    <rect x="6" y="10" width="4" height="4" fill="#8B5CF6"/>
    <rect x="10" y="10" width="12" height="4" fill="#A78BFA"/>
    <rect x="22" y="10" width="4" height="4" fill="#8B5CF6"/>
    <rect x="4" y="14" width="24" height="16" fill="#0F0F1A"/>
    <rect x="4" y="14" width="24" height="2" fill="#8B5CF6"/>
    <rect x="13" y="20" width="6" height="10" fill="#8B5CF6"/>
    <rect x="6" y="18" width="6" height="6" fill="#00FF88" opacity="0.6"/>
    <rect x="20" y="18" width="6" height="6" fill="#00FF88" opacity="0.6"/>
  </svg>
);

const PixelRocket = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="2" width="4" height="2" fill="#8B5CF6"/>
    <rect x="8" y="4" width="8" height="2" fill="#8B5CF6"/>
    <rect x="8" y="6" width="8" height="8" fill="#A78BFA"/>
    <rect x="6" y="10" width="2" height="4" fill="#8B5CF6"/>
    <rect x="16" y="10" width="2" height="4" fill="#8B5CF6"/>
    <rect x="10" y="14" width="4" height="2" fill="#8B5CF6"/>
    <rect x="10" y="16" width="2" height="2" fill="#00FF88"/>
    <rect x="12" y="16" width="2" height="2" fill="#00FF88"/>
    <rect x="9" y="18" width="2" height="2" fill="#FF6B35"/>
    <rect x="11" y="18" width="2" height="4" fill="#FF6B35"/>
    <rect x="13" y="18" width="2" height="2" fill="#FF6B35"/>
    <rect x="11" y="8" width="2" height="2" fill="#00FF88"/>
  </svg>
);

const PixelController = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="24" height="12" rx="0" fill="#1A1A2E"/>
    <rect x="4" y="6" width="24" height="2" fill="#8B5CF6"/>
    <rect x="4" y="16" width="24" height="2" fill="#8B5CF6"/>
    <rect x="4" y="6" width="2" height="12" fill="#8B5CF6"/>
    <rect x="26" y="6" width="2" height="12" fill="#8B5CF6"/>
    <rect x="8" y="10" width="2" height="4" fill="#00FF88"/>
    <rect x="6" y="12" width="6" height="2" fill="#00FF88"/>
    <rect x="20" y="10" width="2" height="2" fill="#8B5CF6"/>
    <rect x="24" y="12" width="2" height="2" fill="#8B5CF6"/>
    <rect x="22" y="10" width="2" height="2" fill="#00FF88" opacity="0.5"/>
    <rect x="22" y="14" width="2" height="2" fill="#00FF88" opacity="0.5"/>
  </svg>
);

const PixelCoin = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="2" width="8" height="2" fill="#FFD700"/>
    <rect x="6" y="4" width="12" height="2" fill="#FFD700"/>
    <rect x="4" y="6" width="16" height="12" fill="#FFD700"/>
    <rect x="6" y="18" width="12" height="2" fill="#FFD700"/>
    <rect x="8" y="20" width="8" height="2" fill="#FFD700"/>
    <rect x="10" y="6" width="4" height="2" fill="#FFA500"/>
    <rect x="8" y="8" width="2" height="8" fill="#FFA500"/>
    <rect x="10" y="14" width="4" height="2" fill="#FFA500"/>
  </svg>
);

const PixelShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="2" width="8" height="2" fill="#8B5CF6"/>
    <rect x="6" y="4" width="12" height="2" fill="#8B5CF6"/>
    <rect x="4" y="6" width="16" height="2" fill="#8B5CF6"/>
    <rect x="4" y="8" width="16" height="8" fill="#A78BFA"/>
    <rect x="6" y="16" width="12" height="2" fill="#8B5CF6"/>
    <rect x="8" y="18" width="8" height="2" fill="#8B5CF6"/>
    <rect x="10" y="20" width="4" height="2" fill="#8B5CF6"/>
    <rect x="11" y="9" width="2" height="6" fill="#00FF88"/>
    <rect x="9" y="11" width="6" height="2" fill="#00FF88"/>
  </svg>
);

const PixelLightning = () => (
  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="2" width="8" height="2" fill="#00FF88"/>
    <rect x="8" y="4" width="6" height="2" fill="#00FF88"/>
    <rect x="6" y="6" width="6" height="2" fill="#00FF88"/>
    <rect x="6" y="8" width="8" height="2" fill="#00FF88"/>
    <rect x="4" y="10" width="8" height="2" fill="#00FF88"/>
    <rect x="4" y="12" width="6" height="2" fill="#00FF88"/>
    <rect x="2" y="14" width="6" height="2" fill="#00FF88"/>
    <rect x="2" y="16" width="8" height="2" fill="#00FF88"/>
    <rect x="4" y="18" width="6" height="2" fill="#00FF88"/>
    <rect x="6" y="20" width="4" height="2" fill="#00FF88"/>
  </svg>
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen" style={{ background: '#0A0A0F' }}>
      {/* Hero Section */}
      <section
        id="hero"
        className="grid-bg crt hero-pad"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 32px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div className="hero-bg-glow" style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Pixel decorations */}
        <div className="float-deco" style={{ position: 'absolute', top: '15%', left: '10%', animation: 'float 3s ease-in-out infinite' }}>
          <PixelStar />
        </div>
        <div className="float-deco" style={{ position: 'absolute', top: '25%', right: '12%', animation: 'float 4s ease-in-out infinite 1s' }}>
          <PixelStar />
        </div>
        <div className="float-deco" style={{ position: 'absolute', bottom: '20%', left: '8%', animation: 'float 5s ease-in-out infinite 2s' }}>
          <PixelStar />
        </div>

        {/* Badge */}
        <div style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: '10px',
          color: '#00FF88',
          background: 'rgba(0, 255, 136, 0.1)',
          border: '1px solid rgba(0, 255, 136, 0.3)',
          padding: '8px 16px',
          marginBottom: '32px',
          letterSpacing: '2px',
        }}>
          ▶ SEASON 01 — NOW RECRUITING
        </div>

        {/* Main title */}
        <h1
          className="glitch-text"
          style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(28px, 5vw, 56px)',
            color: '#8B5CF6',
            textAlign: 'center',
            lineHeight: '1.4',
            marginBottom: '16px',
            textShadow: '0 0 20px rgba(139,92,246,0.5)',
          }}
        >
          VIBERS
          <br />
          <span style={{ color: '#00FF88', textShadow: '0 0 20px rgba(0,255,136,0.5)' }}>LIFE</span>
        </h1>

        <div style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 'clamp(8px, 1.5vw, 12px)',
          color: '#9090B0',
          textAlign: 'center',
          marginBottom: '40px',
          letterSpacing: '3px',
        }}>
          TOP 1% YOUNG BUILDER FELLOWSHIP
        </div>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: '#C0C0D0',
          textAlign: 'center',
          maxWidth: '600px',
          lineHeight: '1.7',
          marginBottom: '48px',
        }}>
          세상을 바꿀 다음 세대의 빌더를 찾습니다.<br />
          Powered by <span style={{ color: '#8B5CF6', fontWeight: 600 }}>Hashed</span> × <span style={{ color: '#00FF88', fontWeight: 600 }}>NEXON</span>
        </p>

        {/* CTA Buttons */}
        <div className="cta-flex" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="#waitlist"
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '11px',
              color: '#0A0A0F',
              background: '#00FF88',
              padding: '16px 32px',
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.2s',
              boxShadow: '0 0 20px rgba(0,255,136,0.4)',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#00CC6A';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0,255,136,0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#00FF88';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,136,0.4)';
            }}
          >
            ▶ APPLY NOW
          </a>
          <a
            href="#about"
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '11px',
              color: '#8B5CF6',
              background: 'transparent',
              border: '1px solid #8B5CF6',
              padding: '16px 32px',
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.2s',
              boxShadow: '0 0 10px rgba(139,92,246,0.2)',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(139,92,246,0.1)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(139,92,246,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(139,92,246,0.2)';
            }}
          >
            LEARN MORE
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-pixel)',
          fontSize: '8px',
          color: '#5050A0',
          letterSpacing: '2px',
          animation: 'pixel-pulse 2s infinite',
        }}>
          ▼ SCROLL
        </div>
      </section>

      {/* Pixel Divider */}
      <div className="pixel-divider" />

      {/* What is Vibers Life */}
      <section id="about" style={{ padding: '100px 32px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '10px',
            color: '#8B5CF6',
            letterSpacing: '3px',
            marginBottom: '16px',
          }}>
            {"// WHAT_IS_VIBERS_LIFE"}
          </div>
          <h2 style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(18px, 3vw, 28px)',
            color: '#F0F0FF',
            lineHeight: '1.5',
          }}>
            FOR THE ONES WHO<br />
            <span style={{ color: '#00FF88' }}>BUILD FIRST</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '64px',
        }}>
          {[
            {
              icon: <PixelRocket />,
              title: '상위 1% 선발',
              desc: '나이는 숫자. 실력이 전부. 기술, 창의성, 실행력을 갖춘 10-25세 영 빌더들을 엄격한 기준으로 선발합니다.',
              color: '#8B5CF6',
            },
            {
              icon: <PixelController />,
              title: '빌드-퍼스트 문화',
              desc: '말보다 코드. 계획보다 프로토타입. Vibers Life의 펠로우들은 먼저 만들고, 나중에 정제합니다.',
              color: '#00FF88',
            },
            {
              icon: <PixelShield />,
              title: 'World-class 네트워크',
              desc: 'Hashed × NEXON의 글로벌 네트워크에 즉시 접근. 투자자, 멘토, 동료 빌더들이 당신 편입니다.',
              color: '#8B5CF6',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card-scale-glow"
              style={{
                background: '#0F0F1A',
                border: `1px solid rgba(${i % 2 === 1 ? '0,255,136' : '139,92,246'}, 0.2)`,
                padding: '32px',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `rgba(${i % 2 === 1 ? '0,255,136' : '139,92,246'}, 0.6)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `rgba(${i % 2 === 1 ? '0,255,136' : '139,92,246'}, 0.2)`;
              }}
            >
              <div style={{ marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '11px',
                color: item.color,
                marginBottom: '12px',
                letterSpacing: '1px',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                color: '#9090B0',
                lineHeight: '1.7',
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="stats-block" style={{
          background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(0,255,136,0.05) 100%)',
          border: '1px solid rgba(139,92,246,0.3)',
          padding: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '32px',
          textAlign: 'center',
        }}>
          {[
            { number: '1%', label: 'TOP BUILDERS' },
            { number: '6M', label: 'RESIDENCY' },
            { number: '∞', label: 'POTENTIAL' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: 'clamp(24px, 4vw, 40px)',
                color: i % 2 === 0 ? '#8B5CF6' : '#00FF88',
                textShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(139,92,246,0.5)' : 'rgba(0,255,136,0.5)'}`,
                marginBottom: '8px',
              }}>
                {stat.number}
              </div>
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '8px',
                color: '#5050A0',
                letterSpacing: '2px',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pixel Divider */}
      <div className="pixel-divider" />

      {/* Vibers House */}
      <section
        id="house"
        style={{
          padding: '100px 32px',
          background: 'rgba(15, 15, 26, 0.5)',
          borderTop: '1px solid rgba(139,92,246,0.15)',
          borderBottom: '1px solid rgba(139,92,246,0.15)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '10px',
              color: '#00FF88',
              letterSpacing: '3px',
              marginBottom: '16px',
            }}>
              {"// VIBERS_HOUSE"}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(18px, 3vw, 28px)',
              color: '#F0F0FF',
              lineHeight: '1.5',
            }}>
              WHERE BUILDERS<br />
              <span style={{ color: '#8B5CF6' }}>LIVE & BUILD</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '18px',
              color: '#9090B0',
              maxWidth: '600px',
              margin: '24px auto 0',
              lineHeight: '1.7',
            }}>
              Vibers House는 선발된 펠로우들이 함께 생활하며 빌드하는 <strong style={{ color: '#F0F0FF' }}>6개월 풀타임 레지던시</strong>입니다.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}>
            {[
              {
                icon: <PixelHouse />,
                title: '공동 생활공간',
                items: ['최고의 시설 제공', '24/7 해킹 환경', '공용 워크스페이스'],
                color: '#00FF88',
              },
              {
                icon: <PixelCoin />,
                title: '펀딩 & 지원',
                items: ['생활비 지원', '프로젝트 시드 펀딩', 'Hashed 투자 기회'],
                color: '#FFD700',
              },
              {
                icon: <PixelLightning />,
                title: '액셀러레이션',
                items: ['Hashed 멘토십', 'NEXON 업계 연결', '글로벌 론칭 지원'],
                color: '#8B5CF6',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-scale-glow"
                style={{
                  background: '#0A0A0F',
                  border: `1px solid rgba(139,92,246,0.15)`,
                  padding: '32px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)';
                  e.currentTarget.style.background = '#0F0F1A';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.15)';
                  e.currentTarget.style.background = '#0A0A0F';
                }}
              >
                <div style={{ marginBottom: '20px', animation: 'float 4s ease-in-out infinite' }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '10px',
                  color: item.color,
                  marginBottom: '20px',
                  letterSpacing: '1px',
                }}>
                  {item.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.items.map((li, j) => (
                    <li key={j} style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '15px',
                      color: '#9090B0',
                      padding: '8px 0',
                      borderBottom: j < item.items.length - 1 ? '1px solid rgba(139,92,246,0.1)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <span style={{ color: item.color, fontSize: '10px' }}>▶</span>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div style={{
            background: '#0F0F1A',
            border: '1px solid rgba(139,92,246,0.2)',
            padding: '48px',
          }}>
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '10px',
              color: '#8B5CF6',
              letterSpacing: '2px',
              marginBottom: '32px',
            }}>
              PROGRAM TIMELINE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { month: 'M01-02', title: '오리엔테이션 & 팀 빌딩', desc: '입주, 팀 구성, 아이디어 발굴, 멘토 매칭' },
                { month: 'M03-04', title: '프로토타입 스프린트', desc: '집중 개발, 주간 데모, 피드백 루프' },
                { month: 'M05', title: '베타 론칭', desc: '실제 사용자 확보, 지표 추적, 피봇 또는 스케일' },
                { month: 'M06', title: '데모 데이', desc: '투자자 피칭, 미디어 노출, 다음 라운드 협의' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '9px',
                    color: '#8B5CF6',
                    minWidth: '60px',
                    paddingTop: '2px',
                  }}>
                    {step.month}
                  </div>
                  <div style={{
                    width: '2px',
                    background: 'rgba(139,92,246,0.3)',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#F0F0FF',
                      marginBottom: '4px',
                    }}>
                      {step.title}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: '#6060A0',
                    }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pixel Divider */}
      <div className="pixel-divider" />

      {/* Why Now */}
      <section style={{ padding: '100px 32px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '10px',
            color: '#8B5CF6',
            letterSpacing: '3px',
            marginBottom: '16px',
          }}>
            {"// WHY_NOW"}
          </div>
          <h2 style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(18px, 3vw, 28px)',
            color: '#F0F0FF',
            lineHeight: '1.5',
          }}>
            THE WINDOW IS<br />
            <span style={{ color: '#00FF88' }}>RIGHT NOW</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
        }}>
          {[
            {
              title: 'AI가 개발의 벽을 부쉈다',
              desc: '코딩을 몰라도 빌드할 수 있는 시대. 아이디어와 실행력이 있는 10대가 시리즈A 스타트업을 만들 수 있습니다.',
              stat: '10x',
              statLabel: 'Builder Leverage',
              color: '#8B5CF6',
            },
            {
              title: '다음 유니콘은 더 어리다',
              desc: 'Mark Zuckerberg(19), Bill Gates(20), Vitalik Buterin(19). 다음 세대 창업자들은 더 어린 나이에 시작합니다.',
              stat: '19',
              statLabel: 'Average Age',
              color: '#00FF88',
            },
            {
              title: 'Web3 + AI 교차점',
              desc: 'Hashed의 Web3 전문성과 NEXON의 게임/엔터테인먼트 DNA가 만나는 교차점. 완전히 새로운 카테고리를 만들 기회.',
              stat: '×',
              statLabel: 'Hashed × NEXON',
              color: '#8B5CF6',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: '#0F0F1A',
                border: `1px solid rgba(${i % 2 === 1 ? '0,255,136' : '139,92,246'}, 0.2)`,
                padding: '40px 32px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: item.color,
                opacity: 0.15,
                position: 'absolute',
                top: '16px',
                right: '24px',
                textShadow: `0 0 30px ${item.color}`,
              }}>
                {item.stat}
              </div>
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: 'clamp(18px, 3vw, 32px)',
                color: item.color,
                textShadow: `0 0 20px ${item.color}`,
                marginBottom: '8px',
              }}>
                {item.stat}
              </div>
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '8px',
                color: '#5050A0',
                letterSpacing: '2px',
                marginBottom: '24px',
              }}>
                {item.statLabel}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '18px',
                fontWeight: 600,
                color: '#F0F0FF',
                marginBottom: '12px',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                color: '#6060A0',
                lineHeight: '1.7',
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Powered By */}
      <section style={{
        padding: '60px 32px',
        borderTop: '1px solid rgba(139,92,246,0.15)',
        borderBottom: '1px solid rgba(139,92,246,0.15)',
        background: 'rgba(15,15,26,0.3)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '9px',
            color: '#5050A0',
            letterSpacing: '3px',
            marginBottom: '32px',
          }}>
            POWERED BY
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '48px',
            flexWrap: 'wrap',
          }}>
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(16px, 3vw, 24px)',
              color: '#8B5CF6',
              textShadow: '0 0 20px rgba(139,92,246,0.5)',
              letterSpacing: '2px',
            }}>
              HASHED
            </div>
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(20px, 4vw, 32px)',
              color: '#5050A0',
            }}>
              ×
            </div>
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(16px, 3vw, 24px)',
              color: '#00FF88',
              textShadow: '0 0 20px rgba(0,255,136,0.5)',
              letterSpacing: '2px',
            }}>
              NEXON
            </div>
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            color: '#5050A0',
            marginTop: '24px',
            lineHeight: '1.7',
          }}>
            Web3 투자의 선두 Hashed와 글로벌 게임 제국 NEXON이<br />함께 만드는 차세대 빌더 생태계
          </p>
        </div>
      </section>

      {/* Pixel Divider */}
      <div className="pixel-divider" />

      {/* Email Waitlist */}
      <section
        id="waitlist"
        className="grid-bg"
        style={{
          padding: '100px 32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '10px',
            color: '#00FF88',
            letterSpacing: '3px',
            marginBottom: '16px',
          }}>
            {"// JOIN_THE_WAITLIST"}
          </div>

          <h2 style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(16px, 3vw, 24px)',
            color: '#F0F0FF',
            lineHeight: '1.5',
            marginBottom: '16px',
          }}>
            READY TO<br />
            <span className="glitch-text" style={{ color: '#8B5CF6' }}>VIBE & BUILD?</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '17px',
            color: '#9090B0',
            lineHeight: '1.7',
            marginBottom: '48px',
          }}>
            Season 01 선발은 제한된 인원으로 진행됩니다.<br />
            지금 바로 웨이트리스트에 등록하고 기회를 잡으세요.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="email-form" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  flex: 1,
                  minWidth: '280px',
                  background: '#0F0F1A',
                  border: '1px solid rgba(139,92,246,0.4)',
                  color: '#F0F0FF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  padding: '16px 20px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = '#8B5CF6')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)')}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '11px',
                  color: '#0A0A0F',
                  background: loading ? '#5050A0' : '#00FF88',
                  border: 'none',
                  padding: '16px 28px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  letterSpacing: '1px',
                  transition: 'all 0.2s',
                  boxShadow: loading ? 'none' : '0 0 20px rgba(0,255,136,0.4)',
                  animation: loading ? 'pixel-pulse 1s infinite' : 'none',
                }}
              >
                {loading ? 'LOADING...' : '▶ JOIN'}
              </button>
            </form>
          ) : (
            <div style={{
              background: 'rgba(0,255,136,0.1)',
              border: '1px solid rgba(0,255,136,0.4)',
              padding: '32px 40px',
              animation: 'slide-up 0.5s ease-out',
            }}>
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '12px',
                color: '#00FF88',
                marginBottom: '12px',
                letterSpacing: '1px',
              }}>
                ✓ REGISTERED!
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                color: '#9090B0',
              }}>
                웨이트리스트에 등록되었습니다. 곧 연락드리겠습니다.
              </p>
            </div>
          )}

          <div style={{
            marginTop: '32px',
            fontFamily: 'var(--font-pixel)',
            fontSize: '9px',
            color: '#3030A0',
            letterSpacing: '1px',
          }}>
            NO SPAM. WE ONLY SEND UPDATES THAT MATTER.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '48px 32px',
        borderTop: '1px solid rgba(139,92,246,0.15)',
        background: '#060609',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="footer-flex" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '32px',
            marginBottom: '48px',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '14px',
                color: '#8B5CF6',
                marginBottom: '12px',
                textShadow: '0 0 10px rgba(139,92,246,0.4)',
              }}>
                VIBERS LIFE
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: '#5050A0',
                maxWidth: '280px',
                lineHeight: '1.7',
              }}>
                상위 1% 어린 빌더를 위한<br />
                펠로우십 프로그램
              </p>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '9px',
                color: '#5050A0',
                letterSpacing: '2px',
                marginBottom: '16px',
              }}>
                LINKS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['About', 'Vibers House', 'Apply', 'FAQ'].map(link => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: '#5050A0',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#8B5CF6')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#5050A0')}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '9px',
                color: '#5050A0',
                letterSpacing: '2px',
                marginBottom: '16px',
              }}>
                BACKED BY
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '11px', color: '#8B5CF6' }}>HASHED</div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '11px', color: '#00FF88' }}>NEXON</div>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(139,92,246,0.1)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '8px',
              color: '#3030A0',
              letterSpacing: '1px',
            }}>
              © 2025 VIBERS LIFE. ALL RIGHTS RESERVED.
            </div>
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '8px',
              color: '#3030A0',
              letterSpacing: '1px',
              animation: 'pixel-pulse 3s infinite',
            }}>
              POWERED BY HASHED × NEXON
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
