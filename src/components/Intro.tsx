import { Container, Spacer, Text } from "@nextui-org/react";

const Intro = () => {
  const name = "Hung-Yi Wu";
  const description =
    "Computer Science Student at University of Illinois Urbana-Champaign";
  return (
    <Container
      fluid
      responsive={false}
      css={{ textAlign: "center" }}
      wrap="wrap"
    >
      <Text h1 size={56} color="$titleColor">
        {name}
      </Text>
      <Text h3 size={28}>
        Software Engineer
      </Text>
      <Spacer y={1} />
      <Text h4 size={20}>
        {description}
      </Text>
    </Container>
  );
};

export default Intro;
