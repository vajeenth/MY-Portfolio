import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function EducationSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const educationTimeline = [
    {
      year: "2022 - 2026",
      title: "Bachelor of ICT",
      institution: "UVA Wellassa University of Sri Lanka",
      description: "Specializing in Business Intelligence and Data Analytics",
      current: true
    },
    {
      year: "2020",
      title: "G.C.E Advanced Level",
      institution: "2B C Grade Achievement",
      description: "",
      current: false
    },
    {
      year: "2017",
      title: "G.C.E Ordinary Level",
      institution: "5A B 2C S Outstanding Performance",
      description: "",
      current: false
    }
  ];

  const certifications = [
    {
      title: "Power BI for Beginners",
      description: "Microsoft Power BI fundamentals and advanced data visualization techniques",
      icon: <Award className="text-gold" size={24} />
    },
    {
      title: "Business Analysis Foundations",
      description: "LinkedIn Learning - Core business analysis principles and methodologies",
      icon: <Award className="text-gold" size={24} />
    },
    {
      title: "Python for Beginners",
      description: "University of Moratuwa - Programming fundamentals and data analysis with Python",
      icon: <Award className="text-gold" size={24} />
    },
    {
      title: "Digital Business Development",
      description: "Professional diploma in modern digital business strategies",
      icon: <Award className="text-gold" size={24} />
    },
    {
      title: "Business Project Management",
      description: "Professional diploma in project management methodologies",
      icon: <Award className="text-gold" size={24} />
    },
    {
      title: "Diploma in English",
      description: "Advanced English proficiency for professional communication",
      icon: <Award className="text-gold" size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Continuous learning and professional development in technology and business analysis
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-navy mb-8 text-center">Education</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gold"></div>
              
              {educationTimeline.map((item, index) => (
                <div key={item.title} className="relative flex items-center mb-8">
                  <div className={`absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 ${item.current ? 'bg-gold' : 'bg-navy'} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                    <Card className={`bg-light-gray shadow-lg ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-2">
                          <Calendar className="text-gold mr-2" size={16} />
                          <div className="text-gold font-semibold">{item.year}</div>
                        </div>
                        <h4 className="text-xl font-semibold text-navy flex items-center">
                          <GraduationCap className="mr-2" size={20} />
                          {item.title}
                        </h4>
                        <p className="text-charcoal">{item.institution}</p>
                        {item.description && (
                          <p className="text-sm text-charcoal mt-2">{item.description}</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-navy mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className={`bg-light-gray shadow-lg card-hover ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {cert.icon}
                    <h4 className="text-lg font-semibold text-navy ml-3">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="text-charcoal text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
