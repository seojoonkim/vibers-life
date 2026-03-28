"use client";

export default function WaitlistForm() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: 440,
        margin: "0 auto",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="이메일 주소를 입력하세요"
        style={{
          padding: "14px 20px",
          fontSize: 15,
          fontFamily: "'Pretendard', sans-serif",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 9999,
          background: "rgba(255,255,255,0.08)",
          color: "#FFFFFF",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          background: "#8DC63F",
          color: "#FFFFFF",
          padding: "14px 32px",
          fontSize: 15,
          fontWeight: 600,
          fontFamily: "'Pretendard', sans-serif",
          border: "none",
          borderRadius: 9999,
          cursor: "pointer",
        }}
      >
        등록하기
      </button>
    </form>
  );
}
