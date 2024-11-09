import { Opacity } from "./animations/opacity";
import { Reveal } from "./animations/reveal";

export const About = () => {
  return (
    <div
      id="about-section"
      className="flex flex-col-reverse items-center gap-8 md:flex-row-reverse md:justify-between"
    >
      <div className="md:w-3/5">
        <Reveal>
          <p className=" text-neutral-50 text-lg md:text-2xl font-light">
            Sou <strong>Ronald Santos</strong>,{" "}
            <strong>Desenvolvedor Front-end</strong> e{" "}
            <strong>Web Designer</strong> com 22 anos. Iniciei no{" "}
            <strong>design</strong> em 2019, criando{" "}
            <strong>identidades visuais</strong> e{" "}
            <strong>materiais de papelaria</strong> para negócios locais.
            Formado em <strong>Análise e Desenvolvimento de Sistemas</strong>,
            hoje me especializo em <strong>desenvolvimento web</strong> com
            tecnologias atuais, como <strong>React</strong>,{" "}
            <strong>Next.js</strong>, <strong>JavaScript</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Node.js</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>WordPress</strong> e{" "}
            <strong>Elementor</strong>, para oferecer{" "}
            <strong>soluções digitais completas e impactantes</strong>.
          </p>
        </Reveal>
      </div>
      <div>
        <Opacity>
          <img
            src="../../public/images/foto-ronald.webp"
            alt="Desenvolvedor Front-end e Web Designer"
            className="w-72  md:w-auto"
          />
        </Opacity>
      </div>
    </div>
  );
};
