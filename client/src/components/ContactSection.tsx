import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-navy" size={24} />,
      title: "Phone",
      value: "+94 76 544 1695",
      link: "tel:+94765441695"
    },
    {
      icon: <Mail className="text-navy" size={24} />,
      title: "Email",
      value: "vajeenth13052001@gmail.com",
      link: "mailto:vajeenth13052001@gmail.com"
    },
    {
      icon: <MapPin className="text-navy" size={24} />,
      title: "Location",
      value: "Thumpalai, Point Pedro, Sri Lanka",
      link: null
    },
    {
      icon: <FaLinkedin className="text-navy" size={24} />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com"
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Ready to transform your business with data-driven insights? Let's discuss your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`text-white ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-gold hover:text-yellow-300 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white/90">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={isVisible ? "animate-slideInRight" : "opacity-0"}>
            <Card className="glass-effect border border-white/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/20 border border-white/30 text-white placeholder-white/70 focus:border-gold"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/20 border border-white/30 text-white placeholder-white/70 focus:border-gold"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="bg-white/20 border border-white/30 text-white placeholder-white/70 focus:border-gold"
                  />
                  <Textarea
                    rows={5}
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-white/20 border border-white/30 text-white placeholder-white/70 focus:border-gold resize-none"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gold text-navy hover:bg-yellow-500 font-semibold"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
