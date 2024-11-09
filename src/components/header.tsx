import logo from "../../public/images/logo/logo.svg";

export function Header() {
  return (
    <div className="py-8 md:py-12 w-ful">
      <div className="flex flex-col gap-5 items-center mx-auto max-w-7xl md:flex-row md:justify-between">
        <img src={logo} alt="Logo" className="w-40" />
        <div className="hidden text-neutral-50 md:flex md:gap-6 items-center justify-center">
          <a href="#home-section">
            <span className="text-xl font-bold cursor-pointer transition duration-500 ease-in-out hover:text-primary">
              início
            </span>
          </a>
          <a href="#about-section">
            <span className="text-xl font-bold cursor-pointer transition duration-500 ease-in-out hover:text-primary">
              Sobre
            </span>
          </a>
          <a href="#work-section">
            <span className="text-xl font-bold cursor-pointer transition duration-500 ease-in-out hover:text-primary">
              Trabalhos
            </span>
          </a>
          <a href="#service-section">
            <span className="text-xl font-bold cursor-pointer transition duration-500 ease-in-out hover:text-primary">
              Serviços
            </span>
          </a>
          <a href="#contact-section">
            <span className="text-xl font-bold cursor-pointer transition duration-500 ease-in-out hover:text-primary">
              Contato
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
