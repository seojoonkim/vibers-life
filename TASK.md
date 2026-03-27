# 지금 할 작업

1. 폰트를 산세리프(Noto Sans KR)로만 통일 (Noto Serif KR 완전 제거)
2. 모바일 nav를 드롭다운 방식으로 변경 (햄버거 클릭 → 아래로 펼침)
3. 가독성 개선: 여백 넓히기, 줄간격 1.8, 본문 max-width 제한

수정 파일: app/globals.css, components/nav.tsx, app/page.tsx, app/house/page.tsx, app/fellowship/page.tsx, app/about/page.tsx

완료: npm run build && git add . && git commit -m "improve: sans-serif, dropdown nav, readability" && git push && echo done > /tmp/vibers-task-done.txt
