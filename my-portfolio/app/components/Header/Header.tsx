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
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingBottom: "1rem",
        borderBottom: "1px solid #333"
      }}
    >
      {/* Page title */}
      <h1 style={{ fontSize: "2rem", fontWeight: 600, margin: 0 }}>
        {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
      </h1>

      {/* Notch background shape */}
      <div
        style={{
          position: "absolute",
          top: "-2rem",
          right: "-2rem",
          width: "500px", // Adjust as needed
          height: "100%",
          background: "#282829",
          border: "1px solid #383838",
          borderTop: "none",
          borderTopRightRadius: "1.25rem",
          borderBottomLeftRadius: "1.25rem",
          zIndex: 0
        }}
      />

      {/* Tab buttons */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "transparent",
          padding: "0.2rem 1.5rem",
          display: "flex",
          gap: "3rem",
          alignSelf: "flex-start",
          marginTop: "-1rem"
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1rem",
              fontWeight: selectedTab === tab ? "bold" : "normal",
              color: selectedTab === tab ? "#eaca69" : "#ccc",
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
