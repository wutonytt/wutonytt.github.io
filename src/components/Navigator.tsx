import { Navbar, Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { useTheme as useNextTheme } from "next-themes";

const Navigator = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <>
      <Navbar
        maxWidth="fluid"
        shouldHideOnScroll
        isBordered={isDark}
        variant="floating"
      >
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#aboutme">About me</Navbar.Link>
          <Navbar.Link href="#education">Education</Navbar.Link>
          <Navbar.Link href="#experience">Experience</Navbar.Link>
          <Navbar.Link href="#projects">Projects</Navbar.Link>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link color="inherit" href="mailto:wutonytt@gmail.com">
            Email
          </Navbar.Link>
          <Navbar.Link
            color="inherit"
            target="_blank"
            href="https://github.com/wutonytt"
          >
            GitHub
          </Navbar.Link>
          <Navbar.Link
            color="inherit"
            target="_blank"
            href="https://www.linkedin.com/in/wutonytt/"
          >
            LinkedIn
          </Navbar.Link>

          <Switch
            checked={isDark}
            size="lg"
            iconOn={<MoonIcon filled />}
            iconOff={<SunIcon filled />}
            onChange={(e: { target: { checked: any } }) =>
              setTheme(e.target.checked ? "dark" : "light")
            }
          />
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default Navigator;
