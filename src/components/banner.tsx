import { Button } from "./button";
import photo from '../../public/images/photo.png'

export function Banner() {
  return (
    <div className="flex items-center gap-56 justify-between">
      <div className="flex flex-col gap-7">
        <h1 className="text-6xl font-bold text-primary">Ronald Santos</h1>
        <span className="text-neutral-50 font-semibold text-2xl">
          Desenvolvedor Freelancer
        </span>
        <p className="text-neutral-50 font-light max-w-2xl">
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
        <img src={photo} alt="foto de ROnald" />
      </div>
    </div>
  );
}
