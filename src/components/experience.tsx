import { Opacity } from "./animations/opacity";
import data from "./json/experienceList.json";

export function Experience() {
  return (
    <div id="certification-section" className="my-20 flex flex-col gap-7  md:my-32">
      <Opacity delay={0.1}>
        <h3 className="text-neutral-50 text-xl text-center  md:text-2xl">
          Qualificações e certificados
        </h3>
      </Opacity>
      <div className="h-px bg-neutral-800"></div>
      <ul className="flex flex-wrap mx-auto gap-7 justify-start items-center">
        {data.map((item) => (
          <li key={item.id}>
            <div className="flex gap-7">
              <div className="w-px bg-neutral-800" />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <span className="text-neutral-50 text-xs font-bold">
                  {item.companie}
                </span>
                <span className="text-neutral-50 text-xs font-bold">
                  {item.year}
                </span>
                <p className="text-neutral-50 text-xs font-light text-justify max-w-sm md:max-w-md-">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
