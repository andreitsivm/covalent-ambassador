import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "@chakra-ui/react";

export const Column = (props) => (
  <Box
    flexGrow={1}
    flexShrink={1}
    flexBasis={{ base: "auto", md: "100%" }}
    order={0}
    {...props}
  />
);

export const FluidItem = (props) => (
  <Box
    grow={1}
    flexShrink={0}
    flexBasis="auto"
    order={0}
    // we can accept width prop with responsive styles
    width="100%"
    {...props}
  />
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
};

const Row = (props) => (
  <Flex
    width="100%"
    flexWrap="nowrap"
    flexDirection={{
      base: "column",
      md: "row",
    }}
    {...props}
  />
);

Row.propTypes = {
  children: PropTypes.arrayOf(Column).isRequired,
};

export default Row;
