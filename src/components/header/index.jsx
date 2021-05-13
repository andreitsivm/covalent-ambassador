import React, { Fragment } from "react";
import { Flex, Box, Image, Heading } from "@chakra-ui/react";
import Link from "Components/link";

import Container from "Components/container";
import Desktop from "./desktop";
import Mobile from "./mobile";
import logo from "Img/logo-v.svg";

const Header = () => {
  return (
    <Fragment>
      <Box
        as="header"
        bg="secondary.1"
        display="table-row"
        height="82px"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          boxShadow: "small",
        }}
      >
        <Container
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          p={3}
        >
          <Link
            href="/"
            display="flex"
            alignItems="center"
            sx={{
              "&:focus": {
                boxShadow: "none",
              },
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <Image width="60px" height="60px" src={logo} mr={2} />
            <Heading as="div" variant="h3" color="basic.0">
              Covalent
            </Heading>
          </Link>
          <Desktop />
          <Mobile />
        </Container>
      </Box>
    </Fragment>
  );
};

export default Header;
