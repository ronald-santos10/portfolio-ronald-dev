import agency from "../../public/images/work/agency.webp";
import blog from "../../public/images/work/blog.webp";
import app from "../../public/images/work/app.webp";
import agencyMobile from "../../public/images/work/agency-mobile.webp";
import blogMobile from "../../public/images/work/blog-mobile.webp";
import appMobile from "../../public/images/work/app-mobile.webp";


export function Works() {
  return (
    <div id="work-section" className="flex flex-col gap-8 md:gap-16">
      <h2 className="text-neutral-50 text-3xl  md:text-4xl md:text-start">
        Meus trabalhos em{" "}
        <span className="text-primary font-bold">destaque</span>
      </h2>

      <div className="flex flex-col gap-4 md:gap-8">
        <div>
          <img
            src={agencyMobile}
            alt="Desenvolvimento de site"
            className="block md:hidden w-full rounded-lg"
          />

          <img
            src={agency}
            alt="Desenvolvimento de site"
            className="hidden md:block w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src={blogMobile}
            alt="Design de sites profissionais"
            className="block md:hidden w-full rounded-lg"
          />

          <img
            src={blog}
            alt="Design de sites profissionais"
            className="hidden md:block w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src={appMobile}
            alt="Design de aplicativo"
            className="block md:hidden w-full rounded-lg"
          />

          <img
            src={app}
            alt="Design de aplicativo"
            className="hidden md:block w-full rounded-lg"
          />
        </div>
        
      </div>
    </div>
  );
}
