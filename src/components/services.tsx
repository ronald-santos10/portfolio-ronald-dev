export const Services = () => {
  return (
    <div
      id="service-section"
      className="flex flex-col gap-8 md:gap-16"
    >
      <h2 className="text-neutral-50 text-3xl  md:text-4xl md:text-start">
        Meus <span className="text-primary font-bold">serviços</span>
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <tbody>
            <tr className="flex flex-col md:table-row">
              <td className="text-lg md:text-2xl font-medium text-neutral-50 py-2 md:py-4 md:border-b md:border-neutral-900 text-left  md:w-1/2">
                <h3>Design de Sites e Apps</h3>
              </td>
              <td className="text-base md:text-xl font-light text-neutral-50 py-2 md:py-4 border-b border-neutral-900 text-left md:w-1/2">
                <p>
                  Criação de <strong>interfaces atraentes e funcionais</strong>,
                  focadas na <strong>experiência do usuário</strong>.
                  Desenvolvemos layouts que conectam e facilitam a navegação
                  para tornar cada interação intuitiva e memorável.
                </p>
              </td>
            </tr>
            <tr className="flex flex-col md:table-row">
              <td className="text-lg md:text-2xl font-medium text-neutral-50 py-2 md:py-4 md:border-b md:border-neutral-900 text-left  md:w-1/2">
                <h3>Desenvolvimento Web</h3>
              </td>
              <td className="text-base md:text-xl font-light text-neutral-50 py-2 md:py-4 border-b border-neutral-900 text-left md:w-1/2">
                <p>
                  Construção de <strong>sites</strong> e{" "}
                  <strong>sistemas robustos</strong>, com{" "}
                  <strong>tecnologias modernas</strong> para desempenho e
                  segurança. Entregamos plataformas otimizadas para garantir{" "}
                  <strong>eficiência e escalabilidade</strong>.
                </p>
              </td>
            </tr>
            <tr className="flex flex-col md:table-row">
              <td className="text-lg md:text-2xl font-medium text-neutral-50 py-2 md:py-4 md:border-b md:border-neutral-900 text-left  md:w-1/2">
                <h3>Identidade Visual</h3>
              </td>
              <td className="text-base md:text-xl font-light text-neutral-50 py-2 md:py-4 border-b border-neutral-900 text-left md:w-1/2">
                <p>
                  Desenvolvimento de uma{" "}
                  <strong>identidade visual única</strong> que reflete a{" "}
                  <strong>essência e valores da sua marca</strong>. Criação de{" "}
                  <strong>logos</strong>, paleta de cores e elementos gráficos
                  para garantir presença forte e coesa.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
