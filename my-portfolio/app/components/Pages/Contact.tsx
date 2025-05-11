import { useState, useEffect, useRef } from "react";
import { Send, Eraser } from "lucide-react";
import { toast } from "react-toastify";


export default function Contact({
  form,
  setForm
}: {
  form: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  setForm: (updated: typeof form) => void;
}) {

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const isFormComplete = Object.values(form).every((val) => val.trim() !== "");
  const isFormEmpty = Object.values(form).every((val) => val.trim() === "");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://formsubmit.co/ajax/radinahmadi174@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      toast.success("Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Failed to send message.");
    }
  };

  const clearBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isFormEmpty && clearBtnRef.current) {
      clearBtnRef.current.style.border = "1px solid #3d3d3d";
      clearBtnRef.current.style.transform = "scale(1)";
    }
  }, [isFormEmpty]);


  return (
    <div style={{ width: "100%", marginTop: "2rem" }}>
      <h2 style={{ fontSize: "1.75rem", fontWeight: 600 }}>Contact Form</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "900px",
          width: "100%"
        }}
      >
        {/* Name + Email */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          style={inputStyle}
        />

        {/* Message */}
        <textarea
          placeholder="Your Message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          style={inputStyle}
        />

        {/* Submit */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0.5rem",
            gap: "0.75rem"
          }}
        >
          {/* Clear Button (left) */}
          <button
            ref={clearBtnRef}
            type="button"
            onClick={() => setForm({ name: "", email: "", subject: "", message: "" })}
            disabled={isFormEmpty}
            style={{
              background: isFormEmpty
                ? "#1a1a1a"
                : "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
              border: "1px solid",
              borderColor: isFormEmpty ? "#3d3d3d" : "#3d3d3d",
              padding: "0.5rem",
              paddingRight: "1.25rem",
              paddingLeft: "1.05rem",
              borderRadius: "12px",
              color: isFormEmpty ? "#999" : "#ffdb70",
              cursor: isFormEmpty ? "not-allowed" : "pointer",
              fontWeight: 500,
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              boxShadow: isFormEmpty ? "none" : "0 6px 18px rgba(0,0,0,0.6)",
              transition: "all 0.25s ease"
            }}
            onMouseEnter={(e) => {
              if (!isFormEmpty) {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.border = "1px solid #ffdb70";
              }
            }}
            onMouseLeave={(e) => {
              if (!isFormEmpty) {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.border = "1px solid #3d3d3d";
              }
            }}
          >
            <Eraser size={16} />
            Clear
          </button>

          <button
            type="submit"
            disabled={!isFormComplete}
            style={{
              background: isFormComplete
                ? "linear-gradient(135deg, #2a2a2a, #1a1a1a)"
                : "#1a1a1a",
              border: "1px solid #3d3d3d",
              padding: "0.75rem 1.5rem",
              borderRadius: "12px",
              color: isFormComplete ? "#ffdb70" : "#999",
              cursor: isFormComplete ? "pointer" : "not-allowed",
              fontWeight: 500,
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: isFormComplete ? "0 6px 18px rgba(0,0,0,0.6)" : "none",
              transition: "all 0.25s ease",
              transform: isFormComplete ? "scale(1)" : "none"
            }}
            onMouseEnter={(e) => {
              if (isFormComplete) {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.border = "1px solid #ffdb70";
              }
            }}
            onMouseLeave={(e) => {
              if (isFormComplete) {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.border = "1px solid #3d3d3d";
              }
            }}
          >
            <Send size={16} />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  flex: 1,
  padding: "0.85rem 1rem",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#1c1c1c",
  color: "#fff",
  fontSize: "0.9rem",
  width: "100%",
  outline: "none",
  transition: "border 0.2s ease-in-out",
  resize: "none",
};
