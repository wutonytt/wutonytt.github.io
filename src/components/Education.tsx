import {
  Card,
  Col,
  Container,
  Grid,
  Image,
  Row,
  Text,
} from "@nextui-org/react";
import { education } from "../data/education";

const Education = () => {
  return (
    <Container gap={2}>
      <Text id="education" h3>
        Education
      </Text>
      {education.map((edu) => (
        <Grid.Container gap={2}>
          <Card css={{ p: "$6" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Row>
                  <Grid xs={7}>
                    <Image alt="nextui logo" src={edu.logo} width="220px" />
                  </Grid>
                  <Col xs={8}>
                    <Grid>
                      <Text h4>{edu.school}</Text>
                    </Grid>
                    <Grid>
                      <Text h5 color="gray">
                        {edu.degree}
                      </Text>
                    </Grid>
                  </Col>
                  <Grid xs={4}>
                    <Text h6>{edu.year}</Text>
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

export default Education;
