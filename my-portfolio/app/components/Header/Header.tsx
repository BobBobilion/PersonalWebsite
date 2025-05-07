"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { title: "About", path: "/" },
  { title: "Resume", path: "/resume" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav style={{ display: "flex", gap: "2rem", padding: "1rem", borderBottom: "1px solid #333" }}>
      {tabs.map(tab => (
        <Link
          key={tab.path}
          href={tab.path}
          style={{
            fontWeight: pathname === tab.path ? "bold" : "normal",
            textDecoration: pathname === tab.path ? "underline" : "none",
            color: "white"
          }}
        >
          {tab.title}
        </Link>
      ))}
    </nav>
  );
}
