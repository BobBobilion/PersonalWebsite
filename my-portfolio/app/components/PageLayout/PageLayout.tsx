import Sidebar from "../Sidebar/Sidebar";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f0f0f",
        padding: "3.75rem 10rem", // ⬅️ top/bottom 2rem, left/right 3.75rem
        gap: "2rem"
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#1e1e1e",
          color: "white",
          border: "1px solid #333",
          borderRadius: "20px", // 👈 rounded corners
          padding: "2rem",
          overflow: "hidden", // keeps content clean inside
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)"
        }}
      >
        {children}
      </div>
    </div>
  );
}
