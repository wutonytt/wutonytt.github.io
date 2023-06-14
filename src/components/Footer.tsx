import { Button, Text } from "@nextui-org/react";

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

const Footer = () => {
  return (
    <>
      <Text>Designed and Developed by</Text>
      <Text>
        Hung-Yi Wu
        <img className="emoji" src="/assets/emojis/rockon.png" alt="emoji" />
        2023
        <Button rounded auto id="top-button" onPress={scrollToTop}>
          <img className="emoji" src="/assets/emojis/pointing-up.png" alt="" />
        </Button>
      </Text>
    </>
  );
};

export default Footer;
