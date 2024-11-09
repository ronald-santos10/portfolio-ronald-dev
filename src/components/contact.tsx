import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import { Reveal } from "./animations/reveal";
import { Opacity } from "./animations/opacity";

export function Contact() {
  return (
    <div
      id="contact-section"
      className=" flex-col-reverse justify-center items-center gap-7 md:flex md:flex-row"
    >
      <div className="flex flex-col gap-4 items-center  md:gap-7">
        <Reveal>
          <h2 className="text-neutral-50 text-3xl md:text-5xl text-center  md:text-start">
            Vamos <span className="text-primary font-bold">conversar?</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-neutral-50 font-light text-justify md:text-2xl">
            Aqui estão meus contatos e minhas redes sociais.
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-3  md:gap-7 md:justify-start">
          <Opacity delay={0.1}>
            <a href="https://wa.me/5575999887328" target="_blanck">
              <div className="bg-neutral-900 border-2 border-neutral-800 rounded-lg md:rounded-2xl p-3 md:p-5">
                <IconContext.Provider
                  value={{ className: "text-primary size-9 md:size-16" }}
                >
                  <SiWhatsapp />
                </IconContext.Provider>
              </div>
            </a>
          </Opacity>
          <Opacity delay={0.2}>
            <a
              href="https://www.instagram.com/ronaldd_santoss/"
              target="_blanck"
            >
              <div className="bg-neutral-900 border-2 border-neutral-800 rounded-lg md:rounded-2xl p-3 md:p-5">
                <IconContext.Provider
                  value={{ className: "text-primary size-9 md:size-16" }}
                >
                  <SiInstagram />
                </IconContext.Provider>
              </div>
            </a>
          </Opacity>
          <Opacity delay={0.3}>
            <a href="mailto:ronalddesign10@gmail.com" target="_blanck">
              <div className="bg-neutral-900 border-2 border-neutral-800 rounded-lg md:rounded-2xl p-3 md:p-5">
                <IconContext.Provider
                  value={{ className: "text-primary size-9 md:size-16" }}
                >
                  <MdOutlineEmail />
                </IconContext.Provider>
              </div>
            </a>
          </Opacity>
          <Opacity delay={0.4}>
            <a
              href="https://www.linkedin.com/in/ronald-santos-5774ba198/"
              target="_blanck"
            >
              <div className="bg-neutral-900 border-2 border-neutral-800 rounded-lg md:rounded-2xl p-3 md:p-5">
                <IconContext.Provider
                  value={{ className: "text-primary size-9 md:size-16" }}
                >
                  <SiLinkedin />
                </IconContext.Provider>
              </div>
            </a>
          </Opacity>
          <Opacity delay={0.4}>
            <a href="https://github.com/ronald-santos10" target="_blanck">
              <div className="bg-neutral-900 border-2 border-neutral-800 rounded-lg md:rounded-2xl p-3 md:p-5">
                <IconContext.Provider
                  value={{ className: "text-primary size-9 md:size-16" }}
                >
                  <SiGithub />
                </IconContext.Provider>
              </div>
            </a>
          </Opacity>
        </div>
      </div>
    </div>
  );
}
