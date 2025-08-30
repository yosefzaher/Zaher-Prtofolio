import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Engineering Student & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m <span className="font-semibold">Yosef Ahmed Mohamed Abd Al-Fattah Zaher</span>, 
              a third-year Computer Engineering student at Mansoura University with a strong 
              foundation in Software Engineering, Embedded Systems, and Cloud Computing.
            </p>

            <p className="text-muted-foreground">
              Currently, I’m expanding my expertise in <span className="font-semibold">Cloud 
              and DevOps</span> while also having solid hands-on experience in 
              <span className="font-semibold"> Embedded Systems</span>. I enjoy problem solving 
              and building impactful projects that merge software and hardware to create 
              real-world solutions.
            </p>

            <p className="text-muted-foreground">
              Besides my technical journey, I’ve led teams and managed projects as a 
              <span className="font-semibold"> Technical Director</span> at Mansoura Robotics Club, 
              gaining strong leadership and collaboration skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Yosef_Zaher_Software_Engineer_CV.pdf"
                download="Yosef_Zaher_Software_Engineer_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Embedded Systems</h4>
                  <p className="text-muted-foreground">
                    Experience in C, Embedded C, Microcontrollers, and interfacing sensors, 
                    drivers, and embedded Linux.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
                  <p className="text-muted-foreground">
                    Focusing on Cloud Computing and DevOps practices, with hands-on 
                    experience in Linux, Git/GitHub, and automation.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Leadership & Projects</h4>
                  <p className="text-muted-foreground">
                    Led teams as Technical Director, managed robotics projects, and 
                    delivered training sessions in Embedded Systems & Programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
