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
        <Container py="256px">
          <Box maxW={{ base: "100%", md: "60%" }}>
            <Heading color="basic.0" variant="h1" as="h1" textAlign="center">
              Один уніфікований API. Один мільярд можливостей.
            </Heading>
            <Text textAlign="center" variant="subtitle" color="basic.0">
              Covalent забезпечує уніфікований API, що забезпечує видимість до
              мільярдів точок даних блокчейну.
            </Text>
          </Box>
        </Container>
      </Box>

      <Box py={5}>
        <Container>
          <Row>
            <Column d="flex" flexDirection="column" justifyContent="center">
              <Heading variant="h2">What is Covalent?</Heading>
              <Text>
                Covalent provides a unified API to bring full transparency and
                visibility to assets across all blockchain networks. Simply put,
                we have a single API which allows you to pull detailed, granular
                blockchain transaction data from multiple blockchains with no
                code.
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
      <Box py={5}>
        <Container>
          <FluidItem>
            <Heading variant="h1">What makes Covalent unique?</Heading>
            <Text variant="subtitle">
              There are many elements of the Covalent which make us unique in
              the marketplace. However, our core differentiators from projects
              like the Graph are:
            </Text>
            <Box>
              <Heading>1. Data availability</Heading>
              <Text>
                We are the only project to fully index entire blockchains – this
                means every single contract, every single wallet address, and
                every single transaction. This is billions of rows of data and
                terabytes of data. Other projects only provide a small subset of
                the available data or only start collecting data once the
                appropriate query or filter is set up.
              </Text>
            </Box>
            <Box>
              <Heading>2. Composability</Heading>
              <Text>
                Composability is a critical piece of Decentralized Finance
                (DeFi) applications and allows developers to quickly and easily
                construct financial solutions leveraging 'Lego-like' building
                blocks from a multitude of projects. The multichain flexiblity
                and deep, granular data provided by our APIs means developers
                can quickly and easily build scalable and data rich applications
                with no query code.
              </Text>
            </Box>
            <Box>
              <Heading>3. Multi-blockchain support</Heading>
              <Text>
                Multichain is in our DNA. Covalent already indexes and has
                customers on 7 different blockchain networks with many more to
                announce soon.
              </Text>
            </Box>
            <Box>
              <Heading>4. No code solutiony</Heading>
              <Text>
                We believe in no-code solutions for our users. This means no
                complicated SQL queries, no subgraph development and
                maintenance, and no need to invest in highly-skilled (read
                expensive) developers to simply retrieve blockchain data, which
                is a monumental waste of engineering time. One API and you are
                done.
              </Text>
            </Box>
          </FluidItem>
        </Container>
      </Box>
    </Page>
  );
};

export default Index;
