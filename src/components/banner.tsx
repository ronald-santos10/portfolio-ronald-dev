import { Button } from "./ui/button";
import vector from "../../public/Vector.webp";
import { Stacks } from "./stacks";
import { Reveal } from "./animations/reveal";
import { Opacity } from "./animations/opacity";

export function Banner() {
  const downloadPDF = () => {
    const pdfPath = "/cv.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "curriculo-ronald-santos.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      id="home-section"
      className="flex flex-col justify-between gap-10 md:items-center  md:gap-56 md:flex-row"
    >
      <div className="flex flex-col gap-6  md:items-start md:gap-8">
        <Reveal>
          <span className="text-xl text-neutral-50   md:text-2xl">
            Prazer, sou{" "}
            <span className="text-primary font-bold">Ronald Santos</span>
          </span>
        </Reveal>
        <Reveal>
          <h1 className="text-5xl font-bold text-neutral-50  md:text-6xl">
            Desenvolvedor Front-end e Web Designer
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center gap-4 md:gap-8">
            <a href="#contact-section">
              <Button label="Entre em contato" color="primary" />
            </a>
            <Button
              label="Download CV"
              onClick={downloadPDF}
              color="secundary"
            />
          </div>
        </Reveal>
        <Stacks />
      </div>
      <div className="md:w-2/5">
        <Opacity delay={0.1}>
          <img
            src={vector}
            alt="Desenvolvedor Front-end e Web Designer"
            className="w-48  md:w-auto"
          />
        </Opacity>
      </div>
    </div>
  );
}
