import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        textAlign: "center",
        padding: "4rem 2rem",
        backgroundColor: "#f8f8f8"
      }}
    >
      <div style={{ marginBottom: "1.5rem" }}>
        <Image
          src="/avatar.png"
          alt="Your Avatar"
          width={120}
          height={120}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Hello, I'm <strong>Radin Ahmadi</strong>
      </h2>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#4b6cb7" }}>
        Software Developer
      </h3>
      <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
        I build interactive web experiences and enjoy turning ideas into reality.
      </p>
    </section>
  );
}
