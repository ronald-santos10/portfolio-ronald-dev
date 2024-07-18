import logo from "../../public/images/logo/logo.svg";

export function Header() {
  return (
    <div className="bg-neutral-900 py-6 w-ful">
      <div className="flex flex-col gap-5 items-center mx-auto max-w-7xl md:flex-row md:justify-between">
        <img src={logo} alt="Logo" className="w-40" />
        <div className="text-neutral-50 flex items-center gap-6 justify-center">
          <a href="#about-section">
            <span className="cursor-pointer transition duration-500 ease-in-out hover:text-primary">
              Sobre mim
            </span>
          </a>
          <a href="#projects-section">
            <span className="cursor-pointer transition duration-500 ease-in-out hover:text-primary">
              Projetos
            </span>
          </a>
          <a href="#certification-section">
            <span className="cursor-pointer transition duration-500 ease-in-out hover:text-primary">
              Certificações
            </span>
          </a>
          <a href="#contact-section">
            <span className="cursor-pointer transition duration-500 ease-in-out hover:text-primary">
              Contato
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
