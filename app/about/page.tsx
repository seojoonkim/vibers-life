import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "규모보다 밀도",
    body: "의도적으로 작게. 강한 상호작용이 넓은 도달보다 낫습니다. 매일 서로를 밀어주는 20명이 월 1회 모이는 1000명을 이깁니다.",
    color: "text-neon-green",
  },
  {
    number: "02",
    title: "실행이 문화다",
    body: "아이디어는 어디에나 있습니다. 출시하고, 반복하고, 다시 출시하는 빌더는 드뭅니다. 의도가 아닌 행동으로 선발합니다.",
    color: "text-neon-purple",
  },
  {
    number: "03",
    title: "자본만으로는 부족하다",
    body: "젊은 빌더에게는 운영 가이드, 빠른 피드백, 실제 문을 열어주는 네트워크가 필요합니다 — 단순한 투자금이 아닌.",
    color: "text-neon-pink",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-arcade-black pt-16">
      <section className="grid-bg relative flex min-h-[calc(100vh-64px)] items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arcade-black" />

        <div className="relative mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="pixel-label mb-8">
              <span className="text-neon-green">{">>>"}</span>
              ABOUT
            </div>

            <h1
              className="hero-title glitch-text mb-8"
              data-text="Vibers Life가 믿는 것"
            >
              Vibers Life가 믿는 것
            </h1>

            <p className="body-lg mb-10 max-w-xl">
              우리는 다음 세대의 빌더가 누구보다 빠르게 움직이고,
              더 많이 출시하고, 더 크게 생각할 것이라 믿습니다.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/#waitlist"
                className="btn-neon btn-neon-filled whitespace-nowrap"
              >
                웨이팅 등록
              </a>
              <a
                href="mailto:hello@vibers.life"
                className="btn-neon btn-neon-purple whitespace-nowrap"
              >
                문의하기
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute right-8 top-1/4 hidden animate-[float_8s_ease-in-out_infinite] opacity-15 lg:block">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="40" stroke="#8B5CF6" strokeWidth="2" />
              <circle cx="60" cy="60" r="20" stroke="#00FF88" strokeWidth="2" />
              <circle cx="60" cy="60" r="4" fill="#FF0080" />
              <path d="M60 16V24" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M60 96V104" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M16 60H24" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M96 60H104" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="5" y="5" width="4" height="4" fill="#8B5CF6" opacity="0.3" />
              <rect x="111" y="111" width="4" height="4" fill="#FF0080" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-pink">원칙</div>
            <h2 className="section-title mb-4">우리의 원칙</h2>
            <p className="body-text">
              우리의 모든 결정을 형성하는 세 가지 믿음 — 누구를 선발하고
              어떻게 프로그램을 운영할지까지.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.number} className="arcade-card">
                <span className={`font-pixel text-xl ${item.color}`}>
                  {item.number}
                </span>
                <h3 className="mb-3 mt-4 font-body text-lg font-semibold text-content">
                  {item.title}
                </h3>
                <p className="body-text">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-green">네트워크</div>
            <h2 className="section-title">Hashed</h2>
          </div>

          <article className="arcade-card arcade-card-green p-8 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <div className="pixel-label mb-4 text-neon-green">네트워크 PARTNER</div>
                <h3 className="mb-4 font-body text-xl font-semibold text-content">
                  웹 네이티브 생태계, 빌더 우선
                </h3>
                <p className="body-lg">
                  Hashed는 웹 네이티브 생태계에 뿌리를 둔 글로벌 네트워크를
                  제공합니다. 초기 빌더에 대한 신념과 아시아 및 글로벌 깊은
                  연결로, 펠로우들이 혼자서는 수년이 걸릴 기회에 접근할 수 있게 합니다.
                </p>
              </div>
              <div className="hidden md:block">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="30" stroke="#00FF88" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="16" stroke="#00FF88" strokeWidth="1.5" />
                  <ellipse cx="40" cy="40" rx="30" ry="12" stroke="#00FF88" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="40" cy="10" r="3" fill="#00FF88" fillOpacity="0.3" />
                  <circle cx="40" cy="70" r="3" fill="#00FF88" fillOpacity="0.3" />
                  <circle cx="10" cy="40" r="3" fill="#8B5CF6" fillOpacity="0.3" />
                  <circle cx="70" cy="40" r="3" fill="#8B5CF6" fillOpacity="0.3" />
                  <circle cx="40" cy="40" r="3" fill="#00FF88" />
                </svg>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-pink">운영</div>
            <h2 className="section-title">NEXON</h2>
          </div>

          <article className="arcade-card arcade-card-pink p-8 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <div className="pixel-label mb-4 text-neon-pink">운영 PARTNER</div>
                <h3 className="mb-4 font-body text-xl font-semibold text-content">
                  대규모 운영, 프로덕트 마스터리
                </h3>
                <p className="body-lg">
                  NEXON은 수십 년간 대규모 프로덕트를 운영한 경험을
                  제공합니다. 프로덕트 조직, 인프라, 도구에 대한 이해는 펠로우들에게
                  사이드 프로젝트와 실제 회사를 구분하는 운영 역량을 줍니다.
                </p>
              </div>
              <div className="hidden md:block">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <rect x="15" y="10" width="50" height="35" rx="3" stroke="#FF0080" strokeWidth="1.5" />
                  <path d="M15 20H65" stroke="#FF0080" strokeWidth="1" />
                  <rect x="20" y="25" width="15" height="3" fill="#FF0080" fillOpacity="0.3" />
                  <rect x="20" y="32" width="25" height="3" fill="#FF0080" fillOpacity="0.3" />
                  <rect x="20" y="55" width="40" height="15" rx="2" stroke="#8B5CF6" strokeWidth="1.5" />
                  <path d="M35 55V70" stroke="#8B5CF6" strokeWidth="1" />
                  <path d="M50 55V70" stroke="#8B5CF6" strokeWidth="1" />
                  <circle cx="55" cy="15" r="2" fill="#00FF88" />
                  <circle cx="60" cy="15" r="2" fill="#FF0080" />
                  <rect x="20" y="50" width="4" height="4" fill="#FF0080" fillOpacity="0.3" />
                </svg>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="pixel-label mb-4 justify-center">시너지</div>
            <h2 className="section-title mb-6">함께라서 더 강하게</h2>
            <p className="body-lg mb-8">
              Hashed의 웹 네이티브 네트워크와 NEXON의 운영 전문성이 만나면,
              젊은 빌더는 도달력과 깊이를 모두 얻습니다. 이 파트너십은 혼자서는
              수년이 걸릴 리소스에 대한 접근을 제공합니다.
            </p>

            <div className="mx-auto grid max-w-lg grid-cols-2 gap-4">
              <div className="arcade-card p-5 text-center">
                <div className="stat-value text-neon-green">H</div>
                <div className="stat-label mt-2">네트워크</div>
              </div>
              <div className="arcade-card p-5 text-center">
                <div className="stat-value text-neon-pink">N</div>
                <div className="stat-label mt-2">운영</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark" id="waitlist">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-xl text-center">
            <div className="pixel-label mb-4 justify-center">
              <span className="text-neon-green">{">>>"}</span>
              얼리 액세스
            </div>
            <h2 className="section-title mb-6">웨이팅리스트 등록</h2>
            <p className="body-lg mb-8">
              다음 코호트 웨이팅리스트에 등록하세요.
              지원이 열리면 연락드리겠습니다.
            </p>

            <form
              className="flex flex-col gap-3 sm:flex-row"
              action="mailto:hello@vibers.life?subject=Vibers%20Life%20Waitlist"
              method="post"
              encType="text/plain"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="arcade-input flex-1"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="btn-neon btn-neon-filled whitespace-nowrap"
              >
                웨이팅 등록
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 font-pixel text-[10px] text-neon-purple">
                VIBERS.LIFE
              </div>
              <p className="text-sm text-content-muted">
                차세대 엘리트 빌더를 위한 펠로우십.
                <br />
                Hashed × NEXON이 함께합니다.
              </p>
            </div>
            <div>
              <div className="mb-3 font-pixel text-[8px] text-content-muted">
                바로가기
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/fellowship"
                  className="text-sm text-content-muted transition-colors hover:text-neon-purple"
                >
                  Fellowship
                </Link>
                <Link
                  href="/house"
                  className="text-sm text-content-muted transition-colors hover:text-neon-green"
                >
                  Vibers House
                </Link>
              </div>
            </div>
            <div>
              <div className="mb-3 font-pixel text-[8px] text-content-muted">
                연락처
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://vibers.life"
                  className="text-sm text-content-muted transition-colors hover:text-neon-green"
                >
                  vibers.life
                </a>
                <a
                  href="https://house.vibers.life"
                  className="text-sm text-content-muted transition-colors hover:text-neon-purple"
                >
                  house.vibers.life
                </a>
                <a
                  href="mailto:hello@vibers.life"
                  className="text-sm text-content-muted transition-colors hover:text-neon-green"
                >
                  hello@vibers.life
                </a>
              </div>
            </div>
          </div>

          <div className="pixel-divider mb-6 mt-8" />

          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <span className="font-pixel text-[7px] text-content-muted">
              © 2026 VIBERS LIFE. ALL RIGHTS RESERVED.
            </span>
            <span className="font-pixel text-[7px] text-content-muted">
              HASHED × NEXON
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
