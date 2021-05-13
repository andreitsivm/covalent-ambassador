import React, { Fragment } from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import { navigate } from "gatsby";

import Container from "Components/container";
import Desktop from "./desktop";
import Mobile from "./mobile";
import logo from "Img/logo--white.svg";

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
          <Box
            onClick={() => navigate("/")}
            sx={{
              _hover: {
                cursor: "pointer",
              },
            }}
          >
            <Image width="160px" h="60px" src={logo} />
          </Box>
          <Desktop />
          <Mobile />
        </Container>
      </Box>
    </Fragment>
  );
};

export default Header;
