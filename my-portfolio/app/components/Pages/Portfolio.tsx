
export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <p style={{ marginTop: "1rem" }}>Here are some of the projects I’ve worked on recently:</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
        <ProjectCard title="MyApp UI" desc="Cross-platform social app with real-time chat." />
        <ProjectCard title="E-Commerce Dashboard" desc="Admin dashboard with analytics and CRUD features." />
        <ProjectCard title="Travel Blog App" desc="Blog app for travelers with rich media support." />
      </div>
    </>
  );
}

function ProjectCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ background: "#2a2a2a", padding: "1rem", borderRadius: "10px" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button style={{
        marginTop: "1rem",
        background: "#444",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        color: "white",
        cursor: "pointer"
      }}>
        View Project
      </button>
    </div>
  );
}
