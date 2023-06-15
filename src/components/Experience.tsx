import { Card, Col, Grid, Image, Text } from "@nextui-org/react";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <>
      <Text id="experience" h3 css={{ textAlign: "center" }}>
        Experience
      </Text>
      <Grid.Container gap={1} justify="center">
        {experience.map((exp, key) => (
          <Grid xs={12} sm={11} key={key}>
            <Card variant="bordered">
              <Card.Body>
                <Grid.Container gap={2}>
                  <Grid xs={12} sm={4} css={{ background: "white" }}>
                    <Image
                      showSkeleton="false"
                      alt={exp.alt_text}
                      src={exp.logo}
                      width="220px"
                    />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <Col>
                      <Text h4>{exp.company}</Text>
                      <Text>{exp.position}</Text>
                    </Col>
                  </Grid>
                  <Grid xs={12} sm={2}>
                    <Text>{exp.year}</Text>
                  </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default Experience;
