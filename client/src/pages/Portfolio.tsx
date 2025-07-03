import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import UIUXShowcase from "@/components/UIUXShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Vajeenth Vasanthakumar - Business Analyst & UI/UX Designer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Business Analyst & UI/UX Designer specializing in Business Intelligence and AI tools. Currently interning at IYKONS Business Services. Expert in Python, React.js, Power BI, and data visualization."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Business Analyst & UI/UX Designer specializing in Business Intelligence and AI tools. Currently interning at IYKONS Business Services. Expert in Python, React.js, Power BI, and data visualization.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <UIUXShowcase />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
