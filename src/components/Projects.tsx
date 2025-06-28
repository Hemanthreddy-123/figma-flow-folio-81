
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI-Based Attendance Management System",
      description: "Developed an automated web-based attendance system using facial recognition to reduce manual tracking errors and save time with real-time data updates.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      technologies: ["Python", "OpenCV", "Machine Learning", "Face Recognition", "Real-time Processing"],
      features: [
        "Facial recognition for automated attendance",
        "Real-time data updates for instant access",
        "User-friendly interface for administrators and students",
        "Detailed attendance reports for monitoring and analysis"
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML Project",
      company: "Personal Project | Web Development & Automation"
    },
    {
      title: "Real-time College Bus Tracking System", 
      description: "Built a comprehensive bus tracking solution with GPS-based live location tracking, interactive maps, and cross-platform compatibility for enhanced commuter experience.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
      technologies: ["Web Development", "GPS Integration", "Interactive Maps", "Responsive Design", "Real-time Systems"],
      features: [
        "GPS-based live bus tracking",
        "Interactive map interface",
        "Cross-platform compatibility", 
        "Route visibility and timing optimization"
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application",
      company: "VALUELADIES | Jan 2024 - Feb 2024"
    },
    {
      title: "Student Attendance Management System",
      description: "Comprehensive attendance management solution with automated tracking, real-time updates, and detailed reporting capabilities for educational institutions.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      technologies: ["Web Development", "Database Management", "Automation", "Reporting", "User Interface Design"],
      features: [
        "Automated attendance tracking system",
        "Real-time data updates and synchronization",
        "User-friendly interface for easy navigation",
        "Detailed attendance reports and analytics"
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application",
      company: "Personal Project | Web Development & Automation"
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
            A showcase of my recent work in AI, web development, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  {project.description}
                </p>
                <p className="text-xs text-blue-600 font-medium">
                  {project.company}
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
