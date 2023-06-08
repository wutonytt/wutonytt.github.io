import {
  Badge,
  Card,
  Col,
  Container,
  Grid,
  Image,
  Link,
  Row,
  Text,
} from "@nextui-org/react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Container gap={2}>
      <Text id="projects" h3>
        Projects
      </Text>
      {projects.map((project) => (
        <Grid.Container gap={2}>
          <Card>
            <Card.Header>
              <Grid.Container gap={2}>
                <Row>
                  <Grid xs={4}>
                    <Image
                      width={400}
                      alt="nextui logo"
                      src={project.img_path}
                    />
                  </Grid>
                  <Grid xs={8}>
                    <Col>
                      <Grid>
                        <Text h4>{project.name}</Text>
                      </Grid>
                      <Grid>
                        {project.descriptions.map((description) => (
                          <Text h5 color="gray">
                            - {description}
                          </Text>
                        ))}
                      </Grid>
                      <Row>
                        <Grid.Container gap={1}>
                          {project.badges.map((badge) => (
                            <Grid>
                              <Badge color="primary" variant="flat">
                                {badge}
                              </Badge>
                            </Grid>
                          ))}
                        </Grid.Container>
                      </Row>
                    </Col>
                  </Grid>
                </Row>
                <Grid>
                  <Link isExternal target="_blank" href={project.repo_link}>
                    Visit source code on GitHub
                  </Link>
                </Grid>
              </Grid.Container>
            </Card.Header>
          </Card>
        </Grid.Container>
      ))}
    </Container>
  );
};

export default Projects;
