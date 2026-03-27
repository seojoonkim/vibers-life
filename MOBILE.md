# 모바일 최적화 작업

## 문제점
- 히어로 텍스트가 모바일에서 너무 큼
- 레이아웃이 데스크탑 기준으로만 설계됨
- 카드 그리드가 모바일에서 안 맞음
- 여백이 모바일에서 너무 넓거나 좁음

## 수정 사항

### 전체 공통
- 모든 섹션: px-4 sm:px-6 md:px-8 lg:px-16
- 세로 패딩: py-12 md:py-20
- overflow-x: hidden 유지

### 히어로 섹션 (app/page.tsx)
- H1: clamp(36px,8vw,100px) — 모바일에서 충분히 작게
- 서브텍스트: 16px 모바일, 18px 데스크탑
- CTA 버튼: 모바일에서 w-full, flex-col gap-3
- 히어로 레이아웃: 모바일 세로 스택, 데스크탑 비대칭 유지

### 카드 섹션
- 3개 카드: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
- 카드 패딩: p-6 md:p-8

### nav (components/nav.tsx)
- 모바일 드롭다운: 화면 전체 너비, 깔끔한 아이템 간격
- 햄버거 버튼: 44x44px 이상 (터치 타겟)

### 통계/숫자 섹션
- 모바일: grid-cols-2, 데스크탑: grid-cols-4

### 웨이팅 폼
- 이메일 input + 버튼: 모바일에서 flex-col, 데스크탑 flex-row

## 완료 후
npm run build && git add . && git commit -m "improve: mobile-first responsive design" && git push && echo done > /tmp/mobile-done.txt
