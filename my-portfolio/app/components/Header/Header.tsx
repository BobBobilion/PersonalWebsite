"use client";
import { useState } from "react";

type Tab = "about" | "resume" | "portfolio" | "contact";

export default function Header({
  selectedTab,
  setSelectedTab
}: {
  selectedTab: Tab;
  setSelectedTab: (tab: Tab) => void;
}) {
  const tabs: Tab[] = ["about", "resume", "portfolio", "contact"];

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      paddingBottom: "1rem",
      borderBottom: "1px solid #333"
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>{
        selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)
      }</h1>

      <div style={{
        background: "#1f1f1f",
        borderRadius: "16px 16px 0 0",
        padding: "0.5rem 1rem",
        display: "flex",
        gap: "1.5rem"
      }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1rem",
              fontWeight: selectedTab === tab ? "bold" : "normal",
              color: selectedTab === tab ? "#facc15" : "#ccc",
              cursor: "pointer",
              paddingBottom: "0.2rem"
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
