import {
  Server,
  Cpu,
  Terminal,
  Users
} from "lucide-react";
import { ReactNode } from "react";


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
        <h2 style={{ fontSize: "1.75rem", fontWeight: 600 }}>What I'm Doing</h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
          <Card
            title="Serverless Engineering"
            icon={<Server size={36} color="#ffdb70" />}
            desc={<>Building scalable backends using <strong>AWS Lambda</strong> and <strong>Python</strong>.</>}
          />

          <Card
            title="Industrial Automation"
            icon={<Cpu size={36} color="#ffdb70" />}
            desc={<>Programming machines with <strong>PLCs</strong> and <strong>HMI software</strong>.</>}
          />

          <Card
            title="Tooling & Scripting"
            icon={<Terminal size={36} color="#ffdb70" />}
            desc={<>Automating workflows with <strong>Python</strong> and <strong>SQL</strong> scripts.</>}
          />

          <Card
            title="Teaching & Mentorship"
            icon={<Users size={36} color="#ffdb70" />}
            desc={<>Leading <strong>bootcamps</strong> and mentoring <strong>CS students</strong>.</>}
          />
        </div>
      </section>



    </>
  );
}

function Card({
  title,
  desc,
  icon
}: {
  title: string;
  desc: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div
      style={{
        flex: "1 1 40%",
        padding: "2px",
        borderRadius: "12px",
        background: "linear-gradient(155deg, #555 0%, #282828 35%)",
        minWidth: "250px",
        transition: "transform 0.1s ease-in-out",
        transform: "scale(1)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.015)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div
        style={{
          background: "#2a2a2a",
          borderRadius: "10px",
          padding: "1rem",
          height: "100%",
          display: "flex",
          alignItems: "flex-start", // 👈 aligns icon to the top
          gap: "1rem"
        }}
      >
        {/* Icon on the left, larger */}
        <div style={{ flexShrink: 0, paddingTop: "0.4rem"}}>{icon}</div>

        {/* Text content */}
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fafafa", marginBottom: "0.4rem" }}>{title}</h3>
          <p style={{ fontSize: "0.85rem", color: "#d6d6d6", margin: 0 }}>{desc}</p>
        </div>
      </div>
    </div>
  );
}
