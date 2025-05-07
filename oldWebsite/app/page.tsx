import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <section id="about"><Hero /></section>
      <section id="projects"><Projects /></section>
    </>
  );
}
