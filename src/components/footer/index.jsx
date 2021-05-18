import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaReddit,
} from "react-icons/fa";
import Link from "Components/link";
import Row, { Column } from "Components/row";
import Container from "Components/container";
import useSiteMeta from "Hooks/useSiteMeta";
import logo from "Img/logo--white.svg";

const Footer = (props) => {
  const { copyright, currentYear } = useSiteMeta();
  return (
    <Box as="footer" bg="basic.5" py={5} {...props}>
      <Container>
        <Row>
          <Column>
            <Image width="160px" h="60px" src={logo} />
            <Box d="flex" my="16px">
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
          </Column>
          <Column>
            <Heading as="h3" variant="h3" color="basic.0" mb={3}>
              Community
            </Heading>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.covalenthq.com/ambassador/"
            >
              Ambassador program
            </Link>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.youtube.com/channel/UCGn-T9qPiXAx490Wr6WPbOw"
            >
              YouTube
            </Link>
            <Link
              variant="footerLink"
              isExternal
              href="https://medium.com/covalent-hq"
            >
              Medium
            </Link>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.notion.so/The-Covalent-Alchemist-Laboratory-d8f9d300e9ba4982840b84342090cfed"
            >
              Notion
            </Link>
          </Column>
          <Column>
            <Heading as="h3" variant="h3" color="basic.0" mb={3}>
              Development
            </Heading>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.covalenthq.com/docs/api/#overview"
            >
              Covalent API
            </Link>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.covalenthq.com/docs/"
            >
              Documentation
            </Link>
          </Column>
        </Row>
        <Box
          my={5}
          sx={{
            height: "3px",
            bg: "primary",
            width: "100%",
          }}
        />
      </Container>
      <Container>
        <Text textAlign="center" variant="caption">
          &copy; {`${currentYear} ${copyright}`}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
