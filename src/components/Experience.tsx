import {
  Card,
  Col,
  Container,
  Grid,
  Image,
  Row,
  Text,
} from "@nextui-org/react";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <Container fluid>
      <Text id="experience" h3>
        Experience
      </Text>
      {experience.map((exp) => (
        <Grid.Container gap={2}>
          <Card>
            <Card.Header>
              <Grid.Container gap={2}>
                <Row>
                  <Grid xs={6}>
                    <Image
                      autoResize
                      alt={exp.alt_text}
                      src={exp.logo}
                      width="220px"
                    />
                  </Grid>
                  <Col xs={6}>
                    <Grid>
                      <Text h4>{exp.company}</Text>
                    </Grid>
                    <Grid>
                      <Text h5 color="gray">
                        {exp.position}
                      </Text>
                    </Grid>
                  </Col>
                  <Grid xs={4}>
                    <Text h6>{exp.year}</Text>
                  </Grid>
                </Row>
              </Grid.Container>
            </Card.Header>
          </Card>
        </Grid.Container>
      ))}
    </Container>
  );
};

export default Experience;
