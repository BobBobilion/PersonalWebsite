"use client";
import { useState } from "react";
import PageLayout from "./components/PageLayout/PageLayout";
import Header from "./components/Header/Header";
import About from "./components/Pages/About";
import Resume from "./components/Pages/Resume";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState<"about" | "resume" | "portfolio" | "contact">("about");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const renderPage = () => {
    switch (selectedTab) {
      case "resume": return <Resume />;
      case "portfolio": return <Portfolio />;
      case "contact": return <Contact form={formData} setForm={setFormData} />;
      default: return <About />;
    }
  };

  return (
    <PageLayout>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {renderPage()}
    </PageLayout>
  );
}
