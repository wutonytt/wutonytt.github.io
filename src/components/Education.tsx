import { Card, Col, Grid, Image, Text } from "@nextui-org/react";
import { education } from "../data/education";

const Education = () => {
  return (
    <>
      <Text id="education" h3>
        Education
      </Text>
      {education.map((edu) => (
        <Grid.Container gap={2}>
          <Card>
            <Card.Body>
              <Grid.Container gap={3}>
                <Grid xs={12} sm={4} css={{ background: "white" }}>
                  <Image
                    showSkeleton="false"
                    alt={edu.alt_text}
                    src={edu.logo}
                    width="220px"
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <Col>
                    <Text h4>{edu.school}</Text>
                    <Text>{edu.degree}</Text>
                  </Col>
                </Grid>
                <Grid xs={12} sm={2}>
                  <Text>{edu.year}</Text>
                </Grid>
              </Grid.Container>
            </Card.Body>
          </Card>
        </Grid.Container>
      ))}
    </>
  );
};

export default Education;
