import { Col, Grid, Image, Link, Spacer, Text } from "@nextui-org/react";

const Intro = () => {
  return (
    <>
      <Grid.Container
        justify="center"
        css={{
          textAlign: "center",
          minHeight: "calc(100vh - 88px)",
          padding: "10% 0 0 0",
          "@xs": { padding: "10% 24% 0 24%" },
        }}
        gap={4}
      >
        <Grid justify="center" display="flex" alignItems="flex-end">
          <Text h1 size={56} color="$titleColor">
            Hung-Yi Wu
          </Text>
          <Spacer y={2} />
          <Text h3 size={28}>
            Software engineer and full-stack developer
          </Text>
          <Text size={20}>
            Master of Computer Science Student at University of Illinois
            Urbana-Champaign. Experience in full-stack development, data
            science, and machine learning.
          </Text>
          <Spacer y={4} />
          <Link
            id="point-right"
            target="_blank"
            href="/resume.pdf"
            color="warning"
          >
            View My Resume
          </Link>
        </Grid>
        <Grid xs={12} justify="center" display="flex" alignItems="flex-end">
          <Col>
            <Text h5 color="#727e8c">
              Scroll down
            </Text>
            <Image
              src="/assets/icons/bottom.png"
              width={30}
              height={30}
              alt="arrow"
            />
          </Col>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Intro;
