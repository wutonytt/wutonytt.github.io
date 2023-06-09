import { Card, Container, Grid, Text } from "@nextui-org/react";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <Container fluid>
      <Text id="skills" h3>
        Skills
      </Text>
      <Grid.Container gap={2} css={{ textIndent: "1em" }}>
        <Grid xs={12} sm={4}>
          <Card>
            <Card.Header>
              <Text b>Programming Languages</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              {skills.programming_languages.map((lang) => (
                <Text h5 color="gray">
                  - {lang}
                </Text>
              ))}
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card>
            <Card.Header>
              <Text b>Tools</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              {skills.tools.map((tool) => (
                <Text h5 color="gray">
                  - {tool}
                </Text>
              ))}
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card>
            <Card.Header>
              <Text b>Frameworks</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              {skills.frameworks.map((framework) => (
                <Text h5 color="gray">
                  - {framework}
                </Text>
              ))}
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Skills;
