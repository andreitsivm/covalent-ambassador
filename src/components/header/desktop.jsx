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
    <Link variant="headerLink" color="basic.0" href="/how-it-works/" mx={2}>
      Як це працює
    </Link>

    <Link variant="headerLink" href="/about/" mx={2}>
      Про нас
    </Link>
    <Link variant="headerLink" href="/contacts/" mx={2}>
      Контакти
    </Link>
  </Flex>
);
export default Desktop;
