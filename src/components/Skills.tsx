
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "C", level: 80 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 80 },
      ]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Responsive Design", level: 85 },
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "RDBMS", level: 80 },
        { name: "MongoDB (Basic)", level: 65 },
        { name: "Database Design", level: 75 },
        { name: "Query Optimization", level: 70 },
      ]
    },
    {
      title: "Core Subjects",
      icon: "📚",
      skills: [
        { name: "Operating Systems", level: 85 },
        { name: "Computer Networks", level: 80 },
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "DBMS", level: 85 },
        { name: "Excel (Basic)", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical skills and expertise gained through academic studies and practical projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Machine Learning", "OpenCV", "Facial Recognition", "Real-time Systems", 
              "GPS Integration", "System Design", "Problem Solving", "Team Collaboration"
            ].map((skill) => (
              <div key={skill} className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
