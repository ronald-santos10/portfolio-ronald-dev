import { Banner } from "./components/banner";
import { Container } from "./components/container";
import { Header } from "./components/header";
import { Projects } from "./components/projects";

export function App() {
  return (
    <Container>
        <header>
        <Header />
      </header>
      <main className="mx-auto max-w-7xl px-5  md:px-0">
          <Banner />
        <Projects />
      </main>
    </Container>
  );
}
