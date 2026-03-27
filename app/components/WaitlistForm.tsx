"use client";

export default function WaitlistForm() {
  return (
    <form
      className="flex flex-col gap-3 md:flex-row md:gap-0"
      style={{
        maxWidth: 480,
        margin: "0 auto",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="이메일 주소를 입력하세요"
        style={{
          flex: 1,
          padding: "16px 20px",
          fontSize: 16,
          fontFamily: "'Noto Sans KR', sans-serif",
          border: "none",
          background: "#1A1A1A",
          color: "#FFFFFF",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          background: "#FF4D00",
          color: "#FFFFFF",
          padding: "16px 32px",
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "'Noto Sans KR', sans-serif",
          border: "none",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        등록하기
      </button>
    </form>
  );
}
