import React from "react";
import { Heading, Text, Box, Image } from "@chakra-ui/react";

import Page from "Components/page";
import Container from "Components/container";
import Row, { Column } from "Components/row";
import Link from "Components/link";
import bg from "Img/bg-4.jpg";
import atom from "Img/covalent-atom.svg";
import useSiteMeta from "Hooks/useSiteMeta";
import pageMeta from "./pageMeta.json";

const Contacts = (props) => {
  const { address } = useSiteMeta();
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
          <Box maxW={{ base: "100%", md: "45%" }}>
            <Heading as="h1" variant="h1" color="basic.0">
              Зв'яжіться з нами
            </Heading>
            <Text color="basic.0" variant="subtitle">
              Якщо у вас є питання або пропозиції звертайтесь до представників
              головного офісу
            </Text>
          </Box>
        </Container>
      </Box>
      <Container py={10} textAlign={{ base: "center", md: "left" }}>
        <Heading as="h2">Контакти</Heading>
        <Row>
          <Column>
            <Heading variant="subtitle ">Електронна пошта</Heading>{" "}
            <Box mb={{ base: "8px", md: "0" }}>
              <Link isExernal href="mailto:contact@covalenthq.com">
                contact@covalenthq.com
              </Link>
            </Box>
            <Box mb={{ base: "24px", md: "0" }}>
              <Link isExternal href="mailto:sales@covalenthq.com">
                sales@covalenthq.com
              </Link>
            </Box>
            <Heading>Глобальний штаб Covalent</Heading> <Text>{address}</Text>
          </Column>
          <Column d="flex" justifyContent={"center"}>
            <Image src={atom} alt="covalent atom" />
          </Column>
        </Row>
      </Container>
    </Page>
  );
};

export default Contacts;
