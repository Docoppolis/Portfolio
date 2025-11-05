import docker from "../assets/Docker.png";
import cpp from "../assets/CPP.png";
import react from "../assets/React.png";
import micronaut from "../assets/Micronaut.png";
import unrealEngine from "../assets/UnrealEngine.png";
import node from "../assets/Node.png";
import git from "../assets/Git.png";
import gitHub from "../assets/GitHub.png";
import python from "../assets/Python.png";
import postgreSQL from "../assets/PostgreSQL.png";
import scrum from "../assets/Scrum.png";
import cs from "../assets/CS.png";
import postman from "../assets/Postman.png";
import sql from "../assets/SQL.png";
import java from "../assets/Java.png";
import next from "../assets/Next.png";

export default function Skills() {
  const skills = [
    { src: docker, name: "Docker" },
    { src: cpp, name: "C++" },
    { src: react, name: "React" },
    { src: micronaut, name: "Micronaut" },
    { src: unrealEngine, name: "Unreal Engine" },
    { src: node, name: "Node.js" },
    { src: git, name: "Git" },
    { src: gitHub, name: "GitHub" },
    { src: python, name: "Python" },
    { src: postgreSQL, name: "PostgreSQL" },
    { src: scrum, name: "Agile / Scrum" },
    { src: cs, name: "C#" },
    { src: postman, name: "Postman" },
    { src: sql, name: "SQL" },
    { src: java, name: "Java" },
    { src: next, name: "Next.js" },
  ];

  return (
    
    <div className="w-full px-4 sm:px-8 py-10 flex flex-col justify-center items-center">
      <div className="lg:hidden text-white/70 text-lg font-semibold text-center mb-8"> Skills</div>
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3
          xl:grid-cols-4
          gap-6 
          justify-items-center
        "
      >
        {skills.map(({ src, name }) => (
          <div
            key={name}
            className="
              flex flex-col items-center justify-center
              w-36 sm:w-40 h-24
              rounded-2xl bg-transparent border border-violet-500
              transition-all duration-300 ease-in-out
              hover:scale-[1.08]
              hover:shadow-[0_0_0_3px_rgba(139,92,246,0.6)]
              hover:bg-slate-800/75
            "
          >
            <img className="w-12 h-10 mb-1 object-contain" src={src} alt={`${name} logo`} />
            <h1 className="text-slate-100 font-bold text-xs text-center">{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
