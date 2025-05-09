"use client";
import { useRef, useEffect, useState, forwardRef } from "react";
import { BookOpen, Briefcase, FileText, FlaskConical, GraduationCap, Trophy } from "lucide-react";

export default function Resume() {
  const eduRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const hackRef = useRef<HTMLDivElement>(null);

  const [eduHeight, setEduHeight] = useState(0);
  const [expHeight, setExpHeight] = useState(0);
  const [projectsHeight, setProjectsHeight] = useState(0);
  const [hackHeight, setHackHeight] = useState(0);

  useEffect(() => {
    if (eduRef.current) {
      setEduHeight(eduRef.current.getBoundingClientRect().height);
    }
    if (expRef.current) {
      setExpHeight(expRef.current.getBoundingClientRect().height);
    }
    if (projectsRef.current) {
      setProjectsHeight(projectsRef.current.getBoundingClientRect().height);
    }
    if (hackRef.current) {
      setHackHeight(hackRef.current.getBoundingClientRect().height);
    }
  }, []);



  useEffect(() => {
    if (eduRef.current) setEduHeight(eduRef.current.getBoundingClientRect().height);
    if (expRef.current) setExpHeight(expRef.current.getBoundingClientRect().height);
    if (projectsRef.current) setProjectsHeight(projectsRef.current.getBoundingClientRect().height);
    if (hackRef.current) setHackHeight(hackRef.current.getBoundingClientRect().height);
  }, []);
  return (
    <div style={{ padding: "1rem 0", color: "#d6d6d6" }}>
      <DownloadResumeButton />

      <Section title="Education" icon={<GraduationCap size={20} color="#ffdb70" />} cutHeight={eduHeight}>
        <TimelineItem
          ref={eduRef}
          title="University of California, Irvine"
          subtitle="B.S. in Computer Engineering, Minor in Informatics"
          time="Sep 2022 – Jul 2026"
        />
      </Section>

      <Section title="Experience" icon={<Briefcase size={20} color="#ffdb70" />} cutHeight={expHeight}>
        <TimelineItem
          title="Software Development Engineer Intern"
          subtitle="Info Street"
          time="Sep 2024 – Present"
          details={[
            "Migrated server-based code to serverless architecture using AWS SAM and Python.",
            "Improved scalability and reduced operational costs by 17%.",
            "Refactored codebase with team, increasing performance by 15% and reducing latency by 25%.",
            "Developed RESTful APIs to support new front-end features."
          ]}
        />
        <TimelineItem
          title="Software Engineering Intern"
          subtitle="M&O Perry Industries"
          time="May 2023 – Aug 2024"
          details={[
            "Built custom industrial machines using FactoryTalk View, Studio 5000, and AutoCAD Electrical.",
            "Created Python tools to automate data entry, cutting input time from hours to minutes.",
            "Upgraded machines to increase production speed by 15% and reduce waste by 33%.",
            "Developed SQL scripts and Visual Basic tools for HMI file storage."
          ]}
        />
        <TimelineItem
          ref={expRef}
          title="Programming Contractor"
          subtitle="M&O Perry Industries"
          time="Jan 2023 – May 2023"
          details={[
            "Programmed PLCs and HMIs using Studio 5000 and FactoryTalk View.",
            "Improved algorithms to boost output and reduce jamming by 20%."
          ]}
        />
      </Section>
      
      <Section title="Projects" icon={<FlaskConical size={20} color="#ffdb70" />} cutHeight={projectsHeight}>
        <TimelineItem
          title="Environmental Research Project"
          subtitle="Developer, Researcher"
          time="Mar 2024 – Present"
          details={[
            "Analyzed hyperspectral satellite data to identify pollutants and geological features.",
            "Used CNNs and TensorFlow to enhance and process large-scale datasets.",
            "Improved data quality by 40% and reduced noise by 15%."
          ]}
        />
        <TimelineItem
          ref={projectsRef}
          title="Raad Var Inc. Programming Bootcamp"
          subtitle="Founder, Head Instructor"
          time="Jul 2019 – Aug 2021"
          details={[
            "Taught 20+ students Python over 2 summers, raising $3000 for charity.",
            "Led 3 CS major teaching assistants and planned curriculum."
          ]}
        />
      </Section>

      <Section title="Hackathons & Game Jams" icon={<Trophy size={20} color="#ffdb70" />} cutHeight={hackHeight}>
        <TimelineItem
          ref={hackRef}
          title="Hackathons & Game Jams"
          subtitle="Lead Programmer, Team Founder"
          time="2017 – 2023"
          details={[
            "Hackathons: 1st (2017, 2019, 2021), 3rd (2022), 4th (2023, UCSB)",
            "Ludum Dare Game Jams: Top 14.2% (2019), 21% (2020), 8.1% (2021)",
            "Bear Jams: 2nd (2022, UC Berkeley)"
          ]}
        />
      </Section>


    </div>
  );
}


function Section({
  title,
  icon,
  children,
  cutHeight
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  cutHeight: number;
}) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.5rem",
          position: "relative",
          zIndex: 2
        }}
      >
        <div
          style={{
            background: "radial-gradient(circle at top left, rgba(255, 255, 255, 0.07), #1a1a1a 80%)",
            padding: "1rem",
            borderRadius: "14px",
            border: "1px solid #3a3a3a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.4)"
          }}
        >
          {icon}
        </div>
        <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>{title}</h2>
      </div>

      <div style={{ position: "relative", marginLeft: "1.5rem" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: `calc(100% - ${cutHeight - 27}px)`,
            width: "2px",
            background: "#353535",
            transform: "translateX(2px) translateY(-25px)"
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>{children}</div>
      </div>
    </div>
  );
}

const TimelineItem = forwardRef<HTMLDivElement, {
  title: string;
  subtitle?: string;
  time?: string;
  location?: string;
  details?: string[];
}>(({ title, subtitle, time, location, details }, ref) => {
  return (
    <div ref={ref} style={{ position: "relative", paddingLeft: "2rem" }}>
      <div
        style={{
          position: "absolute",
          top: "0rem",
          left: 0,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "#353535",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translateX(-7px) translateY(1px)",
          zIndex: 1
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#ffdb70"
          }}
        />
      </div>

      <div>
        <h3 style={{ margin: "0rem 0.75rem", fontWeight: "bold", fontSize: "1rem" }}>{title}</h3>
        {subtitle && <p style={{ margin: "0.25rem 0.75rem", opacity: 0.8 }}>{subtitle}</p>}
        {time && <p style={{ margin: "0.25rem 0.75rem", color: "#ffdb70", fontWeight: 500 }}>{time}</p>}
        {location && <p style={{ margin: "0.25rem 0.75rem", fontStyle: "italic", opacity: 0.7 }}>{location}</p>}
        {details && (
          <ul style={{ paddingLeft: "1rem", marginTop: "0.5rem", listStyle: "none" }}>
            {details.map((item, i) => (
              <li
                key={i}
                style={{
                  position: "relative",
                  paddingLeft: "1rem",
                  marginBottom: "0.5rem"
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.5em",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#ffdb70"
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

        )}
      </div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";

function DownloadResumeButton() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "3rem",
        right: "12rem",
        zIndex: 999
      }}
    >
      {/* Background container */}
      <div
        style={{
          background: "#1e1e1e",          // solid black backdrop
          display: "inline-block",
          borderRadius: "10px",
        }}
      >
        <a
          href="/Resume - Radin Ahmadizadeh.pdf"
          download
          style={{
            background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
            borderRadius: "10px",
            border: "1px solid #3d3d3d",
            padding: "0.9rem 1.25rem",
            color: "#ffdb70",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 500,
            fontSize: "1rem",
            transition: "all 0.15s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(120deg, rgba(255, 219, 112, 0.1) 30%, #202023 70%)";
            e.currentTarget.style.border = "1px solid #ffdb70";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #2a2a2a, #1a1a1a)";
            e.currentTarget.style.border = "1px solid #3d3d3d";
          }}
        >
          <FileText size={18} />
          Download CV
        </a>
      </div>
    </div>
  );
}
