import { Card, Col, Container, Grid, Row, Text } from "@nextui-org/react";

const Experience = () => {
  const Experience = [
    {
      company: "ASUS Intelligent Cloud Service",
      logo: "src/assets/aics_logo.png",
      position: "Software Engineer",
      year: "Aug 2022 - Apr 2023",
    },
    {
      company: "InQuartik",
      logo: "src/assets/inquartik_logo.png",
      position: "Software Engineer Intern",
      year: "Jan 2022 - Jul 2022",
    },
    {
      company: "Synopsys",
      logo: "src/assets/synopsys_logo.png",
      position: "Software Engineer Intern",
      year: "Jul 2021 - Aug 2021",
    },
  ];
  const schools = Experience.map((exp) => (
    <Grid.Container gap={2}>
      <Card css={{ p: "$6" }}>
        <Card.Header>
          <Grid.Container css={{ pl: "$6" }}>
            <Row>
              <Grid xs={7}>
                <img alt="nextui logo" src={exp.logo} width="220px" />
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
  ));
  return (
    <Container gap={2}>
      <Text id="experience" h3>
        Experience
      </Text>
      {schools}
    </Container>
  );
};

export default Experience;
