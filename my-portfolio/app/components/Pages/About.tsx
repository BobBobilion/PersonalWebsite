
export default function About() {
  return (
    <>
      <section style={{ color: "#d6d6d6" }}>
        <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
          I'm a Computer Engineering student at UC Irvine with a strong background in software development, automation, and embedded systems. I bring a hands-on, full-stack approach to engineering, backed by professional experience with AWS, serverless architecture, and industrial control systems.
        </p>
        <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
          My experience ranges from building scalable cloud APIs with Python and AWS Lambda to designing and programming PLCs and HMI machines for custom industrial automation. I've also led award-winning hackathon teams, conducted environmental research using machine learning, and taught coding to over 20 students in a charitable bootcamp I founded.
        </p>
        <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
          I'm always looking to bridge hardware and software, solve meaningful problems, and build tools that are efficient, scalable, and user-focused.
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
    </>
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
