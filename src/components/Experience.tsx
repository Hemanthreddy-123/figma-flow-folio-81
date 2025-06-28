
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "Edunet - AICTE",
      period: "Nov 2024 - Dec 2024",
      location: "Remote",
      description: "Designed and developed an AI-based Attendance Management System using facial recognition for real-time, automated attendance tracking.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Face Recognition", "Real-time Processing"],
      achievements: [
        "Developed facial recognition system with high accuracy",
        "Applied Python, OpenCV, and ML techniques for enhanced recognition",
        "Trained and fine-tuned models for diverse lighting and facial variations",
        "Integrated face detection, preprocessing, and real-time camera input handling"
      ]
    },
    {
      title: "Intern / Project Trainee",
      company: "VALUELADIES",
      period: "Jan 2024 - Feb 2024",
      location: "Hybrid",
      description: "Developed a real-time College Bus Tracking System with user-friendly interface for students and staff, featuring GPS-based tracking and interactive mapping.",
      technologies: ["Web Development", "GPS Integration", "Real-time Systems", "Interactive Maps", "Responsive Design"],
      achievements: [
        "Built real-time bus tracking system with live location updates",
        "Integrated GPS-based tracking for accurate positioning",
        "Ensured cross-platform compatibility and responsive design",
        "Enhanced commuter experience by reducing waiting time and improving route visibility"
      ]
    }
  ];

  const education = {
    degree: "B.Tech (Computer Science and Engineering)",
    institution: "Audisankara College",
    period: "2022 - 2026",
    cgpa: "7.69/10",
    previous: [
      { level: "Class 12th", institution: "Board of Intermediate Education", marks: "577/1000", year: "2021-2022" },
      { level: "Class 10th", institution: "Secondary School of Education", marks: "519/600", year: "2019-2020" }
    ]
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic achievements
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 relative overflow-hidden">
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

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <Card className="hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-600 to-blue-600"></div>
            
            <CardHeader className="ml-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl mb-1">{education.degree}</CardTitle>
                  <div className="text-lg font-semibold text-green-600">{education.institution}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{education.period}</div>
                  <div className="text-sm text-muted-foreground">CGPA: {education.cgpa}</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="ml-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Previous Education:</h4>
                <div className="space-y-2">
                  {education.previous.map((edu, i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <div>
                        <div className="font-medium">{edu.level}</div>
                        <div className="text-sm text-muted-foreground">{edu.institution}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">Marks: {edu.marks}</div>
                        <div className="text-sm text-muted-foreground">{edu.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
