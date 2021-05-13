import React from "react";
import propTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import { Link as ChakraLink } from "@chakra-ui/react";

const Link = ({ isExternal, href, children, ...rest }) => {
  return isExternal ? (
    <ChakraLink isExternal href={href} {...rest}>
      {children}
    </ChakraLink>
  ) : (
    <ChakraLink as={GatsbyLink} to={href} {...rest}>
      {children}
    </ChakraLink>
  );
};

Link.propTypes = {
  isExternal: propTypes.bool,
  children: propTypes.node,
  href: propTypes.string,
};
Link.defaultProps = {
  isExternal: false,
};
export default Link;
