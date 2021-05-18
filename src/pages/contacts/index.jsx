import React from "react";
import { Heading, Text, Box, Image } from "@chakra-ui/react";

import useSiteMeta from "Hooks/useSiteMeta";
import Page from "Components/page";
import Container from "Components/container";
import Row, { Column } from "Components/row";
import Link from "Components/link";
import bg from "Img/bg-4.jpg";
import covalent from "Img/covalent-wallpaper.jpg";

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
              Contact us
            </Heading>
          </Box>
        </Container>
      </Box>
      <Box bg="basic.1">
        <Container py={10} textAlign={{ base: "center", md: "left" }}>
          <Row>
            <Column maxH="300px" d="flex" mr={{ base: 0, md: "30px" }}>
              <Image src={covalent} alt="covalent" />
            </Column>
            <Column d="flex" flexDirection="column" justifyContent="center">
              <Box
                sx={{
                  boxShadow: "large",
                  border: "1px solid basic.2",
                  borderRadius: "large",
                  p: "16px",
                  bg: "basic.0",
                }}
              >
                <Heading variant="subtitle ">Email</Heading>{" "}
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
                <Heading>Covalent Global Headquarters</Heading>{" "}
                <Text>{address}</Text>
              </Box>
            </Column>
          </Row>
        </Container>
      </Box>
    </Page>
  );
};

export default Contacts;
