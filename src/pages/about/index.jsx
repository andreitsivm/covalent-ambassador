import React from "react";
import Page from "Components/page";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import Row, { Column, FluidItem } from "Components/row";
import Container from "Components/container";
import Card from "Components/about-card";
import bg from "Img/bg-1.jpg";
import banner from "Img/bg-index.jpg";
import covalent from "Img/covalent-image.png";
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
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroudRepeat: "no-repeat",
        }}
      >
        <Container py={{ base: 5, md: "256px" }}>
          <Box maxW={{ base: "100%", md: "60%" }}>
            <Heading color="basic.0" variant="h1" as="h1" textAlign="center">
              Один уніфікований API. Один мільярд можливостей.
            </Heading>
            <Text textAlign="center" variant="subtitle" color="basic.0">
              Covalent забезпечує уніфікований API, що дає змогу отримати доступ
              до мільярдів точок даних блокчейну.
            </Text>
          </Box>
        </Container>
      </Box>

      <Box py={10} textAlign={{ base: "center", md: "left" }} bg="basic.1">
        <Container>
          <Row>
            <Column
              mr={{ base: 0, md: "36px" }}
              mb={{ base: "36px", md: "0" }}
              d="flex"
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <Box
                width="100%"
                height="400px"
                bgImage={`url(${covalent})`}
                bgPosition="center 60px"
                bgRepeat="no-repeat"
              />
            </Column>
            <Column d="flex" flexDirection="column" justifyContent="center">
              <Heading variant="h1">Що таке ковалент?</Heading>
              <Text>
                Covalent забезпечує уніфікований API, щоб дає повну прозорість
                та видимість активів у всіх мережах блокчейнів. Простіше кажучи,
                у нас є єдиний API, який дозволяє отримати детальний, детальний
                дані транзакцій блокчейну з декількох блокчейнів без
                використання коду.
              </Text>
            </Column>
          </Row>
        </Container>
      </Box>
      <Box py={5} textAlign={{ base: "center", md: "left" }}>
        <Container>
          <FluidItem>
            <Heading variant="h1">У чому унікальність Covalent</Heading>
            <Text variant="subtitle">
              Є багато елементів Covalent, які роблять нас унікальними на ринку.
              Однак наші основні відміностіи від інших проектів, зокрема Graph:
            </Text>
            <Box>
              <Heading>1. Доступність даних</Heading>
              <Text>
                Ми єдиний проект, який повністю індексує цілі блокчейни - це
                означає кожен окремий контракт, кожну адресу гаманця та кожну
                окрему транзакція. Це мільярди рядків і терабайт даних. Інші
                проекти надають лише невелику частину доступної інформації або
                починають збирати дані лише після того, як налаштовано
                відповідний запит або фільтр.
              </Text>
            </Box>
            <Box>
              <Heading>2. Компонування</Heading>
              <Text>
                Компонувальність є найважливішим елементом децентралізованих
                фінансових (DeFi) додатків і дозволяє розробникам швидко і легко
                розробити фінансові рішення, використовуючи для будівництва
                блоки з безлічі проектів, подібно до конструктора "Lego".
                Багатоканальна гнучкість та глибокі, детальні дані, які надані
                нашим API, означають, що розробники зможуть швидко і легко
                створювати масштабовані програми, багаті на інформацію, без
                написання великого об'єму коду для запиту.
              </Text>
            </Box>
            <Box>
              <Heading>3. Підтримка декількох блокчейнів</Heading>
              <Text>
                Багатоланцюговість у нашій ДНК. Covalent вже індексує і має
                клієнтів в 7 різних мережах блокчейну, і ще більше оголосить
                найближчим часом.
              </Text>
            </Box>
            <Box>
              <Heading>4. Рішення без коду</Heading>
              <Text>
                Ми віримо в рішення без коду для наших користувачів. Це означає,
                що немає складних запитів SQL, відсутність розробки підграфа та
                обслуговування, не потрібно інвестувати у висококваліфікованих
                та дорогих розробників, щоб просто отримати дані блокчейну, що
                насамперед є монументальною втратою інженерного часу. Один API —
                і вce готово.
              </Text>
            </Box>
          </FluidItem>
        </Container>
      </Box>

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
