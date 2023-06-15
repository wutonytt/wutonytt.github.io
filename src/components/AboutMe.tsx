import { Grid, Row, Text } from "@nextui-org/react";

const AboutMe = () => {
  return (
    <>
      <Text id="about" h3 css={{ textAlign: "center" }}>
        About me
      </Text>
      <Grid.Container gap={4}>
        <Row justify="center">
          <Grid xs={12} sm={10}>
            <Text>
              I'm a Master of Computer Science student at
              <strong>University of Illinois Urbana-Champaign (UIUC)</strong>
              and I received my BS degree in Computer Science from National Yang
              Ming Chiao Tung University in Taiwan. Besides, I was a Software
              Engineer at Synopsys and ASUS.
              <br />
              <br /> As a software engineer and full-stack developer, I enjoy
              trying new and cool stuffs and experiencing special things. I am
              interested in Systems, Web Development, Machine Learning and Data
              Science, trying to convert data into novel insights. When I'm not
              in front of a computer screen, I'm probably traveling, watching
              Netflix, biking, hiking, or crossing off another item on my bucket
              list.
            </Text>
          </Grid>
        </Row>
      </Grid.Container>
    </>
  );
};

export default AboutMe;
