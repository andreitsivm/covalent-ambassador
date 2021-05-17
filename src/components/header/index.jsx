import React, { Fragment, useRef } from "react";
import { Flex, Box, Image, Heading } from "@chakra-ui/react";
import { navigate } from "gatsby";

import Container from "Components/container";
import useOnScreen from "Hooks/useOnScreen";
import Desktop from "./desktop";
import Mobile from "./mobile";
import logo from "Img/logo-v.svg";

const scrollStyles = {
  background: "basic.5",
};

const Header = () => {
  const refBox = useRef(null);
  const isOnScreen = useOnScreen(refBox);

  return (
    <Fragment>
      <Box ref={refBox} height="1px" bg="secondary.1" />
      <Box
        as="header"
        background="secondary.1"
        height="82px"
        sx={{
          position: "fixed",
          boxShadow: "small",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          ...(!isOnScreen && scrollStyles),
        }}
      >
        <Container
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          p={3}
        >
          <Box
            onClick={() => navigate("/")}
            display="flex"
            alignItems="center"
            sx={{
              _hover: {
                cursor: "pointer",
              },
            }}
          >
            <Image width="48px" height="48px" src={logo} mr={2} />
            <Heading fontSize={{ base: "24px", md: "20px" }} color="basic.0">
              Covalent Ambassador Guide
            </Heading>
          </Box>
          <Desktop />
          <Mobile />
        </Container>
      </Box>
    </Fragment>
  );
};

export default Header;
