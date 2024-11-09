import logo from "../../public/images/logo/logo.svg";

export const Footer = () => {
  return (
    <div className="border-t border-neutral-900">
      <div className="py-8 mx-auto max-w-7xl px-5  md:px-0 flex flex-col gap-4 md:flex-row md:justify-between">
        <img className="w-36" src={logo} alt="Logo Ronalddev" />
        <p className="text-neutral-50 text-xs md:text-base">Copyright © 2024. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};
