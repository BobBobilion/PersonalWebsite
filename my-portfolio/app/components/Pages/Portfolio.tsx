"use client";

import Image from "next/image";

const projects = [
  {
    title: "Predict Base",
    role: "Full Stack Developer",
    year: 2021,
    description: "Event based market prediction website hosted on the Base Blockchain.",
    img: "/predictLogo.png",
    link: "https://predictbase.app"
  },
  {
    title: "Photobooth",
    role: "UI/UX Designer",
    year: 2022,
    description: "E-learning platform offering test preparation, quizzes, and tutorials.",
    img: "/sociair.png",
    link: "https://ambitionguru.com"
  },
  {
    title: "Sociair",
    role: "Full Stack Developer",
    year: 2023,
    description: "A minimalist social networking app for events and interest groups.",
    img: "/sociair.png",
    link: "https://sociair.app"
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <section style={{ padding: "0rem", maxWidth: "1000px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>Projects and Applications</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#1e1e1e",
              borderRadius: "16px",
              border: "2px solid #333",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ position: "relative", width: "25%", margin: "1rem", borderRadius: "10px", overflow: "hidden" }}>
              <Image
                src={project.img}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  color: "#eaca69",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
              >
                {/* Add a square background to the text */}
                <div style={{ backgroundColor: "rgba(30, 30, 30, 0.8)", padding: "0.5rem", borderRadius: "8px" }}>
                  View
                </div>
              </a>
            </div>

            <div style={{ padding: "1.5rem", flex: 1, color: "#fafafa" }}>
              <h3 style={{ fontSize: "1.65rem", marginBottom: "0.25rem" }}>{project.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#eaca69", marginBottom: "0.25rem" }}>{project.role}</p>
              <p style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>{project.year}</p>
              <p style={{ fontSize: "1rem", lineHeight: 1.5 }}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
