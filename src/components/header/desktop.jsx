import React from "react";
import { Flex } from "@chakra-ui/react";
import Link from "Components/link";

const Desktop = () => (
  <Flex
    as="nav"
    display={{
      base: "none",
      lg: "block",
    }}
    alignItems="center"
    ml="auto"
  >
      <Link variant="headerLink" href="/about/" mx={2}>
      About Covalent
    </Link>
    <Link variant="headerLink" href="/contacts/" mx={2}>
      Contacts
    </Link>
  </Flex>
);
export default Desktop;
