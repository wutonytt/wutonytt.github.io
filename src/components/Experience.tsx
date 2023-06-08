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
    <Container gap={2}>
      <Text id="experience" h3>
        Experience
      </Text>
      {experience.map((exp) => (
        <Grid.Container gap={2}>
          <Card css={{ p: "$6" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Row>
                  <Grid xs={7}>
                    <Image alt="nextui logo" src={exp.logo} width="220px" />
                  </Grid>
                  <Col xs={8}>
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
