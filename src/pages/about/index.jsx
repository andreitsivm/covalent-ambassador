import React from "react";
import Page from "Components/page";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import Row, { Column } from "Components/row";
import Container from "Components/container";
import Card from "Components/about-card";
import bg from "Img/bg-1.jpg";
import ganesh from "Img/ganesh.jpg";
import levi from "Img/levi.jpg";
import adrian from "Img/adrian.jpg";
import jackie from "Img/jackie.jpg";
import erik from "Img/erik.jpg";
import rohit from "Img/rohit.jpg";

import pageMeta from "./pageMeta.json";

const About = (props) => {
  return (
    <Page {...pageMeta} {...props}>
      <Box
        textAlign={{ base: "center", md: "left" }}
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
      <Box py={10}>
        <Container textAlign={{ base: "center", md: "left" }}>
          <Heading variant="h1">Єдині та неповторні</Heading>
          <Text>
            Ми розподілена команда з 30 осіб, яка що має понад 100 років
            сукупного досвіду з криптою.
          </Text>
          <Row>
            <Column mb={{ base: "30px", md: "0" }}>
              <Flex
                alignItems="center"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Box
                  mb={{ base: "16px", md: "0" }}
                  mr={{ base: "0", md: "16px" }}
                >
                  <Image
                    sx={{
                      borderRadius: "small",
                    }}
                    maxW="200px"
                    h="200px"
                    src={ganesh}
                    alt="Ganesh Swami"
                  />
                </Box>
                <Box>
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
              <Flex
                alignItems="center"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Box
                  mb={{ base: "16px", md: "0" }}
                  mr={{ base: "0", md: "16px" }}
                >
                  <Image
                    sx={{
                      borderRadius: "small",
                    }}
                    maxW="200px"
                    h="200px"
                    src={levi}
                    alt="Levi Aul"
                  />
                </Box>
                <Box>
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
              <Flex
                alignItems="center"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Box
                  mb={{ base: "16px", md: "0" }}
                  mr={{ base: "0", md: "16px" }}
                >
                  <Image
                    sx={{
                      borderRadius: "small",
                    }}
                    maxW="200px"
                    h="200px"
                    src={adrian}
                    alt="Adrian Jonklaas"
                  />
                </Box>
                <Box>
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
          <Row mt="24px">
            <Column>
              <Card
                image={jackie}
                name="Жаклін Кім Перез"
                status="Токен Маркетинг"
              />
            </Column>
            <Column>
              <Card image={erik} name="Ерік Ешдоун" status="Екосистема" />
            </Column>
            <Column>
              <Card image={rohit} name="Рогіт Тандом" status="Дизайн" />
            </Column>
          </Row>
        </Container>
      </Box>
    </Page>
  );
};

export default About;
