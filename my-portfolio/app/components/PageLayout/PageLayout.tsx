import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, background: "#1a1a1a", color: "white" }}>
        <Header />
        <main style={{ padding: "2rem" }}>{children}</main>
      </div>
    </div>
  );
}
