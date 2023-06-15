import { Card, Col, Grid, Image, Text } from "@nextui-org/react";
import { education } from "../data/education";

const Education = () => {
  return (
    <>
      <Text id="education" h3 css={{ textAlign: "center" }}>
        Education
      </Text>
      <Grid.Container gap={1} justify="center">
        {education.map((edu, key) => (
          <Grid xs={12} sm={11} key={key}>
            <Card variant="bordered">
              <Card.Body>
                <Grid.Container gap={2}>
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
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default Education;
