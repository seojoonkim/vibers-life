import Link from "next/link";

const selectionCriteria = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="8" width="24" height="20" rx="2" stroke="#8B5CF6" strokeWidth="1.5" />
        <path d="M12 18L16 22L24 14" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="4" width="4" height="4" fill="#8B5CF6" fillOpacity="0.3" />
        <rect x="22" y="4" width="4" height="4" fill="#00FF88" fillOpacity="0.3" />
      </svg>
    ),
    title: "출시된 프로덕트",
    body: "실제로 무언가를 출시한 빌더를 찾습니다. 계획이나 피치가 아닌 — 사람들이 사용하는 작동하는 프로덕트.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 6V18L26 22" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="18" r="13" stroke="#00FF88" strokeWidth="1.5" />
        <rect x="4" y="4" width="3" height="3" fill="#8B5CF6" fillOpacity="0.3" />
        <rect x="29" y="29" width="3" height="3" fill="#FF0080" fillOpacity="0.3" />
      </svg>
    ),
    title: "속도와 강도",
    body: "빠른 반복, 빠른 출시, 끊임없는 개선. 다른 사람이 불편할 정도로 빠르게 움직이는 빌더를 원합니다.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4L22 14H32L24 20L27 32L18 25L9 32L12 20L4 14H14L18 4Z" stroke="#FF0080" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="18" cy="18" r="4" fill="#FF0080" fillOpacity="0.3" />
      </svg>
    ),
    title: "야망",
    body: "큰 비전, 스케일을 두려워하지 않는. 수천이 아닌 수백만 단위로 생각하는 빌더를 원합니다.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="12" cy="14" r="5" stroke="#8B5CF6" strokeWidth="1.5" />
        <circle cx="24" cy="14" r="5" stroke="#00FF88" strokeWidth="1.5" />
        <path d="M6 30C6 24.477 10.477 20 16 20H20C25.523 20 30 24.477 30 30" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="16" y="12" width="4" height="4" fill="#FF0080" fillOpacity="0.3" />
      </svg>
    ),
    title: "협업 정신",
    body: "코호트 안에서 성장합니다. 에고 없이 피드백을 주고받습니다. 최고의 빌더는 주변 모두를 더 빠르게 만듭니다.",
  },
] as const;

const programSteps = [
  {
    step: "01",
    title: "온보딩",
    body: "목표를 맞추고, 6개월 타깃을 설정하고, 코호트를 만납니다. 모든 레지던트는 명확한 방향과 측정 가능한 성과를 갖고 시작합니다.",
    color: "text-neon-green",
  },
  {
    step: "02",
    title: "빌드 스프린트",
    body: "주간 데모, 빠른 반복, 피어 피드백. 모멘텀이 복리로 쌓이고 프로덕트가 가속화되는 곳입니다.",
    color: "text-neon-purple",
  },
  {
    step: "03",
    title: "검증",
    body: "실제 사용자 테스트, 시장 신호, 방향 조정. 이론적 가정보다 실제 반응을 우선시합니다.",
    color: "text-neon-pink",
  },
  {
    step: "04",
    title: "런칭 & 그 이후",
    body: "데모 데이, 후속 지원, 다음 기회. 레지던시는 끝나지만, 네트워크와 모멘텀은 계속됩니다.",
    color: "text-neon-green",
  },
] as const;

const spaceCards = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="20" rx="2" stroke="#8B5CF6" strokeWidth="1.5" />
        <path d="M4 14H32" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="8" y="18" width="8" height="6" fill="#8B5CF6" fillOpacity="0.3" />
        <circle cx="27" cy="11" r="1.5" fill="#00FF88" />
      </svg>
    ),
    title: "개인 집중 공간",
    body: "방해 없는 딥 워크. 방음 처리된, 미니멀하게 설계된 공간에서 돌파구를 만드는 집중력을 발휘하세요.",
    cardClass: "arcade-card",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="12" width="12" height="16" rx="1" stroke="#00FF88" strokeWidth="1.5" />
        <rect x="20" y="12" width="12" height="16" rx="1" stroke="#00FF88" strokeWidth="1.5" />
        <path d="M16 20H20" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 24H20" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="14" y="4" width="8" height="4" fill="#00FF88" fillOpacity="0.3" />
      </svg>
    ),
    title: "공유 워크스페이스",
    body: "협업, 피어 코딩, 자발적 리뷰. 아이디어가 충돌하고 최고의 피드백이 자연스럽게 일어나는 공유 공간입니다.",
    cardClass: "arcade-card arcade-card-green",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 18L18 8L30 18" stroke="#FF0080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="18" width="18" height="12" stroke="#FF0080" strokeWidth="1.5" />
        <rect x="15" y="22" width="6" height="8" stroke="#FF0080" strokeWidth="1.5" />
        <rect x="11" y="20" width="3" height="3" fill="#FF0080" fillOpacity="0.3" />
      </svg>
    ),
    title: "거주 공간",
    body: "플로우 상태를 유지하는 온사이트 주거. 통근 제로는 더 많은 빌딩 시간과 리듬을 끊지 않는 것을 의미합니다.",
    cardClass: "arcade-card arcade-card-pink",
  },
] as const;

export default function HousePage() {
  return (
    <main className="min-h-screen bg-arcade-black pt-16">
      <section className="grid-bg relative flex min-h-[calc(100vh-64px)] items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arcade-black" />

        <div className="relative mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="pixel-label mb-8">
              <span className="text-neon-green">{">>>"}</span>
              VIBERS HOUSE
            </div>

            <h1
              className="hero-title glitch-text mb-8"
              data-text="함께 살고. 함께 만들고."
            >
              함께 살고. 함께 만들고.
            </h1>

            <p className="body-lg mb-10 max-w-xl">
              상위 1% 젊은 빌더를 위한 6개월 몰입형 레지던시.
              Hashed 10명 + NEXON 10명. 하나의 공간, 하나의 미션, 제로 방해.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/#waitlist"
                className="btn-neon btn-neon-filled whitespace-nowrap"
              >
                웨이팅 등록
              </a>
              <Link
                href="/fellowship"
                className="btn-neon btn-neon-purple whitespace-nowrap"
              >
                펠로우십 보기
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute right-8 top-1/4 hidden animate-[float_8s_ease-in-out_infinite] opacity-15 lg:block">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect x="20" y="10" width="80" height="60" stroke="#8B5CF6" strokeWidth="2" />
              <polygon points="60,2 20,10 100,10" stroke="#00FF88" strokeWidth="2" fill="none" />
              <rect x="45" y="45" width="30" height="25" stroke="#FF0080" strokeWidth="2" fill="none" />
              <rect x="28" y="20" width="15" height="12" fill="rgba(139,92,246,0.15)" stroke="#8B5CF6" strokeWidth="1" />
              <rect x="77" y="20" width="15" height="12" fill="rgba(139,92,246,0.15)" stroke="#8B5CF6" strokeWidth="1" />
              <rect x="5" y="5" width="4" height="4" fill="#8B5CF6" opacity="0.3" />
              <rect x="111" y="5" width="4" height="4" fill="#00FF88" opacity="0.3" />
              <rect x="5" y="111" width="4" height="4" fill="#FF0080" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-pink">선발 기준</div>
            <h2 className="section-title mb-4">우리가 찾는 빌더</h2>
            <p className="body-text">
              Vibers House는 모두를 위한 것이 아닙니다. 이미 출시 능력을
              증명했고 더 빠르게, 더 멀리 가고 싶은 빌더를 위한 것입니다.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {selectionCriteria.map((item) => (
              <article key={item.title} className="arcade-card">
                <div className="mb-5">{item.icon}</div>
                <h3 className="mb-3 font-body text-lg font-semibold text-content">
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
            <div className="pixel-label mb-4">프로그램</div>
            <h2 className="section-title mb-4">6개월 프로그램</h2>
            <p className="body-text">
              목표 설정부터 시장 출시, 그리고 그 이후까지
              프로덕트를 이끄는 4단계 프로그램.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {programSteps.map((item) => (
              <article key={item.step} className="arcade-card">
                <span className={`font-pixel text-xl ${item.color}`}>
                  {item.step}
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

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-green">공간</div>
            <h2 className="section-title mb-4">빌더를 위한 설계</h2>
            <p className="body-text">
              모든 공간은 아웃풋에 최적화되어 있습니다. 필요할 때 집중,
              원할 때 협업, 자격이 될 때 휴식.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {spaceCards.map((card) => (
              <article key={card.title} className={card.cardClass}>
                <div className="mb-5">{card.icon}</div>
                <h3 className="mb-3 font-body text-lg font-semibold text-content">
                  {card.title}
                </h3>
                <p className="body-text">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="arcade-card neon-border-purple mx-auto inline-block p-8 sm:p-10">
              <div className="stat-value text-neon-purple">2Y</div>
              <div className="stat-label mt-3">최대 연장</div>
              <div className="pixel-divider my-6" />
              <p className="body-lg">
                최고 성과자는 아웃풋과 성장 궤적에 따라 최대 2년까지 레지던시를
                연장할 수 있습니다. 최고의 빌더는 떠날 필요가 없습니다.
              </p>
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
              action="mailto:hello@vibers.life?subject=Vibers%20House%20Waitlist"
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
                  href="/about"
                  className="text-sm text-content-muted transition-colors hover:text-neon-pink"
                >
                  About
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
