import { Phone, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4">
            <span className="text-gold">V</span>ajeenth <span className="text-gold">V</span>asanthakumar
          </div>
          <p className="text-white/80 mb-6">Business Analyst & UI/UX Designer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="tel:+94765441695"
              className="text-gold hover:text-yellow-300 transition-colors duration-300 text-xl"
            >
              <Phone size={24} />
            </a>
            <a
              href="mailto:vajeenth13052001@gmail.com"
              className="text-gold hover:text-yellow-300 transition-colors duration-300 text-xl"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-yellow-300 transition-colors duration-300 text-xl"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-yellow-300 transition-colors duration-300 text-xl"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60">
              © {new Date().getFullYear()} Vajeenth Vasanthakumar. All rights reserved. | 
              Transforming data into strategic insights.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
