import { Banner } from "./components/banner";
import { Contact } from "./components/contact";
import { Container } from "./components/ui/container";
import { Header } from "./components/header";
import { Works } from "./components/works";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Footer } from "./components/footer";

export function App() {
  return (
    <Container>
      <div className="flex flex-col gap-16 md:gap-40">
        <header>
          <Header />
        </header>
        <main className="flex flex-col gap-20 md:gap-56 mx-auto max-w-7xl px-5  md:px-0">
          <Banner />
          <About />
          <Works />
          <Services />
          <Contact />
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </div>
    </Container>
  );
}
