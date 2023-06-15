import { Card, Grid, Text } from "@nextui-org/react";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <>
      <Text id="skills" h3 css={{ textAlign: "center" }}>
        Skills
      </Text>
      <Grid.Container gap={1} justify="center" css={{ textIndent: "1em" }}>
        <Grid xs={12} sm={3.7}>
          <Card variant="bordered">
            <Card.Header>
              <Text b>Programming Languages</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              {skills.programming_languages.map((lang, key) => (
                <Text key={key}>
                  {`\u2022`} {lang}
                </Text>
              ))}
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={3.7}>
          <Card variant="bordered">
            <Card.Header>
              <Text b>Tools</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              {skills.tools.map((tool, key) => (
                <Text key={key}>
                  {`\u2022`} {tool}
                </Text>
              ))}
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={3.7}>
          <Card variant="bordered">
            <Card.Header>
              <Text b>Frameworks</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              {skills.frameworks.map((framework, key) => (
                <Text key={key}>
                  {`\u2022`} {framework}
                </Text>
              ))}
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Skills;
