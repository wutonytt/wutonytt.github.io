import {
  Badge,
  Card,
  Col,
  Grid,
  Image,
  Link,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <>
      <Text id="projects" h3>
        Projects
      </Text>
      {projects.map((project) => (
        <Grid.Container gap={2}>
          <Card>
            <Card.Body>
              <Grid.Container gap={2}>
                <Grid xs={12} sm={4}>
                  <Image
                    width={400}
                    alt={project.alt_text}
                    src={project.img_path}
                  />
                </Grid>
                <Grid xs={12} sm={8}>
                  <Col>
                    <Grid>
                      <Text h4>{project.name}</Text>
                    </Grid>
                    <Grid>
                      {project.descriptions.map((description) => (
                        <>
                          <Text>
                            {`\u2022`} {description}
                          </Text>
                          <Spacer y={0.5} />
                        </>
                      ))}
                    </Grid>
                    <Row>
                      <Grid.Container gap={1}>
                        {project.badges.map((badge) => (
                          <Grid>
                            <Badge color="warning">{badge}</Badge>
                          </Grid>
                        ))}
                      </Grid.Container>
                    </Row>
                  </Col>
                </Grid>
                <Grid>
                  <Link
                    id="point-right"
                    target="_blank"
                    href={project.repo_link}
                    color="warning"
                  >
                    Visit source code on GitHub
                  </Link>
                </Grid>
              </Grid.Container>
            </Card.Body>
          </Card>
        </Grid.Container>
      ))}
    </>
  );
};

export default Projects;
