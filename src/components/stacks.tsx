import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IconContext } from "react-icons";

export function Stacks() {
  return (
    <div className="flex flex-col gap-7">
      <h3 className="text-neutral-50 text-sm md:text-2xl">
        Minhas Stacks e Tecnologias:
      </h3>
      <div className="flex items-center gap-5 md:gap-14">
        <IconContext.Provider
          value={{ className: "text-primary size-32 md:size-14" }}
        >
          <SiJavascript />
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "text-primary size-32 md:size-14" }}
        >
          <SiTypescript />
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "text-primary size-32 md:size-14" }}
        >
          <SiReact />
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "text-primary size-32 md:size-14" }}
        >
          <SiNextdotjs />
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "text-primary size-32 md:size-14" }}
        >
          <SiTailwindcss />
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "text-primary size-32 md:size-14" }}
        >
          <SiNodedotjs />
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "text-primary size-32 md:size-14" }}
        >
          <SiHtml5 />
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "text-primary size-32 md:size-14" }}
        >
          <SiCss3 />
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "text-primary size-32 md:size-14" }}
        >
          <SiSass />
        </IconContext.Provider>

        <IconContext.Provider
          value={{ className: "text-primary size-32 md:size-14" }}
        >
          <SiBootstrap />
        </IconContext.Provider>
      </div>
    </div>
  );
}
