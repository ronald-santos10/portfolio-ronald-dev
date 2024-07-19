import { Button } from "./button";
import photo from "../../public/images/photo.png";
import { Stacks } from "./stacks";
import { Reveal } from "./animations/reveal";
import { Opacity } from "./animations/opacity";
import cv from "../../public/cv/cv.pdf"

export function Banner() {
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = cv; //
    link.download = cv;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="about-section"
      className="my-20 flex flex-col-reverse items-center justify-between gap-10  md:gap-56 md:flex-row md:my-28"
    >
      <div className="flex flex-col gap-6 items-center  md:items-start md:gap-7">
        <Reveal>
          <h1 className="text-4xl font-bold text-primary  md:text-6xl">
            Ronald Santos
          </h1>
        </Reveal>
        <Reveal>
          <span className="text-sm text-neutral-50 font-semibold  md:text-2xl">
            Desenvolvedor Front-end
          </span>
        </Reveal>
        <Reveal>
          <p className="text-neutral-50 font-light text-justify max-w-sm md:max-w-2xl">
            Olá, tudo bem? Me chamo Ronald Santos, tenho 22 anos e sou{" "}
            <strong className="font-bold">Desenvolvedor Front-end</strong>,
            trabalho com as linguagens e stacks mais atuais do mercado. Possuo
            experiência em{" "}
            <strong className="font-bold">
              React, React Native, Nextjs, Javascript, Typescript, Nodejs,
              Tailwind, Sass, Bootstrap.
            </strong>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center gap-8">
            <a href="#contact-section">
              <Button variant="primary">Entre em contato</Button>
            </a>
            <Button onClick={downloadCv} variant="secundary">
              Download CV
            </Button>
          </div>
        </Reveal>
        <Stacks />
      </div>
      <Opacity delay={0.1}>
        <img src={photo} alt="foto de Ronald" className="w-56  md:w-auto" />
      </Opacity>
    </div>
  );
}
