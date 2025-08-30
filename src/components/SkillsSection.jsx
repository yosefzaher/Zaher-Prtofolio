import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Embedded
  { name: "Arduino", level: 80, category: "embedded" },
  { name: "Raspberry Pi", level: 60, category: "embedded" },
  { name: "C/C++", level: 80, category: "embedded" },
  { name: "ATmega32", level: 70, category: "embedded" },
  { name: "PIC18F", level: 70, category: "embedded" },

  // Cloud & DevOps
  { name: "AWS", level: 75, category: "cloud" },
  { name: "CCNA", level: 60, category: "cloud" },
  { name: "Linux", level: 70, category: "cloud" },
  { name: "Git/GitHub", level: 75, category: "software" },

  // Software Engineering
  { name: "Algorithms", level: 80, category: "software" },
  { name: "Data Structures", level: 85, category: "software" },
  { name: "OOP", level: 80, category: "software" },
  { name: "Python", level: 80, category: "software" },
  { name: "HTML", level: 60, category: "software" },
  { name: "CSS", level: 60, category: "software" },

  // Tools
  { name: "Packet Tracer", level: 60, category: "tools" },
  { name: "Protus", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "MPLAB", level: 80, category: "tools" },
  { name: "Code Blocks", level: 70, category: "tools" },

];

const categories = ["all", "embedded", "cloud", "software", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
