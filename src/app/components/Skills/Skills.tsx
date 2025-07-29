import React from "react";
import styles from "./Skills.module.css"; 

const defaultPadding = "1rem";
const skills = [
  { name: "Claude Code", icon: "/claude.svg", link: "https://docs.anthropic.com/en/docs/claude-code", padding: defaultPadding},
  { name: "Python", icon: "/Python.svg", link: "https://www.python.org/" , padding: defaultPadding},
  { name: "Java", icon: "/Java.svg", link: "https://www.java.com/", padding: defaultPadding},
  { name: "React", icon: "/React.svg", link: "https://reactjs.org/", padding: defaultPadding},
  { name: "Next JS", icon: "/NextJS.svg", link: "https://nextjs.org/", padding: defaultPadding},
  { name: "AWS", icon: "/AWS.svg", link: "https://aws.amazon.com/", padding: defaultPadding},
  { name: "Godot", icon: "/Godot.svg", link: "https://godotengine.org/", padding: "0rem"},
  { name: "GitHub", icon: "/GitHub.svg", link: "https://github.com/", padding: defaultPadding},
  { name: "FactoryTalk", icon: "/FactoryTalk.png", link: "https://www.rockwellautomation.com/", padding: "0rem"},
  { name: "Postman", icon: "/Postman.svg", link: "https://www.postman.com/", padding: "0rem"},
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "4rem 0" }}>
      <h2 style={{ color: "white", fontSize: "2rem", marginBottom: "2rem" }}>Skills</h2>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={styles.skillCard}
            onClick={() => window.open(skill.link, "_blank")}
            style={{ padding: skill.padding }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
