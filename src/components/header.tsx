import logo from '../../public/images/logo/logo.svg'

export function Header() {
  return (
    <div className="bg-neutral-900 py-6 w-full border-solid border-2 border-neutral-800">
      <div className="flex flex-col gap-5 items-center mx-auto max-w-7xl md:flex-row md:justify-between">
        <img src={logo} alt="Logo" className="w-40" />
        <div className="text-neutral-50 flex items-center gap-6 justify-center">
          <span className='cursor-pointer transition duration-500 ease-in-out hover:text-primary'>Sobre mim</span>
          <span className='cursor-pointer transition duration-500 ease-in-out hover:text-primary'>Projetos</span>
          <span className='cursor-pointer transition duration-500 ease-in-out hover:text-primary'>Experiência</span>
          <span className='cursor-pointer transition duration-500 ease-in-out hover:text-primary'>Contato</span>
        </div>
      </div>
    </div>
  );
}
