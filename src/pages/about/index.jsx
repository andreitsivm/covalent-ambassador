import React from "react";
import Page from "Components/page";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import Row, { Column } from "Components/row";
import Container from "Components/container";
import bg from "Img/bg-1.jpg";
import ganesh from "Img/ganesh.jpg";
import levi from "Img/levi.jpg";
import adrian from "Img/adrian.jpg";

import pageMeta from "./pageMeta.json";

const About = (props) => {
  return (
    <Page {...pageMeta} {...props}>
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
            <Column mb={{ base: "30px", md: "0" }}>
              <Flex>
                <Box
                  sx={{
                    borderRadius: "small",
                    mr: "16px",
                  }}
                >
                  <Image
                    maxW="200px"
                    h="200px"
                    src={ganesh}
                    alt="Ganesh Swami"
                  />
                </Box>
                <Box h="100%">
                  <Heading as="h3" variant="h3">
                    Ганеш Свамі
                  </Heading>
                  <Text color="secondary.0" variant="subtitle">
                    Співзасновник, генеральний директор
                  </Text>
                </Box>
              </Flex>
            </Column>
            <Column>
              <Flex>
                <Box
                  sx={{
                    borderRadius: "small",
                    mr: "16px",
                  }}
                >
                  <Image maxW="200px" h="200px" src={levi} alt="Levi Aul" />
                </Box>
                <Box h="100%">
                  <Heading as="h3" variant="h3">
                    Леві Оул
                  </Heading>
                  <Text color="secondary.0" variant="subtitle">
                    Співзасновник, Технічний директор
                  </Text>
                </Box>
              </Flex>
            </Column>
            <Column>
              <Flex>
                <Box
                  sx={{
                    borderRadius: "small",
                    mr: "16px",
                  }}
                >
                  <Image
                    maxW="200px"
                    h="200px"
                    src={adrian}
                    alt="Adrian Jonklaas"
                  />
                </Box>
                <Box h="100%">
                  <Heading as="h3" variant="h3">
                    Адріан Джонклас
                  </Heading>
                  <Text color="secondary.0" variant="subtitle">
                    Фінансовий директор
                  </Text>
                </Box>
              </Flex>
            </Column>
          </Row>
        </Container>
      </Box>
    </Page>
  );
};

export default About;
