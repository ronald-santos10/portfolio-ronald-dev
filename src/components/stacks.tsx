import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IconContext } from "react-icons";
import { Opacity } from "./animations/opacity";

export function Stacks() {
  return (
    <div className="flex gap-4 flex-wrap justify-center  md:justify-start">
      <Opacity delay={0.1}>
        <div className="flex items-center gap-2 bg-neutral-900 rounded-3xl px-4 py-2 cursor-pointer ">
          <IconContext.Provider value={{ className: "text-primary size-4" }}>
            <SiJavascript />
          </IconContext.Provider>
          <p className="text-neutral-50 text-xs">Javascript</p>
        </div>
      </Opacity>
      <Opacity delay={0.2}>
        <div className="flex items-center gap-2 bg-neutral-900 rounded-3xl px-4 py-2 cursor-pointer ">
          <IconContext.Provider value={{ className: "text-primary size-4" }}>
            <SiTypescript />
          </IconContext.Provider>
          <p className="text-neutral-50 text-xs">Typescript</p>
        </div>
      </Opacity>
      <Opacity delay={0.3}>
        <div className="flex items-center gap-2 bg-neutral-900 rounded-3xl px-4 py-2 cursor-pointer ">
          <IconContext.Provider value={{ className: "text-primary size-4" }}>
            <SiReact />
          </IconContext.Provider>
          <p className="text-neutral-50 text-xs">React</p>
        </div>
      </Opacity>
      <Opacity delay={0.4}>
        <div className="flex items-center gap-2 bg-neutral-900 rounded-3xl px-4 py-2 cursor-pointer ">
          <IconContext.Provider value={{ className: "text-primary size-4" }}>
            <SiNextdotjs />
          </IconContext.Provider>
          <p className="text-neutral-50 text-xs">Nextjs</p>
        </div>
      </Opacity>
      <Opacity delay={0.5}>
        <div className="flex items-center gap-2 bg-neutral-900 rounded-3xl px-4 py-2 cursor-pointer ">
          <IconContext.Provider value={{ className: "text-primary size-4" }}>
            <SiTailwindcss />
          </IconContext.Provider>
          <p className="text-neutral-50 text-xs">Tailwind</p>
        </div>
      </Opacity>
    </div>
  );
}
