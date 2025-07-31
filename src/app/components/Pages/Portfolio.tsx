"use client";

import Image from "next/image";
import { Github, ExternalLink, X, Youtube } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Bark & Moss",
    role: "Game Developer",
    year: 2024,
    description: "A multiplayer survival game with open world exploration made in Godot entirely using AI. Features dynamic wilderness environments, cooperative gameplay mechanics, and intelligent AI-driven game systems.",
    img: "/BarkAndMoss.png",
    link: "https://github.com/BobBobilion/BarkAndMoss",
    github: "https://github.com/BobBobilion/BarkAndMoss",
    video: "https://www.loom.com/share/86d4295d092148b7a07a17e040f9df53?sid=a6abb363-63e9-40c2-b2a3-edb65049e1d0"
  },
  {
    title: "WordWise",
    role: "Full Stack Developer",
    year: 2024,
    description: "An AI-powered word learning and vocabulary enhancement tool. Features intelligent word suggestions, progress tracking, and personalized learning paths to improve language skills.",
    img: "/WordWiseAI.png",
    link: "https://wordwise-ai-red.vercel.app/dashboard",
    github: "https://github.com/BobBobilion/Wordwise-ai",
    video: "https://www.loom.com/share/5d6bb8109faa477e95461355a0d40276?sid=bb29213d-48ba-4f4d-8383-3eb4b09ffe50"
  },
  {
    title: "Dog Walk",
    role: "Full Stack Developer", 
    year: 2024,
    description: "A social media platform for photo sharing and connecting with friends. Built with modern web technologies for seamless photo uploads, social interactions, and real-time messaging.",
    img: "/DogWalk.png",
    link: "https://www.loom.com/share/cb2c69e750dc4d39923e056c8361529b",
    github: "https://github.com/BobBobilion/SnapAGram",
    video: "https://www.loom.com/share/cb2c69e750dc4d39923e056c8361529b"
  },
  {
    title: "Cognify",
    role: "Full Stack Developer",
    year: 2024,
    description: "A cognitive enhancement platform designed to improve mental performance through targeted exercises and analytics. Features personalized training modules and progress visualization.",
    img: "/Cognify.png",
    link: "https://youtu.be/gEPy3wNIhIY",
    github: "https://github.com/BobBobilion/Cognify",
    video: "https://youtu.be/gEPy3wNIhIY"
  },
  {
    title: "Spool",
    role: "Team Lead & Full Stack Developer",
    year: 2024,
    description: "A collaborative development platform for team project management and code organization. Built as part of a team effort to streamline development workflows and enhance productivity.",
    img: "/Spool.png",
    link: "https://github.com/orgs/G2-Spool/repositories",
    github: "https://github.com/orgs/G2-Spool/repositories"
  },
  {
    title: "Predict Base",
    role: "Full Stack Developer",
    year: 2021,
    description: "Event based market prediction website hosted on the Base Blockchain. Built with modern web technologies and smart contract integration for seamless blockchain interactions.",
    img: "/predictLogo.png",
    link: "https://predictbase.app",
    github: "https://github.com/BobBobilion"
  },
  {
    title: "Photobooth",
    role: "Full Stack Developer",
    year: 2022,
    description: "A photo booth app for individuals with a simple and clean UI. Features real-time photo capture, filters, and instant sharing capabilities.",
    img: "/photoBoothSS.png",
    link: "https://photosbyradin.netlify.app/",
    github: "https://github.com/BobBobilion/PhotoBooth"
  }
];

// Helper function to convert video URLs to embeddable format
const getEmbedUrl = (url: string) => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = url.includes('youtu.be') 
      ? url.split('youtu.be/')[1] 
      : url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes('loom.com')) {
    const videoId = url.split('/share/')[1]?.split('?')[0];
    return `https://www.loom.com/embed/${videoId}`;
  }
  return url;
};

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section style={{ padding: "0rem", maxWidth: "1000px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", marginTop : "1rem" }}>Projects and Applications</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              padding: "2px",
              borderRadius: "14px",
              background: "linear-gradient(155deg, #666 0%,rgb(49, 49, 49) 35%)",
              transition: "transform 0.2s ease",
              transform: "scale(1)"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.015)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#2a2a2a",
                borderRadius: "12px",
                overflow: "hidden",
                minHeight: "200px"
              }}
            >

              <div style={{ position: "relative", width: "25%", margin: "1rem", marginRight: "0.25rem", borderRadius: "10px", overflow: "hidden" }}>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  style={{ objectFit: "contain" }}
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
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "opacity 0.3s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <div style={{ backgroundColor: "rgba(30, 30, 30, 0.8)", padding: "0.5rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <ExternalLink size={18} />
                    View
                  </div>
                </a>
              </div>

              <div style={{ padding: "1.5rem", flex: 1, color: "#fafafa", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <h3 style={{ fontSize: "1.65rem", marginBottom: "0.25rem" }}>{project.title}</h3>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {project.video && (
                        <button
                          onClick={() => setSelectedVideo(project.video!)}
                          style={{
                            color: "#eaca69",
                            backgroundColor: "transparent",
                            border: "none",
                            padding: "0.5rem",
                            borderRadius: "8px",
                            transition: "background-color 0.3s ease",
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer"
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(234, 202, 105, 0.1)")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                          <Youtube size={20} />
                        </button>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#eaca69",
                          textDecoration: "none",
                          padding: "0.5rem",
                          borderRadius: "8px",
                          transition: "background-color 0.3s ease",
                          display: "flex",
                          alignItems: "center"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(234, 202, 105, 0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#eaca69", marginBottom: "0.25rem" }}>{project.role}</p>
                  <p style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>{project.year}</p>
                </div>
                <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#d0d0d0" }}>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "800px",
              backgroundColor: "#2a2a2a",
              borderRadius: "12px",
              padding: "2px",
              background: "linear-gradient(155deg, #666 0%,rgb(49, 49, 49) 35%)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                backgroundColor: "#2a2a2a",
                borderRadius: "10px",
                padding: "1rem",
                position: "relative"
              }}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#eaca69",
                  cursor: "pointer",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  transition: "background-color 0.3s ease",
                  zIndex: 1001
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(234, 202, 105, 0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <X size={24} />
              </button>
              <iframe
                src={getEmbedUrl(selectedVideo)}
                style={{
                  width: "100%",
                  height: "450px",
                  border: "none",
                  borderRadius: "8px"
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
