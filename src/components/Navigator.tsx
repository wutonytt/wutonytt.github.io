import { Navbar, Spacer, Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { useTheme as useNextTheme } from "next-themes";
import { useState } from "react";

function scrollToSection(section_id: string) {
  const element = document.getElementById(section_id);
  if (element) {
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    // 👇 Will scroll smoothly to the top of the next section
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
}

function isVisible(section_id: string) {
  const element = document.getElementById(section_id);
  if (element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    const show = !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    console.log(show);
    return show;
  }
}

const Navigator = () => {
  const sections = [
    "About me",
    "Education",
    "Experience",
    "Projects",
    "Skills",
  ];
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const [visibleSection, setVisibleSection] = useState("aboutme");

  window.addEventListener("scroll", function () {
    for (let index = 0; index < sections.length; index++) {
      const section_id = sections[index].replace(/\s+/g, "-").toLowerCase();
      if (isVisible(section_id)) {
        setVisibleSection(section_id);
        break;
      }
    }
  });

  return (
    <>
      <Navbar maxWidth="fluid" isBordered={isDark} variant="floating">
        <Navbar.Content enableCursorHighlight variant="underline" hideIn="xs">
          {sections.map((section) => (
            <Navbar.Link
              onClick={() =>
                scrollToSection(section.replace(/\s+/g, "-").toLowerCase())
              }
              isActive={
                visibleSection == section.replace(/\s+/g, "-").toLowerCase()
              }
            >
              {section}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Spacer />
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
            onChange={(e: { target: { checked: boolean } }) =>
              setTheme(e.target.checked ? "dark" : "light")
            }
          />
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default Navigator;
