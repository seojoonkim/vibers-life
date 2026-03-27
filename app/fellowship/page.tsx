import Link from "next/link";

const programTiers = [
  {
    step: "01",
    title: "멤버십",
    body: "큐레이션된 커뮤니티, 이벤트, 네트워크 게이트웨이. 빠르게 움직이기 시작한 빌더를 위한 첫 번째 접근 레이어.",
    color: "text-neon-green",
    cardClass: "arcade-card arcade-card-green",
  },
  {
    step: "02",
    title: "펠로우십",
    body: "전담 멘토십, 리소스, 심화 지원. 출시 경험이 있고 가속할 준비가 된 빌더를 위해.",
    color: "text-neon-purple",
    cardClass: "arcade-card",
  },
  {
    step: "03",
    title: "Vibers House",
    body: "완전한 레지던시 — 궁극의 티어. 하나의 공간에서 최강 코호트와 함께하는 6개월 몰입 빌딩.",
    color: "text-neon-pink",
    cardClass: "arcade-card arcade-card-pink",
  },
] as const;

const benefits = [
  "업계 베테랑의 프로덕트 리뷰와 방향 피드백",
  "Hashed와 NEXON 네트워크에 직접 접근 — 소개가 아닌 실제 연결",
  "펠로우십에서 레지던시, 후속 투자까지 끊김 없는 파이프라인",
  "상위 1% 젊은 빌더 코호트가 서로를 밀어주는 환경",
] as const;

const applicationSteps = [
  {
    step: "01",
    title: "제출",
    body: "지금까지 만든 것과 현재 만들고 있는 것을 보여주세요. 아웃풋이 어떤 지원서보다 강력합니다.",
    color: "text-neon-green",
  },
  {
    step: "02",
    title: "심사",
    body: "속도, 완성도, 방향의 명확성을 평가합니다. 이력서가 아닌 코드를 봅니다.",
    color: "text-neon-purple",
  },
  {
    step: "03",
    title: "인터뷰",
    body: "프레젠테이션이 아닌 빌딩에 대한 짧은 대화. 어떻게 생각하고 출시하는지 이해하고 싶습니다.",
    color: "text-neon-pink",
  },
  {
    step: "04",
    title: "배치",
    body: "적합한 티어에 매칭합니다: 멤버십, 펠로우십, 또는 하우스. 모든 빌더는 맞는 레벨을 찾습니다.",
    color: "text-neon-green",
  },
] as const;

export default function FellowshipPage() {
  return (
    <main className="min-h-screen bg-arcade-black pt-16">
      <section className="grid-bg relative flex min-h-[calc(100vh-64px)] items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arcade-black" />

        <div className="relative mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="pixel-label mb-8">
              <span className="text-neon-green">{">>>"}</span>
              FELLOWSHIP
            </div>

            <h1
              className="hero-title glitch-text mb-8"
              data-text="이미 움직이고 있는 빌더를 위해"
            >
              이미 움직이고 있는 빌더를 위해
            </h1>

            <p className="body-lg mb-10 max-w-xl">
              Vibers Fellowship은 집중 멘토십, 리소스, 네트워크 접근을
              제공하여 이미 작동하는 것을 가속화합니다.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@vibers.life?subject=Vibers%20Fellowship"
                className="btn-neon btn-neon-filled whitespace-nowrap"
              >
                웨이팅 등록
              </a>
              <Link
                href="/house"
                className="btn-neon btn-neon-purple whitespace-nowrap"
              >
                하우스 보기
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute right-8 top-1/4 hidden animate-[float_8s_ease-in-out_infinite] opacity-15 lg:block">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <path d="M60 10L100 30V70C100 90 82 105 60 115C38 105 20 90 20 70V30L60 10Z" stroke="#00FF88" strokeWidth="2" />
              <path d="M45 60L55 70L75 50" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="5" y="5" width="4" height="4" fill="#8B5CF6" opacity="0.3" />
              <rect x="111" y="5" width="4" height="4" fill="#FF0080" opacity="0.3" />
              <rect x="5" y="111" width="4" height="4" fill="#00FF88" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-pink">티어</div>
            <h2 className="section-title mb-4">세 가지 티어, 하나의 기준</h2>
            <p className="body-text">
              모든 티어는 동일한 선발 기준을 공유합니다: 아웃풋, 속도, 방향.
              차이는 지원의 깊이뿐입니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {programTiers.map((tier) => (
              <article key={tier.step} className={tier.cardClass}>
                <span className={`font-pixel text-xl ${tier.color}`}>
                  {tier.step}
                </span>
                <h3 className="mb-3 mt-4 font-body text-lg font-semibold text-content">
                  {tier.title}
                </h3>
                <p className="body-text">{tier.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4">혜택</div>
            <h2 className="section-title">제공되는 것들</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="arcade-card arcade-card-green">
              <div className="pixel-label mb-6 text-neon-green">FELLOW 혜택</div>
              <ul className="flex flex-col gap-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0">
                      <path d="M3 8L6.5 11.5L13 5" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="body-text">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="arcade-card neon-border-purple">
              <div className="pixel-label mb-6">선발 기준</div>
              <div className="mb-6">
                <p className="font-body text-2xl font-semibold text-content">
                  완성도보다 아웃풋.
                </p>
                <p className="font-body text-2xl font-semibold text-neon-purple">
                  양보다 명확성.
                </p>
              </div>
              <div className="pixel-divider mb-6" />
              <p className="body-text">
                가장 강력한 지원서는 보통 단순합니다. 무엇을 만들었고,
                지금 무엇을 만들고 있으며, 왜 다음 6개월이 중요한지
                — 그것만 보면 됩니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-arcade-line bg-arcade-dark">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="pixel-label mb-4 text-neon-green">프로세스</div>
            <h2 className="section-title mb-4">지원 방법</h2>
            <p className="body-text">
              프로세스는 짧고 직접적입니다. 빌더가 기다리는 것을
              싫어한다는 걸 알기에 빠르게 움직입니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {applicationSteps.map((item) => (
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

      <section className="border-t border-arcade-line" id="waitlist">
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
              action="mailto:hello@vibers.life?subject=Vibers%20Fellowship%20Waitlist"
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
                  href="/house"
                  className="text-sm text-content-muted transition-colors hover:text-neon-green"
                >
                  Vibers House
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
