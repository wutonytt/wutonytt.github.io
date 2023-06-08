import { Container, Text } from "@nextui-org/react";

const Intro = () => {
  const name = "Hung-Yi Wu";
  const description =
    "Computer Science Student @ University of Illinois Urbana-Champaign";
  return (
    <Container fluid>
      <Text h1 size={70} color="$titleColor" weight="bold">
        {name}
      </Text>
      <Text h2 color="$titleColor">
        {description}
      </Text>
    </Container>
  );
};

export default Intro;
