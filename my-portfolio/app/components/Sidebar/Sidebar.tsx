"use client";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Twitter } from "lucide-react";
import { toast } from "react-toastify";


export default function Sidebar() {
  return (
    <aside
      style={{
        width: "280px",
        background: "#1e1e1e",
        padding: "2rem",
        borderRadius: "20px",
        border: "1px solid #333",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
        // margin: "2rem",
        color: "white",
        position: "sticky",
        top: "2rem",
        height: "fit-content"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            background: "#3d3d3d",
            padding: "1rem",
            borderRadius: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "160px",
            height: "160px"
          }}
        >
          <Image
            src="/avatar3.png"
            alt="Avatar"
            width={120}
            height={120}
            style={{ borderRadius: "16px" }}
          />
        </div>

        <h1 style={{ marginTop: "1rem", fontSize: "2rem", fontWeight: "700" }}>
          Radin Ahmadizadeh
        </h1>

        <div
          style={{
            background: "#2d2d2d",
            padding: "0.25rem 0.75rem",
            borderRadius: "7px",
            display: "inline-block",
            marginTop: "0.5rem",
            fontSize: "0.75rem",
            fontWeight: "500",
            opacity: 0.85
          }}
        >
          Software Developer
        </div>
      </div>

      <hr style={{ margin: "1.5rem 0", borderColor: "#444" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <InfoBlock
          icon={<Mail size={20} color="#eaca69" />}
          label="EMAIL"
          text="RadinAhmadi174@..."
          valueToCopy="RadinAhmadi174@gmail.com"
        />
        <InfoBlock
          icon={<Phone size={20} color="#eaca69" />}
          label="PHONE"
          text="(949) 560 - 1116"
          valueToCopy="9495601116"
        />
        <InfoBlock
          icon={<MapPin size={20} color="#eaca69" />}
          label="LOCATION"
          text="Irvine, CA"
          valueToCopy="Irvine, CA"
        />
      </div>

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <SocialIcon name="logo-linkedin" href="https://linkedin.com/in/yourname" />
        <SocialIcon name="logo-github" href="https://github.com/yourname" />

      </div>
    </aside>
  );
}

function InfoBlock({
  icon,
  label,
  text,
  valueToCopy
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
  valueToCopy: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(valueToCopy);
    toast.success(`${label} copied!`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div
      onClick={handleCopy}
      title="Click to copy"
      style={{
        background: "#2a2a2a",
        padding: "0.75rem",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        cursor: "pointer",
        userSelect: "none"
      }}
    >
      <div>{icon}</div>
      <div>
        <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>{label}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}

function SocialIcon({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#ccc",
        transition: "color 0.2s ease-in-out",
        textDecoration: "none"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#ddd")}
    >
      <ion-icon name={name} style={{ fontSize: "1.4rem" }} />
    </a>
  );
}
