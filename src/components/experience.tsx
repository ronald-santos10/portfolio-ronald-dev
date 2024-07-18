import data from "./json/experienceList.json";

export function Experience() {
  return (
    <div className="my-24 flex flex-col gap-7">
      <h3 className="text-neutral-50 text-xl text-center  md:text-2xl">
        Experiência profissional
      </h3>
      <div className="h-px bg-neutral-800"></div>
      <ul className="flex flex-col gap-7 justify-center items-center">
        {data.map((item) => (
          <li key={item.id}>
            <div className="flex items-start  gap-4">
              <img src={item.image} alt={item.alt} className="size-8" />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-primary">
                  {item.position}
                </h3>
                <span className="text-neutral-50 text-xs font-bold">
                  {item.companie}
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
