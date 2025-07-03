import { ChevronDown, Download, Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/ChatGPT Image Jul 3, 2025, 12_03_57 PM_1751524445745.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    // Create a link to download the PDF
    const link = document.createElement("a");
    link.href = "/api/download-cv";
    link.download = "Vajeenth_Vasanthakumar_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen gradient-bg flex items-center justify-center text-white relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 animate-slideInLeft">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gold">Vajeenth</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6">
              Business Analyst & UI/UX Designer
            </h2>
            <p className="text-xl mb-4 opacity-90">
              Business Analyst Intern at IYKONS Business Services (PVT) LTD
            </p>
            <p className="text-lg mb-8 opacity-80 max-w-2xl">
              Transforming data into actionable insights and creating exceptional user experiences. 
              Passionate about bridging technology with strategic decisions to drive success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={scrollToContact}
                className="bg-gold text-navy hover:bg-yellow-500 px-8 py-3 rounded-full font-semibold"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                onClick={downloadCV}
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-navy px-8 py-3 rounded-full font-semibold"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="tel:+94765441695"
                className="text-gold hover:text-yellow-300 transition-colors duration-300 text-2xl"
              >
                <Phone />
              </a>
              <a
                href="mailto:vajeenth13052001@gmail.com"
                className="text-gold hover:text-yellow-300 transition-colors duration-300 text-2xl"
              >
                <Mail />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-yellow-300 transition-colors duration-300 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center animate-slideInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gold rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Vajeenth Vasanthakumar"
                className="w-80 h-80 object-cover object-center scale-75 rounded-full border-8 border-gold shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gold animate-bounce">
        <button
          onClick={() => {
            const element = document.getElementById("about");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
