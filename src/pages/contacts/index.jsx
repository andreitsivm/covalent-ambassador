import React from "react";
import { Heading, Text, Box, Image } from "@chakra-ui/react";

import Page from "Components/page";
import Container from "Components/container";
import Row, { Column } from "Components/row";
import Link from "Components/link";
import bg from "Img/bg-4.jpg";
import atom from "Img/covalent-atom.svg";

import pageMeta from "./pageMeta.json";

const Contacts = (props) => {
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
          <Box maxW={{ base: "100%", md: "45%" }}>
            <Heading as="h1" variant="h1" color="basic.0">
              Контакти
            </Heading>
            <Text color="basic.0" variant="subtitle">
              Глибокий досвід у галузі фінансів, блокчейнів, баз даних та
              розподілених систем.
            </Text>
          </Box>
        </Container>
      </Box>
      <Container py={10}>
        <Row>
          <Column>
            <Heading variant="subtitle ">Email</Heading>{" "}
            <Box mb={{ base: "8px", md: "0" }}>
              <Link isExternal href="mailto:contact@covalenthq.com">
                contact@covalenthq.com
              </Link>
            </Box>
            <Box mb={{ base: "24px", md: "0" }}>
              <Link isExternal href="mailto:sales@covalenthq.com">
                sales@covalenthq.com
              </Link>
            </Box>
            <Heading>Covalent Global Headquarters</Heading>{" "}
            <Text isExternal href="mailto:contact@covalenthq.com">
              #602 -- 151, W. Hastings St. Vancouver, BC V6B 1H4, Canada
            </Text>
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
