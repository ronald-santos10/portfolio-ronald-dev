import { Banner } from "./components/banner";
import { Contact } from "./components/contact";
import { Container } from "./components/container";
import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';


export function App() {
  return (
    <Container>
        <header>
        <Header />
      </header>
      <main className="mx-auto max-w-7xl px-5  md:px-0">
          <Banner />
        <Projects />
        <Experience/>
        <Contact/>
      </main>
      <footer className="bg-neutral-900 py-8">
        <h3 className="text-xs text-neutral-50 font-semibold text-center">Feito por <span className="text-primary">Ronald Santos</span>
        </h3>
      </footer>
      <SpeedInsights />
      <Analytics />
    </Container>
  );
}
