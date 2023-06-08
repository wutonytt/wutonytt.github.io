import { Container, Text } from "@nextui-org/react";

const AboutMe = () => {
  return (
    <Container fluid>
      <Text id="about-me" h3>
        Something about me...
      </Text>
      <Text>
        I'm a Master of Computer Science student at{" "}
        <strong> University of Illinois Urbana-Champaign (UIUC)</strong> and I
        received my BS degree in Computer Science from National Yang Ming Chiao
        Tung University. I was a Software Engineer at ASUS Intelligent Cloud
        Services from 2022 to 2023. I worked at InQuartik as a Software Engineer
        Intern from January to July in 2022. And I also worked at Synopsys as a
        Software Engineer Intern in Summer 2021.
        <br />
        <br /> As a software engineer, I enjoy trying new and cool stuffs,
        experience special things, and learn new knowledges. I am interested in
        Systems, Backend Engineering, Machine Learning and Data Science, trying
        to convert data into novel insights. When I'm not in front of a computer
        screen, I'm probably watching Netflix, playing basketball, playing
        tennis, hiking, or crossing off another item on my bucket list.
      </Text>
    </Container>
  );
};

export default AboutMe;
