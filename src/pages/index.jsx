import * as React from "react";
import Page from "Components/page";
import Container from "Components/container";
import Row, { Column, FluidItem } from "Components/row";
import pageMeta from "./pageMeta.json";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import banner from "Img/bg-index.jpg";
import covalent from "Img/logo.svg";

const Index = (props) => {
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

      <Box py={5} textAlign={{ base: "center", md: "left" }}>
        <Container>
          <Row>
            <Column d="flex" flexDirection="column" justifyContent="center">
              <Heading variant="h2">Що таке ковалент?</Heading>
              <Text>
                Covalent забезпечує уніфікований API, щоб дає повну прозорість
                та видимість активів у всіх мережах блокчейнів. Простіше кажучи,
                у нас є єдиний API, який дозволяє отримати детальний, детальний
                дані транзакцій блокчейну з декількох блокчейнів без
                використання коду.
              </Text>
            </Column>
            <Column
              d="flex"
              justifyContent={{ base: "center", md: "flex-end" }}
            >
              <Image src={covalent} />
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
              Однак наші основні відмінники від проектів як Graph:
            </Text>
            <Box>
              <Heading>1. Доступність даних</Heading>
              <Text>
                Ми єдиний проект, який повністю індексує цілі блокчейни - це
                означає кожен окремий контракт, кожну адресу гаманця та кожну
                окрему транзакція. Це мільярди рядків даних і терабайт даних.
                Інші проекти надають лише невелику частину доступни даних або
                починають збирати дані лише після того, як налаштовано
                відповідний запит або фільтр.
              </Text>
            </Box>
            <Box>
              <Heading>2. Компонування</Heading>
              <Text>
                Компонувальність є найважливішим елементом децентралізованих
                фінансових (DeFi) додатків і дозволяє розробникам швидко і легко
                розробити фінансові рішення, використовуючи будівництво блоків з
                безлічі проектівб подібно до конструктора "Lego". Багатоканальна
                гнучкість та глибокі, детальні дані, надані нашими API,
                означають, що розробники зможуть швидко і легко створювати
                масштабовані програми, багаті на дані без написання великого
                об'єму коду для запиту.
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
    </Page>
  );
};

export default Index;
