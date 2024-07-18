import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import { Reveal } from "./animations/reveal";
import { Opacity } from "./animations/opacity";

export function Contact() {
  return (
    <div
      id="contact-section"
      className="my-20 flex-col-reverse justify-center items-center gap-7  md:flex md:flex-row  md:my-32"
    >
      <div className="flex items-center justify-center">
        <Opacity delay={0.1}>
          <img
            src="../../public/images/contact-image.svg"
            alt="Contact Image"
            className="w-60  md:w-auto"
          />
        </Opacity>
      </div>

      <div className="flex flex-col gap-4  md:gap-7">
        <Reveal>
          <h2 className="text-neutral-50 text-4xl font-bold text-center  md:text-start">
            Vamos <span className="text-primary">conversar?</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-neutral-50 font-light text-justify">
            Aqui estão meus contatos e minhas redes sociais, estou sempre
            disposto a conversar!
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-3  md:gap-7 md:justify-start">
          <Opacity delay={0.1}>
            <a href="https://wa.me/5575999887328" target="_blanck">
              <div className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-3">
                <IconContext.Provider
                  value={{ className: "text-primary size-9 md:size-14" }}
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
              <div className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-3">
                <IconContext.Provider
                  value={{ className: "text-primary size-9 md:size-14" }}
                >
                  <SiInstagram />
                </IconContext.Provider>
              </div>
            </a>
          </Opacity>
          <Opacity delay={0.3}>
            <a href="mailto:ronalddesign10@gmail.com" target="_blanck">
              <div className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-3">
                <IconContext.Provider
                  value={{ className: "text-primary size-9 md:size-14" }}
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
              <div className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-3">
                <IconContext.Provider
                  value={{ className: "text-primary size-9 md:size-14" }}
                >
                  <SiLinkedin />
                </IconContext.Provider>
              </div>
            </a>
          </Opacity>
          <Opacity delay={0.4}>
            <a href="https://github.com/ronald-santos10" target="_blanck">
              <div className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-3">
                <IconContext.Provider
                  value={{ className: "text-primary size-9 md:size-14" }}
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
