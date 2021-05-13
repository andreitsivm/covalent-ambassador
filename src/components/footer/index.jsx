import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaReddit,
} from "react-icons/fa";
import Link from "Components/link";
import Row, { Column } from "Components/row";
import Container from "Components/container";
import logo from "Img/logo-v.svg";

const Footer = () => {
  return (
    <Box as="footer" bg="basic.5" py={5}>
      <Container>
        <Row>
          <Column>
            <Heading as="h3" variant="h3" color="basic.0" mb={3}>
              Спільнота
            </Heading>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.covalenthq.com/ambassador/"
            >
              Амбасадорська програма
            </Link>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.youtube.com/channel/UCGn-T9qPiXAx490Wr6WPbOw"
            >
              YouTube
            </Link>
          </Column>
          <Column>
            <Heading as="h3" variant="h3" color="basic.0" mb={3}>
              Розробка
            </Heading>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.covalenthq.com/docs/api/#overview"
            >
              Covalen API
            </Link>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.covalenthq.com/docs/"
            >
              Документація
            </Link>
          </Column>
        </Row>
        <Box
          my={5}
          sx={{
            height: "3px",
            bg: "secondary.0",
            width: "100%",
          }}
        />
        <Row>
          <Column d="flex" alignItems="center">
            <Image width="60px" height="60px" src={logo} mr={2} />
            <Heading as="div" variant="h3" color="basic.0">
              Covalent
            </Heading>
          </Column>
          <Box d="flex">
            <Link mr={3} isExternal href="https://t.me/CovalentHQ">
              <Box as={FaTelegramPlane} color="#fff" size="24" />
            </Link>
            <Link
              mr={3}
              isExternal
              href="https://discord.com/invite/fgZPpq69Dd"
            >
              <Box as={FaDiscord} color="basic.0" size="24" />
            </Link>
            <Link mr={3} isExternal href="https://twitter.com/covalent_hq">
              <Box as={FaTwitter} color="#fff" size="24" />
            </Link>
            <Link isExternal href="https://www.reddit.com/r/CovalentHQ/">
              <Box as={FaReddit} color="#fff" size="24" />
            </Link>
          </Box>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
