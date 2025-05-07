
export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p style={{ marginTop: "1rem" }}>Feel free to reach out to me via email or the form below.</p>
      <form style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <input type="text" placeholder="Your Name" style={inputStyle} />
        <input type="email" placeholder="Your Email" style={inputStyle} />
        <textarea placeholder="Your Message" rows={5} style={inputStyle}></textarea>
        <button style={{
          background: "#555",
          border: "none",
          padding: "0.75rem",
          borderRadius: "6px",
          color: "white",
          cursor: "pointer"
        }}>
          Send Message
        </button>
      </form>
    </>
  );
}

const inputStyle = {
  padding: "0.75rem",
  borderRadius: "6px",
  border: "1px solid #333",
  background: "#1c1c1c",
  color: "white"
};
