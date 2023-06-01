import { Navbar, Text } from "@nextui-org/react";

const Navigator = () => {
  return (
    <>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text>Logo</Text>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#aboutme">About me</Navbar.Link>
          <Navbar.Link href="#education">Education</Navbar.Link>
          <Navbar.Link href="#experience">Experience</Navbar.Link>
          <Navbar.Link href="#">Skills</Navbar.Link>
          <Navbar.Link href="#">Projects</Navbar.Link>
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
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default Navigator;
