import React from "react";
import Page from "Components/page";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
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
import planet from "Img/planet.jpg";

import pageMeta from "./pageMeta.json";

const About = (props) => {
  return (
    <Page {...pageMeta} {...props}>
      <Box
        backgroundAttachment="fixed"
        sx={{
          backgroundImage: `url(${banner})`,
          bgColor: "secondary.1",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container py={{ base: 5, md: "128px", lg: "256px" }}>
          <Box maxW={{ base: "100%", lg: "60%" }}>
            <Heading color="basic.0" variant="h1" as="h1" textAlign="center">
              One unified API.
            </Heading>
            <Heading color="basic.0" variant="h1" textAlign="center">
              One billion possibilities.
            </Heading>
            <Text textAlign="center" variant="subtitle" color="basic.0">
              Covalent provides a unified API bringing visibility to billions of
              blockchain data points.
            </Text>
          </Box>
        </Container>
      </Box>

      <Box
        py={{ base: 2, md: 10 }}
        textAlign={{ base: "center", md: "left" }}
        bg="basic.1"
      >
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
              <Heading variant="h1">What is Covalent?</Heading>
              <Text>
                Covalent provides a unified API to bring full transparency and
                visibility to assets across all blockchain networks. Simply put,
                we have a single API which allows you to pull detailed, granular
                blockchain transaction data from multiple blockchains with no
                code.
              </Text>
            </Column>
          </Row>
        </Container>
      </Box>
      <Box
        textAlign={{ base: "center", md: "left" }}
        bgImage={`url(${planet})`}
        bgPosition="center"
        py="150px"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundAttachment={{ base: "inherit", md: "fixed" }}
        flexBasis="auto"
      >
        <Container>
          <FluidItem>
            <Heading color="basic.0" variant="h1">
              What makes Covalent unique?
            </Heading>
            <Text color="basic.0" variant="subtitle">
              There are many elements of the Covalent which make us unique in
              the marketplace. However, our core differentiators from projects
              like the Graph are:
            </Text>
            <Box>
              <Heading color="basic.0">1. Data availability</Heading>
              <Text color="basic.0">
                We are the only project to fully index entire blockchains – this
                means every single contract, every single wallet address, and
                every single transaction. This is billions of rows of data and
                terabytes of data. Other projects only provide a small subset of
                the available data or only start collecting data once the
                appropriate query or filter is set up.
              </Text>
            </Box>
            <Box>
              <Heading color="basic.0">2. Composability</Heading>
              <Text color="basic.0">
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
              <Heading color="basic.0">3. Multi-blockchain support</Heading>
              <Text color="basic.0">
                Multichain is in our DNA. Covalent already indexes and has
                customers on 7 different blockchain networks with many more to
                announce soon.
              </Text>
            </Box>
            <Box>
              <Heading color="basic.0">No code solution</Heading>
              <Text color="basic.0">
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
            A Team that's Relentless.
          </Heading>
          <Text color="basic.0" variant="subtitle">
            Deep expertise in finance, blockchains, databases and distributed
            systems.
          </Text>
        </Container>
      </Box>
      <Box py={10}>
        <Container textAlign={{ base: "center", md: "left" }}>
          <Heading variant="h1">Unstoppable team</Heading>
          <Text>
            We are a 30-person distributed team with over 100 years of
            cumulative crypto experience.
          </Text>
          <Flex flexWrap="wrap">
            <Card image={ganesh} name="Ganesh Swami" status="CO-FOUNDER, CEO" />

            <Card image={levi} name="Levi Aul" status="CO-FOUNDER, CTO" />

            <Card image={adrian} name="Adrian Jonklaas" status="CFO" />

            <Card
              image={jackie}
              name="Jacqueline Kim Perez"
              status="TOKEN MARKETING"
            />

            <Card image={erik} name="Erik Ashdown" status="ECOSYSTEM" />

            <Card image={rohit} name="Rohit Tandon" status="DESIGN" />
          </Flex>
        </Container>
      </Box>
    </Page>
  );
};

export default About;
