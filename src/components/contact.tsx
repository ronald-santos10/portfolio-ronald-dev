import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IconContext } from "react-icons";

export function Contact() {
  return (
    <div className="my-24 flex-col-reverse justify-center items-center gap-7  md:flex md:flex-row">
        <div className="flex items-center justify-center"><img src="../../public/images/contact-image.svg" alt="Contact Image" className="w-60  md:w-auto"/></div>
      
      <div className="flex flex-col gap-4  md:gap-7">
        <h2 className="text-neutral-50 text-4xl font-bold text-center  md:text-start">
          Vamos <span className="text-primary">conversar?</span>
        </h2>
        <p className="text-neutral-50 font-light text-justify">
          Aqui estão meus contatos e minhas redes sociais, estou sempre disposto
          a conversar!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3  md:gap-7 md:justify-start">
          <a href="https://wa.me/5575999887328" target="_blanck">
            <div className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-3">
              <IconContext.Provider
                value={{ className: "text-primary size-9 md:size-14" }}
              >
                <SiWhatsapp />
              </IconContext.Provider>
            </div>
          </a>
          <a href="https://www.instagram.com/ronaldd_santoss/" target="_blanck">
            <div className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-3">
              <IconContext.Provider
                value={{ className: "text-primary size-9 md:size-14" }}
              >
                <SiInstagram />
              </IconContext.Provider>
            </div>
          </a>
          <a href="mailto:ronalddesign10@gmail.com" target="_blanck">
            <div className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-3">
              <IconContext.Provider
                value={{ className: "text-primary size-9 md:size-14" }}
              >
                <MdOutlineEmail />
              </IconContext.Provider>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ronald-santos-5774ba198/" target="_blanck">
            <div className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-3">
              <IconContext.Provider
                value={{ className: "text-primary size-9 md:size-14" }}
              >
                <SiLinkedin />
              </IconContext.Provider>
            </div>
          </a>
          <a href="https://github.com/ronald-santos10" target="_blanck">
            <div className="bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-3">
              <IconContext.Provider
                value={{ className: "text-primary size-9 md:size-14" }}
              >
                <SiGithub />
              </IconContext.Provider>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
