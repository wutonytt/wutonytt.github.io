import { Link, Navbar, Spacer, Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { useTheme as useNextTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";

function isVisible(section_id: string) {
  const element = document.getElementById(section_id);
  if (element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    const show = !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    return show;
  }
}

const Navigator = () => {
  const sections = ["About", "Education", "Experience", "Projects", "Skills"];
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const navbarToggleRef = useRef<HTMLDivElement>();
  const [visibleSection, setVisibleSection] = useState("about");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  function handleScroll() {
    for (let index = 0; index < sections.length; index++) {
      const section_id = sections[index].replace(/\s+/g, "-").toLowerCase();
      if (isVisible(section_id)) {
        setVisibleSection(section_id);
        break;
      }
    }
  }

  function scrollToSection(section_id: string) {
    const element = document.getElementById(section_id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      // 👇 Will scroll smoothly to the top of the next section
      document.removeEventListener("scroll", handleScroll);
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  function handleSideMenu(section_id: string) {
    scrollToSection(section_id);
    const targetElement = navbarToggleRef.current;
    if (targetElement) {
      isSideMenuOpen && targetElement.click();
    }
  }

  return (
    <>
      <Navbar
        maxWidth="fluid"
        isBordered={isDark}
        variant="sticky"
        shouldHideOnScroll
      >
        <Navbar.Toggle
          ref={navbarToggleRef}
          showIn="sm"
          onChange={(isSelected: boolean) => setIsSideMenuOpen(isSelected)}
        />
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          variant="highlight-rounded"
          hideIn="sm"
        >
          {sections.map((section, key) => (
            <Navbar.Link
              onPress={() =>
                scrollToSection(section.replace(/\s+/g, "-").toLowerCase())
              }
              isActive={
                section.replace(/\s+/g, "-").toLowerCase() === visibleSection
              }
              key={key}
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
            color="warning"
          />
        </Navbar.Content>
        <Navbar.Collapse showIn="sm">
          {sections.map((section, key) => (
            <Navbar.CollapseItem
              isActive={
                section.replace(/\s+/g, "-").toLowerCase() === visibleSection
              }
              key={key}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                onPress={() =>
                  handleSideMenu(section.replace(/\s+/g, "-").toLowerCase())
                }
              >
                {section}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigator;
