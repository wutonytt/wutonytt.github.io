import { Button, Container, Text } from "@nextui-org/react";

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

const Footer = () => {
  return (
    <Container fluid>
      <Text>Designed and Developed by</Text>
      <Text>
        Hung-Yi Wu
        <img className="emoji" src="src/assets/emojis/rockon.png" alt="emoji" />
        2023
        <Button
          rounded
          color="warning"
          auto
          id="top-button"
          onPress={scrollToTop}
        >
          <img
            className="emoji"
            src="src/assets/emojis/pointing-up.png"
            alt=""
          />
        </Button>
      </Text>
    </Container>
  );
};

export default Footer;
