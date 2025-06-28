
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            B.Tech Computer Science student passionate about AI and cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm currently pursuing B.Tech in Computer Science at Audisankara College with a strong focus on 
              Artificial Intelligence and Machine Learning. My passion lies in developing innovative solutions 
              that bridge the gap between cutting-edge AI technology and real-world applications.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With hands-on experience in facial recognition systems, automated attendance management, and 
              real-time tracking applications, I specialize in creating user-friendly interfaces that make 
              complex technology accessible to everyone.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What I Do</h3>
              <div className="flex flex-wrap gap-2">
                {["AI Development", "Machine Learning", "Web Development", "Automation", "Data Analysis", "System Design"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7.69</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Graduation Year</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">AI/ML</div>
                <div className="text-sm text-muted-foreground">Specialization</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
