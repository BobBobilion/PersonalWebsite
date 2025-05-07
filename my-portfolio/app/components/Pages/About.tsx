import PageLayout from "../PageLayout/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <section>
        <h1>About Me</h1>
        <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
          A passionate Flutter developer with strong expertise in cross-platform apps, REST APIs, UI/UX, widgets, and state management solutions.
          Proven track record in delivering cutting-edge solutions, including API integration, third-party libraries, and performance optimization.
        </p>
        <p style={{ marginTop: "1rem" }}>
          If you're seeking a skilled Flutter developer to breathe life into your project and exceed your expectations, I'm here to collaborate.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>What I'm Doing</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
          <Card title="Mobile Apps" desc="Professional development of applications for Android and iOS." />
          <Card title="Web Development" desc="High-quality development of sites at the professional level." />
          <Card title="UI/UX Design" desc="The most modern and high-quality design made at a professional level." />
          <Card title="Backend Development" desc="High-performance backend services designed for scalability and seamless UX." />
        </div>
      </section>
    </PageLayout>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{
      flex: "1 1 40%",
      background: "#2a2a2a",
      padding: "1rem",
      borderRadius: "12px",
      minWidth: "250px"
    }}>
      <h3>{title}</h3>
      <p style={{ marginTop: "0.5rem" }}>{desc}</p>
    </div>
  );
}
