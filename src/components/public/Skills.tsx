import { Radar, Youtube } from "lucide-react";
import { C, JavaScript, KaliLinux, Linux, Nextjs, Python, React, Tailwind } from "./Icons";
import c from '@/components/public/img/c.png'
interface SkillsProps {
  icon: JSX.Element;
  name: string;
}

const skills: SkillsProps[] = [
  {
    icon: <Nextjs />,
    name: "Sponsor 1",
  },
  {
    icon: <JavaScript />,
    name: "Sponsor 2",
  },
  {
    icon: <Tailwind />,
    name: "Sponsor 3",
  },
  {
    icon: <Python />,
    name: "Sponsor 4",
  },
  {
    icon: <C />,
    name: "Sponsor 5",
  },
  {
    icon: <React />,
    name: "Sponsor 6",
  },
  {
    icon: <KaliLinux/>,
    name: "Sponsor 6",
  },
  {
    icon: <Linux/>,
    name: "Sponsor 6",
  },
];

export default function Skill(){
  return (
    <div
      id="skills"
      className="container pt-24 sm:py-32 shadow-2xl"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Top Skills
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {skills.map(({ icon, name }: SkillsProps) => (
          <div
            key={name}
            className="flex items-center gap-10 text-muted-foreground/60 hover:scale-150"
          >
            <span>{icon}</span>
            {/* <div className="text-xl  font-bold">{name}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
