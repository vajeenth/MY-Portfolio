import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const projects = [
    {
      title: "Patient Monitoring System",
      description: "AI-powered healthcare solution for real-time patient monitoring with predictive analytics and automated alert systems.",
      image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "AI/ML", "Healthcare"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Carrier Connect Platform",
      description: "Professional networking platform connecting job seekers with employers through intelligent matching algorithms and skill assessments.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Business Intelligence", "Networking"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Interactive Horror Website",
      description: "Immersive web experience featuring advanced animations, interactive storytelling, and dynamic user engagement elements.",
      image: "https://images.unsplash.com/photo-1611673982975-b68f09c3d9c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML/CSS", "UI/UX", "Interactive"],
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Showcasing innovative solutions that combine business intelligence with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`bg-white shadow-lg overflow-hidden card-hover group ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {project.title}
                </h3>
                <p className="text-charcoal mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant={techIndex === 0 ? "default" : techIndex === 1 ? "secondary" : "outline"}
                      className={
                        techIndex === 0
                          ? "bg-navy text-white"
                          : techIndex === 1
                          ? "bg-gold text-navy"
                          : "text-charcoal"
                      }
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    variant="link"
                    className="text-navy hover:text-gold p-0"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="link"
                    className="text-navy hover:text-gold p-0"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
