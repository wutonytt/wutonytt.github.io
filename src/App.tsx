import "./App.css";
import { NextUIProvider, Container, Spacer } from "@nextui-org/react";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <NextUIProvider>
      {
        <>
          <Container gap={8}>
            <Spacer y={2} />
            <Intro />
            <Spacer y={2} />
            <AboutMe />
            <Spacer y={2} />
          </Container>
        </>
      }
    </NextUIProvider>
  );
}

export default App;
