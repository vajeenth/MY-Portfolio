import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, BarChart3, Settings } from "lucide-react";

export default function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Power BI", level: 88 },
    { name: "Data Analysis", level: 92 },
  ];

  const businessSkills = [
    { name: "Business Analysis", level: 95 },
    { name: "UI/UX Design", level: 80 },
    { name: "Project Management", level: 87 },
    { name: "Requirements Gathering", level: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Comprehensive skill set spanning business analysis, data science, and modern web technologies
          </p>
        </div>

        {/* AI Tools Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-navy mb-8 text-center">
            AI Tools & Automation
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg card-hover">
              <CardContent className="p-6 text-center">
                <Brain className="text-4xl text-navy mb-4 mx-auto" size={48} />
                <h4 className="text-xl font-semibold text-navy mb-3">Machine Learning</h4>
                <p className="text-charcoal">Python, TensorFlow, Data Modeling</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg card-hover">
              <CardContent className="p-6 text-center">
                <BarChart3 className="text-4xl text-navy mb-4 mx-auto" size={48} />
                <h4 className="text-xl font-semibold text-navy mb-3">Business Intelligence</h4>
                <p className="text-charcoal">Power BI, Tableau, Advanced Analytics</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg card-hover">
              <CardContent className="p-6 text-center">
                <Settings className="text-4xl text-navy mb-4 mx-auto" size={48} />
                <h4 className="text-xl font-semibold text-navy mb-3">Process Automation</h4>
                <p className="text-charcoal">RPA, Workflow Optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className={isVisible ? "animate-slideInLeft" : "opacity-0"}>
            <h3 className="text-2xl font-semibold text-navy mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-charcoal font-medium">{skill.name}</span>
                    <span className="text-charcoal">{skill.level}%</span>
                  </div>
                  <Progress
                    value={isVisible ? skill.level : 0}
                    className="h-3"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={isVisible ? "animate-slideInRight" : "opacity-0"}>
            <h3 className="text-2xl font-semibold text-navy mb-8">Business & Design Skills</h3>
            <div className="space-y-6">
              {businessSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-charcoal font-medium">{skill.name}</span>
                    <span className="text-charcoal">{skill.level}%</span>
                  </div>
                  <Progress
                    value={isVisible ? skill.level : 0}
                    className="h-3"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
