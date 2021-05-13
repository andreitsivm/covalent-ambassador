import React, { Fragment, useState, useRef } from "react";
import { Box, useOutsideClick } from "@chakra-ui/react";
import Link from "Components/link";
import { MdMenu, MdClose } from "react-icons/md";

const Mobile = () => {
  const [isOpen, toggleOpen] = useState(false);
  const ref = useRef();
  useOutsideClick({
    ref: ref,
    handler: () => toggleOpen(false),
  });
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
          color="basic.5"
          display="flex"
          bg="secondary.0"
          borderRadius="medium"
          aria-label="hamburger menu"
          p={2}
          sx={{
            _hover: {
              bg: "primary",
              cursor: "pointer",
              transition: "background-color 0.3s",
            },
          }}
          onClick={() => toggleOpen(!isOpen)}
        >
          <Box as={MdMenu} color="basic.0" />
        </Box>

        <Box
          ref={ref}
          width="320px"
          p={3}
          bg="basic.0"
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
            justifyContent="flex-end"
            display="flex"
            aria-label="close button"
            p={2}
            onClick={() => toggleOpen(false)}
            sx={{
              _hover: {
                color: "secondary.0",
                cursor: "pointer",
                transition: "color 0.3s",
              },
            }}
          >
            <Box
              as={MdClose}
              sx={{
                color: "basic.5",
                _hover: {
                  color: "secondary.0",
                  cursor: "pointer",
                },
              }}
            />
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
