import { Banner } from "./components/banner";
import { Container } from "./components/container";
import { Header } from "./components/header";
import { Stacks } from "./components/stacks";

export function App() {
  return (
    <Container>
      <Header/>
      <div className="mx-auto max-w-7xl">
        <Banner/>
        <Stacks/>
      </div>
    </Container>
  );
}
