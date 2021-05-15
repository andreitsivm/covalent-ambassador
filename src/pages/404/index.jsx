import * as React from "react";
import { Heading, Text, Box } from "@chakra-ui/layout";
import Page from "Components/page";
import Container from "Components/container";
import Link from "Components/link";
import bg from "Img/bg-2.jpg";
import pageMeta from "./pageMeta.json";

const NotFoundPage = (props) => {
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
          <Heading>Нажаль сторінки яку ви шукаєте не існує</Heading>
          <Text>
            повернутися на <Link href="/">головну сторінку</Link>
          </Text>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFoundPage;
