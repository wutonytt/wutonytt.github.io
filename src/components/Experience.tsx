import { Card, Col, Container, Grid, Image, Text } from "@nextui-org/react";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <Container fluid>
      <Text id="experience" h3>
        Experience
      </Text>
      {experience.map((exp) => (
        <Grid.Container gap={2}>
          <Card isHoverable>
            <Card.Body>
              <Grid.Container gap={2}>
                <Grid xs={12} sm={5}>
                  <Image
                    showSkeleton="false"
                    alt={exp.alt_text}
                    src={exp.logo}
                    width="220px"
                  />
                </Grid>
                <Grid xs={12} sm={5}>
                  <Col>
                    <Text h4>{exp.company}</Text>
                    <Text h5 color="gray">
                      {exp.position}
                    </Text>
                  </Col>
                </Grid>
                <Grid xs={12} sm={2}>
                  <Text h6>{exp.year}</Text>
                </Grid>
              </Grid.Container>
            </Card.Body>
          </Card>
        </Grid.Container>
      ))}
    </Container>
  );
};

export default Experience;
