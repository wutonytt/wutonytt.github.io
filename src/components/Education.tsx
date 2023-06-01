import { Card, Col, Container, Grid, Row, Text } from "@nextui-org/react";

const Education = () => {
  const education = [
    {
      school: "University of Illinois Urbana-Champaign",
      logo: "src/assets/uiuc_logo.png",
      degree: "Master of Computer Science",
      year: "Aug 2023 - Present",
    },
    {
      school: "National Yang Ming Chiao Tung University",
      logo: "src/assets/nycu_logo.png",
      degree: "Bachelor of Science in Computer Science",
      year: "Sep 2018 - Jun 2022",
    },
  ];
  const schools = education.map((edu) => (
    <Grid.Container gap={2}>
      <Card css={{ p: "$6" }}>
        <Card.Header>
          <Grid.Container css={{ pl: "$6" }}>
            <Row>
              <Grid xs={7}>
                <img alt="nextui logo" src={edu.logo} width="220px" />
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
  ));
  return (
    <Container gap={2}>
      <Text id="education" h3>
        Education
      </Text>
      {schools}
    </Container>
  );
};

export default Education;
