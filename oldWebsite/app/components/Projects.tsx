import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Photo Booth",
    description: "A web-based photobooth experience with customizable filters and unique frames.",
    image: "/photoBoothPreview.png",
    link: "https://photosbyradin.netlify.app/"
  }
];

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </div>
  );
}
