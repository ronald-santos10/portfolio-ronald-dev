import { Button } from "./button";
import photo from '../../public/images/photo.png'

export function Banner() {
  return (
    <div className="my-16 flex flex-col-reverse items-center justify-between gap-10  md:gap-56 md:flex-row md:my-32">
      <div className="flex flex-col gap-4 items-center  md:items-start md:gap-7">
        <h1 className="text-4xl font-bold text-primary  md:text-6xl">Ronald Santos</h1>
        <span className="text-sm text-neutral-50 font-semibold  md:text-2xl">
          Desenvolvedor Freelancer
        </span>
        <p className="text-neutral-50 font-light max-w-sm md:max-w-2xl">
          Olá, tudo bem? Me chamo Ronald Santos, tenho 22 anos e sou{" "}
          <strong className="font-bold">Desenvolvedor Front-end</strong>,
          trabalho com as linguagens e stacks mais atuais do mercado. Possuo
          experiência em React, React Native, Nextjs, Javascript, Typescript,
          Nodejs, Tailwind, Sass, Bootstrap
        </p>
        <div className="flex items-center gap-8">
          <Button variant="primary">Entre em contato</Button>
          <Button variant="secundary">Download CV</Button>
        </div>
      </div>
      <div>
        <img src={photo} alt="foto de Ronald" className="w-52  md:w-auto"/>
      </div>
    </div>
  );
}
