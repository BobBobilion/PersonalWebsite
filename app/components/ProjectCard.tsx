"use client";

type Props = {
    title: string;
    description: string;
    image: string;
    link: string;
  };
  
  export default function ProjectCard({ title, description, image, link }: Props) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "800px",
          textDecoration: "none",
          color: "inherit",
          overflow: "hidden",
          transition: "transform 0.2s",
        }}
        onMouseOver={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)";
        }}
        onMouseOut={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        }}
      >
        <div style={{ width: "50%", minHeight: "200px", position: "relative" }}>
          <img
            src={image}
            alt={title}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              display: "block"
            }}
          />
        </div>
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "50%",
            boxSizing: "border-box"
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{title}</h3>
          <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "#555" }}>{description}</p>
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#4b6cb7",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
              alignSelf: "flex-start"
            }}
          >
            View Project
          </button>
        </div>
      </a>
    );
  }
  