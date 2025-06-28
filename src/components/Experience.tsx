
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Led development of enterprise web applications serving 100k+ users. Architected scalable microservices and mentored junior developers.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      achievements: [
        "Reduced application load time by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      location: "New York, NY",
      description: "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      achievements: [
        "Delivered 20+ client projects on time",
        "Improved user engagement by 35%",
        "Established design system used across all projects"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "Austin, TX",
      description: "Built and maintained web applications using modern JavaScript frameworks and collaborated in an agile environment.",
      technologies: ["JavaScript", "Vue.js", "Python", "MongoDB"],
      achievements: [
        "Contributed to MVP that secured $2M funding",
        "Improved code quality through testing implementation",
        "Reduced bug reports by 50%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              {/* Timeline indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              <CardHeader className="ml-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                    <div className="text-lg font-semibold text-blue-600">{exp.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{exp.period}</div>
                    <div className="text-sm text-muted-foreground">{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="ml-4 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
