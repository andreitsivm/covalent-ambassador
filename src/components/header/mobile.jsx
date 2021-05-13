import React, { Fragment, useState } from "react";
import { Box } from "@chakra-ui/react";
import Link from "Components/link";
import { MdMenu, MdClose } from "react-icons/md";

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
        <Box
          bg="basic.0"
          color="basic.5"
          display="flex"
          borderRadius="medium"
          aria-label="hamburger menu"
          p={2}
          onClick={() => toggleOpen(!isOpen)}
        >
          <Box as={MdMenu} color="basic.5" />
        </Box>

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
          <Box
            display="flex"
            aria-label="close button"
            p={2}
            onClick={() => toggleOpen(false)}
          >
            <Box as={MdClose} color="basic.5" />
          </Box>

          <Link href="/how-it-works/" variant="mobileLink" py={2} mx={0}>
            How it works
          </Link>

          <Link href="/about/" variant="mobileLink" py={2} mx={0}>
            About
          </Link>
          <Link href="/contacts/" variant="mobileLink" py={2} mx={0}>
            Contacts
          </Link>
        </Box>
      </Box>
    </Fragment>
  );
};
export default Mobile;
