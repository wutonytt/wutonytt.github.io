import { Container, Text } from "@nextui-org/react";

const Intro = () => {
  const name = "Hung-Yi Wu";
  const description = "CS Student at University of Illinois Urbana-Champaign";
  return (
    <Container gap={2}>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $purple600 50%",
        }}
        weight="bold"
      >
        {name}
      </Text>
      <Text h3 color="gray">
        {description}
      </Text>
    </Container>
  );
};

export default Intro;
