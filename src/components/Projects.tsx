
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      features: ["Real-time inventory", "Payment integration", "Admin dashboard", "Order tracking"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Modern analytics dashboard with AI insights, real-time data visualization, and predictive analytics capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["React", "TypeScript", "Python", "TensorFlow", "D3.js"],
      features: ["AI insights", "Real-time charts", "Predictive analytics", "Custom reports"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Visualization"
    },
    {
      title: "Social Media Mobile App",
      description: "Cross-platform mobile application for social networking with real-time messaging and content sharing.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920",
      technologies: ["React Native", "Firebase", "Node.js", "Socket.io"],
      features: ["Real-time messaging", "Photo sharing", "Push notifications", "Social feeds"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile App"
    },
    {
      title: "Design System & Component Library",
      description: "Comprehensive design system with reusable components, documentation, and design tokens for enterprise applications.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      technologies: ["React", "Storybook", "Figma", "TypeScript", "Sass"],
      features: ["50+ Components", "Design tokens", "Documentation", "Theme support"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Design System"
    },
    {
      title: "Real Estate Platform",
      description: "Modern real estate platform with property listings, virtual tours, and mortgage calculator integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      technologies: ["Next.js", "MongoDB", "Stripe", "Google Maps API"],
      features: ["Property search", "Virtual tours", "Mortgage calculator", "Agent dashboard"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application"
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant healthcare platform for patient management, appointment scheduling, and telemedicine.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
      features: ["Patient records", "Appointment scheduling", "Telemedicine", "HIPAA compliance"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Healthcare"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700">
                  {project.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
