"use client";

import Image from "next/image";
import React from "react";

export default function Header() {
  const NavTab = ({
    title,
    elementId,
    padding = 0,
  }: {
    title: string;
    elementId: string;
    padding?: number;
  }) => {
    const handleClick = () => {
      const el = document.getElementById(elementId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - padding;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    return (
      <span
        onClick={handleClick}
        style={{
          cursor: "pointer",
          textDecoration: "none",
          color: "white",
          marginLeft: "1.5rem",
        }}
      >
        {title}
      </span>
    );
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#6b7890",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <a
        href="#about"
        style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "white" }}
      >
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={40}
          height={40}
          style={{ borderRadius: "50%", marginRight: "0.5rem" }}
        />
        <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Your Name</span>
      </a>

      <nav style={{ display: "flex", alignItems: "center" }}>
        <NavTab title="About" elementId="about" padding={30} />
        <NavTab title="Projects" elementId="projects" padding={0} />
      </nav>
    </header>
  );
}
