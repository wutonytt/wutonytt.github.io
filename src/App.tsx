import "./App.css";
import {
  NextUIProvider,
  Container,
  Spacer,
  createTheme,
  Image,
} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navigator from "./components/Navigator";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      titleColor: "#24397A",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      titleColor: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        {
          <>
            <Navigator />
            <Container fluid>
              <Spacer y={6} />
              <Intro />
              <Spacer y={6} />
              <AboutMe />
              <Spacer y={4} />
              <Education />
              <Spacer y={4} />
              <Experience />
              <Spacer y={4} />
              <Projects />
              <Spacer y={4} />
              <Skills />
              <Spacer y={4} />
              <Footer />
              <Spacer y={2} />
            </Container>
          </>
        }
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default App;
