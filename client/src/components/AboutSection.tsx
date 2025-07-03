import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users } from "lucide-react";

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-navy mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? "animate-slideInLeft" : "opacity-0"}>
            <h3 className="text-2xl font-semibold text-navy mb-6">
              Business Intelligence Specialist
            </h3>
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              Currently pursuing Bachelor of ICT at UVA Wellassa University, specializing in Business Intelligence. 
              As a Business Analyst Intern at IYKONS Business Services, I transform complex data into strategic insights 
              that drive business success.
            </p>
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              My expertise spans data visualization, business analysis, and UI/UX design, with a strong focus on 
              AI tool integration. I bridge the gap between technology and business strategy, ensuring that 
              data-driven decisions lead to measurable outcomes.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="text-navy mr-2" size={20} />
                    <div className="text-3xl font-bold text-navy">3+</div>
                  </div>
                  <div className="text-charcoal">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <Users className="text-navy mr-2" size={20} />
                    <div className="text-3xl font-bold text-navy">15+</div>
                  </div>
                  <div className="text-charcoal">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className={isVisible ? "animate-slideInRight" : "opacity-0"}>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-navy mb-6">Core Competencies</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <TrendingUp className="text-gold mr-3" size={20} />
                    <span>Business Intelligence & Data Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gold rounded mr-3 flex items-center justify-center">
                      <span className="text-xs text-navy font-bold">AI</span>
                    </div>
                    <span>AI Tools Integration & Automation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gold rounded mr-3"></div>
                    <span>UI/UX Design & User Research</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gold rounded mr-3"></div>
                    <span>Web Development & Programming</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gold rounded mr-3"></div>
                    <span>Process Modeling & Requirements Gathering</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
