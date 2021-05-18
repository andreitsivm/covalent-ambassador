import React, { Fragment } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "Components/link";
import { MdMenu } from "react-icons/md";

const Mobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Fragment>
      <Box
        width="32px"
        height="32px"
        bg="primary"
        borderRadius="small"
        d={{ base: "flex", lg: "none" }}
        p="8px"
        alignItems="center"
        justifyContent="center"
        onClick={onOpen}
      >
        <Box as={MdMenu} color="basic.0" size="25" />
      </Box>

      <Drawer
        closeOnEsc
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Covalent Ambassadors</DrawerHeader>

          <DrawerBody>
            <Link href="/about/" variant="mobileLink" py={2} mx={0}>
              About Covalent
            </Link>
            <Link href="/contacts/" variant="mobileLink" py={2} mx={0}>
              Contacts
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
    // <Fragment>
    //   <Box
    //     as="nav"
    //     display={{
    //       lg: "none",
    //     }}
    //     sx={{
    //       position: "relative",
    //     }}
    //   >
    //     <Box
    //       color="basic.5"
    //       display="flex"
    //       bg="secondary.0"
    //       borderRadius="medium"
    //       aria-label="hamburger menu"
    //       p={2}
    //       sx={{
    //         _hover: {
    //           bg: "primary",
    //           cursor: "pointer",
    //           transition: "background-color 0.3s",
    //         },
    //       }}
    //       onClick={() => toggleOpen(!isOpen)}
    //     >
    //       <Box as={MdMenu} color="basic.0" />
    //     </Box>

    //     <Box
    //       ref={ref}
    //       width="320px"
    //       p={3}
    //       bg="basic.0"
    //       sx={{
    //         position: "fixed",
    //         top: 0,
    //         bottom: 0,
    //         right: isOpen ? 0 : "-320px",
    //         transition: "right 0.3s",
    //         zIndex: 1000,
    //       }}
    //     >
    //       <Box
    //         justifyContent="flex-end"
    //         display="flex"
    //         aria-label="close button"
    //         p={2}
    //         onClick={() => toggleOpen(false)}
    //         sx={{
    //           _hover: {
    //             color: "secondary.0",
    //             cursor: "pointer",
    //             transition: "color 0.3s",
    //           },
    //         }}
    //       >
    //         <Box
    //           as={MdClose}
    //           sx={{
    //             color: "basic.5",
    //             _hover: {
    //               color: "secondary.0",
    //               cursor: "pointer",
    //             },
    //           }}
    //         />
    //       </Box>

    //
    //     </Box>
    //   </Box>
    // </Fragment>
  );
};
export default Mobile;
