import React, { Fragment, useRef } from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { navigate } from "gatsby";

import Container from "Components/container";
import useOnScreen from "Hooks/useOnScreen";
import Desktop from "./desktop";
import Mobile from "./mobile";
import logo from "Img/logo-v.svg";

const scrollStyles = {
  background: "basic.5",
};

const Header = (props) => {
  const refBox = useRef(null);
  const isOnScreen = useOnScreen(refBox);

  return (
    <Fragment>
      <Box ref={refBox} height="1px" bg="secondary.1" {...props} />
      <Box
        as="header"
        background="secondary.1"
        height="84px"
        display="flex"
        alignItems="center"
        sx={{
          position: "fixed",
          boxShadow: "small",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 4,
          ...(!isOnScreen && scrollStyles),
        }}
      >
        <Container
          flexGrow={1}
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
            <Image
              width={{ base: "32px", md: "48px" }}
              height={{ base: "32px", md: "48px" }}
              src={logo}
              mr={2}
            />
            <Text
              mb={0}
              fontSize={{ base: "16px", md: "24px" }}
              color="basic.0"
            >
              Covalent Ambassador Guide
            </Text>
          </Box>
          <Desktop />
          <Mobile />
        </Container>
      </Box>
    </Fragment>
  );
};

export default Header;
