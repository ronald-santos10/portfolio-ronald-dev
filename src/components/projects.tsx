import { Button } from "./button";
import data from "./projectList.json";

export function Projects() {
  return (
    <div className="my-24 flex flex-col gap-7">
      <h3 className="text-neutral-50 text-xl  md:text-2xl">
        Projetos em destaque
      </h3>
      <div className="h-px bg-neutral-800"></div>

      <ul className="flex flex-wrap gap-7">
        {data.map((item) => (
          <li key={item.id}>
            <div className="flex flex-col gap-7 bg-neutral-900 p-6 rounded-xl max-w-sm">
              <img
                src={item.image}
                alt={item.alt}
                className="rounded-xl max-w-96 max-h-52"
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-primary text-2xl font-bold">
                  {item.title}
                </h2>
                <p className="text-neutral-50 text-xs font-light text-justify max-w-sm md:max-w-2xl">
                  {item.description}
                </p>
                <div className="flex items-center gap-8">
                  <a href={item.deploy} target="_blank">
                    <Button variant="primary">Ver mais</Button>
                  </a>
                  <a href={item.github} target="_blank">
                    <Button variant="secundary">Ver no Github</Button>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
