import { Trophy, Award } from "lucide-react";

const competitions = [
  {
    id: 1,
    title: "YLF Climate Leaders 2",
    description: "First place award for our VerTechX Smart Greenhouse project 🌿.",
    image: "/projects/YLFClimate.jpeg",
    result: "1st Place",
  },
  {
    id: 2,
    title: "ECPC 2024",
    description: "Participation in ECPC 2024. Did not advance but gained valuable experience.",
    image: "/projects/ECPC.jpeg",
    result: "Participant",
  },
];

export const AwardsAndCompetitionsSection = () => {
  return (
    <section id="competitions" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Awards & Competitions </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the competitions I participated in and the awards I achieved.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((comp) => (
            <div
              key={comp.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={comp.image}
                  alt={comp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                  <h3 className="text-xl font-semibold">{comp.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{comp.description}</p>
                <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full bg-primary/20 text-primary">
                  {comp.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
