import "./App.css";
import {
  NextUIProvider,
  Container,
  Spacer,
  createTheme,
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

type Fonts = {
  sans?: string;
};

const fonts: Fonts = {
  sans: "Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

const lightTheme = createTheme({
  type: "light",
  theme: {
    fonts: fonts,
    letterSpacings: {
      tighter: "-0.03em",
    },
    colors: {
      titleColor: "#F5A524",
      background: "#F5F5F5",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    fonts: fonts,
    letterSpacings: {
      tighter: "-0.03em",
    },
    colors: {
      titleColor: "#F5A524",
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
            <Container
              fluid
              responsive={false}
              css={{
                "@xs": { padding: "0 calc(8px + 1.5625vw)" },
                "@sm": { padding: "0 calc(40px + 1.5625vw)" },
                "@md": { padding: "0 calc(120px + 2.2vw)" },
              }}
            >
              <Spacer y={4} />
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
