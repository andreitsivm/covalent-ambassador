import React from "react";
import Page from "Components/page";
import Link from "Components/link";
import { Box, Button, Heading, Text, Flex, Image } from "@chakra-ui/react";
import Container from "Components/container";
import Row, { Column } from "Components/row";
import bg from "Img/bg-2.jpg";
import banner from "Img/banner.svg";
import diagram from "Img/diagram.jpg";
import pageMeta from "./pageMeta.json";

const HowItWorks = (props) => {
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
          <Box maxW={{ base: "100%", md: "60%" }}>
            <Heading as="h1" variant="h1" color="basic.0">
              Ковалент
            </Heading>
            <Text color="basic.0" variant="subtitle">
              Blockchains - це новий рубіж розвитку для підприємств, споживачів
              та розробників програмного забезпечення. Завдяки своїй
              децентралізованій архітектурі, незмінній книзі та високозахищеній
              структурі, застосування цієї технології впливатиме на галузі,
              починаючи від фінансів та роздрібної торгівлі, закінчуючи
              особистою ідентичністю та криптовалютою. Covalent забезпечує
              уніфікований API, що забезпечує видимість мільярдів точок даних
              блокчейну.
            </Text>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container py={{ base: 5, md: 10 }}>
          <Row>
            <Column>
              <Image src={diagram} alt="diagram" />
            </Column>
            <Column
              ml={{ base: 0, md: 5 }}
              d="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading variant="h1">Швидко та доступно</Heading>
              <Text>
                З використанням Covalent API ви можете швидко отримувати
                різноманітну інформацію про транзакції, вартість валюти,
                котирування.
              </Text>
              <Text>
                Якщо вам буде цікаво перегляньте наш{" "}
                <Link href="/app/diagram/">приклад</Link>
              </Text>
            </Column>
          </Row>
        </Container>
      </Box>
      <Box py={10} bgGradient="linear-gradient(to-l, secondary.1, basic.5)">
        <Container>
          <Flex
            justify="space-between"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Heading
              color="basic.0"
              textAlign={{ base: "center", md: "left" }}
              mb={{ base: "24px", md: "0" }}
            >
              Наші інструменти прості та доступні
            </Heading>{" "}
            <Link
              sx={{ _hover: { textDecoration: "none" } }}
              isExternal
              href="https://www.covalenthq.com/docs/api/#overview"
            >
              <Button variant="secondary">Спробувати</Button>
            </Link>
          </Flex>
        </Container>
      </Box>
      <Box
        bgImage={`url(${banner})`}
        py="250px"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      ></Box>
    </Page>
  );
};

export default HowItWorks;
