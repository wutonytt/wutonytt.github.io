import "./App.css";
import { NextUIProvider, Container, Spacer } from "@nextui-org/react";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navigator from "./components/Navigator";

function App() {
  return (
    <NextUIProvider>
      {
        <>
          <Navigator />
          <Container gap={8}>
            <Spacer y={2} />
            <Intro />
            <Spacer y={2} />
            <AboutMe />
            <Spacer y={2} />
            <Education />
            <Spacer y={2} />
            <Experience />
            <Spacer y={2} />
          </Container>
        </>
      }
    </NextUIProvider>
  );
}

export default App;
