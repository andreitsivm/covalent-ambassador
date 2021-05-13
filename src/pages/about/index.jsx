import React from "react";
import Page from "Components/page";
import { Box, Heading, Text } from "@chakra-ui/react";
import Row, { Column } from "Components/row";
import Container from "Components/container";
import bg from "Img/bg-1.jpg";

const About = () => {
  return (
    <Page>
      <Box
        bgImage={`url(${bg})`}
        py="150px"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Container>
          <Heading as="h1" variant="h1" color="basic.0">
            Команда яку не зупинити
          </Heading>
          <Text color="basic.0" variant="subtitle">
            Глибокий досвід у галузі фінансів, блокчейнів, баз даних та
            розподілених систем.
          </Text>
        </Container>
      </Box>
      <Box py={6}>
        <Container>
          <Heading variant="h1">Ми єдині назад у космос</Heading>
          <Text>
            Ми розподілена команда з 30 осіб, яка працює понад 100 років
            сукупного досвіду криптографії.
          </Text>
          <Row>
            <Column></Column>
          </Row>
        </Container>
      </Box>
    </Page>
  );
};

export default About;
