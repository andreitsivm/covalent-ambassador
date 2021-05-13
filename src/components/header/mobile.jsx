import React, { Fragment, useState } from "react";
import { Box, Button, Link } from "@chakra-ui/react";

// import MenuIcon from "./img/menu.inline.svg";
// import MenuClose from "./img/close.inline.svg";

const Mobile = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <Fragment>
      <Box
        as="nav"
        display={{
          lg: "none",
        }}
        sx={{
          position: "relative",
        }}
      >
        <Button
          display="flex"
          aria-label="hamburger menu"
          p={2}
          onClick={() => toggleOpen(!isOpen)}
        >
          |||
        </Button>

        <Box
          width="320px"
          p={3}
          bg="basic.0"
          overflowY="scroll"
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            right: isOpen ? 0 : "-320px",
            transition: "right 0.3s",
            zIndex: 1000,
          }}
        >
          <Button
            display="flex"
            aria-label="close button"
            ml="auto"
            p={2}
            onClick={() => toggleOpen(false)}
          >
            x
          </Button>

          <Link
            href="/how-it-works/"
            variant="headerLink"
            display="block"
            py={2}
            mx={0}
          >
            How it works
          </Link>

          <Link
            href="/our-writers/"
            variant="headerLink"
            display="block"
            py={2}
            mx={0}
          >
            Top writers
          </Link>
          <Link
            href="/contact-us/"
            variant="headerLink"
            display="block"
            py={2}
            mx={0}
          >
            Contact us
          </Link>
        </Box>
      </Box>
    </Fragment>
  );
};
export default Mobile;
