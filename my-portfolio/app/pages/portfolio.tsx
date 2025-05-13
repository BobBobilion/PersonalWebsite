"use client";

import Image from "next/image";
import styles from "./Portfolio.module.css"; // Optional: for scoped styles

const projects = [
  { title: "Nagarik App", category: "Application", img: "/nagarik.png" },
  { title: "Ambition Guru", category: "Application", img: "/ambition.png" },
  { title: "Sociair", category: "Application", img: "/sociair.png" },
  { title: "Tokma", category: "Application", img: "/tokma.png" },
  { title: "Saara", category: "Application", img: "/saara.png" },
  { title: "Ifood", category: "Application", img: "/ifood.png" }
];

export default function Portfolio() {
  return (
    <section style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Portfolio</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1.5rem"
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e1e1e",
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ backgroundColor: "#fff", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image src={project.img} alt={project.title} width={100} height={100} />
            </div>
            <div style={{ padding: "1rem", color: "#fff" }}>
              <h3 style={{ marginBottom: "0.25rem" }}>{project.title}</h3>
              <p style={{ color: "#aaa" }}>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
