import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Layout, Users, Smartphone, Monitor, Figma } from "lucide-react";

export default function UIUXShowcase() {
  const { ref, isVisible } = useIntersectionObserver();

  const designProjects = [
    {
      title: "Healthcare Dashboard",
      description: "Patient monitoring interface with intuitive data visualization and real-time alerts",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      tools: ["Figma", "User Research", "Prototyping"],
      category: "Web App",
      process: ["Research", "Wireframing", "Prototyping", "Testing"]
    },
    {
      title: "Career Platform Mobile",
      description: "Job matching app with seamless user experience and intelligent recommendations",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      tools: ["Mobile Design", "UX Research", "Interaction Design"],
      category: "Mobile App",
      process: ["User Journey", "Wireframes", "High-Fidelity", "Handoff"]
    },
    {
      title: "Business Analytics Portal",
      description: "Enterprise dashboard for data-driven decision making with custom visualizations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      tools: ["Dashboard Design", "Data Visualization", "User Testing"],
      category: "Enterprise",
      process: ["Stakeholder Interviews", "Information Architecture", "Design System", "Implementation"]
    }
  ];

  const designSkills = [
    {
      icon: <Palette className="text-gold" size={32} />,
      title: "Visual Design",
      description: "Color theory, typography, and brand consistency across all touchpoints",
      proficiency: 85
    },
    {
      icon: <Layout className="text-gold" size={32} />,
      title: "Information Architecture",
      description: "Organizing content and features for optimal user flow and navigation",
      proficiency: 90
    },
    {
      icon: <Users className="text-gold" size={32} />,
      title: "User Research",
      description: "Conducting interviews, surveys, and usability testing for data-driven design",
      proficiency: 88
    },
    {
      icon: <Smartphone className="text-gold" size={32} />,
      title: "Mobile Design",
      description: "Creating responsive and touch-friendly interfaces for mobile platforms",
      proficiency: 82
    },
    {
      icon: <Monitor className="text-gold" size={32} />,
      title: "Web Design",
      description: "Designing modern web interfaces with focus on accessibility and performance",
      proficiency: 87
    },
    {
      icon: <Figma className="text-gold" size={32} />,
      title: "Design Tools",
      description: "Proficient in Figma, Adobe Creative Suite, and prototyping tools",
      proficiency: 85
    }
  ];

  return (
    <section id="uiux-showcase" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-navy mb-4">UI/UX Design Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Creating user-centered designs that combine aesthetic appeal with functional excellence
          </p>
        </div>

        {/* Design Skills Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-navy mb-12 text-center">Design Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designSkills.map((skill, index) => (
              <Card
                key={skill.title}
                className={`bg-white shadow-lg card-hover border-t-4 border-t-gold ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h4 className="text-xl font-semibold text-navy ml-3">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-charcoal mb-4 text-sm">{skill.description}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-charcoal">Proficiency</span>
                    <span className="text-sm text-charcoal">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-gold to-yellow-500 h-2 rounded-full transition-all duration-2000 ease-out"
                      style={{ width: isVisible ? `${skill.proficiency}%` : '0%' }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-navy mb-12 text-center">Featured Design Work</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <Card
                key={project.title}
                className={`bg-white shadow-lg overflow-hidden card-hover group ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gold text-navy font-semibold">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-navy mb-3">
                    {project.title}
                  </h4>
                  <p className="text-charcoal mb-4 text-sm">{project.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-navy mb-2">Design Process</h5>
                    <div className="flex flex-wrap gap-1">
                      {project.process.map((step, stepIndex) => (
                        <Badge
                          key={step}
                          variant="outline"
                          className="text-xs text-charcoal border-gold"
                        >
                          {stepIndex + 1}. {step}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool}
                        className="bg-navy text-white text-xs"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full text-navy border-navy hover:bg-navy hover:text-white"
                  >
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Process */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-navy to-blue-800 text-navy">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">My Design Philosophy</h3>
              <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                "Great design is not just about making things look beautiful—it's about creating 
                meaningful experiences that solve real problems and delight users at every interaction."
              </p>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">01</div>
                  <h4 className="text-lg font-semibold mb-2">Research</h4>
                  <p className="text-sm opacity-90">Understanding user needs and business goals</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">02</div>
                  <h4 className="text-lg font-semibold mb-2">Ideate</h4>
                  <p className="text-sm opacity-90">Brainstorming solutions and creating concepts</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">03</div>
                  <h4 className="text-lg font-semibold mb-2">Prototype</h4>
                  <p className="text-sm opacity-90">Building and testing interactive prototypes</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">04</div>
                  <h4 className="text-lg font-semibold mb-2">Iterate</h4>
                  <p className="text-sm opacity-90">Refining based on feedback and testing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}