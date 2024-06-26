import { technologies } from "@/constants";
import BallCanvas from "./canvas/Ball";

const Skills = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-4">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} name={technology.name}/>
        </div>
      ))}
    </div>
  );
};

export default Skills;
