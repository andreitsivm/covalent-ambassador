import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const Container = (props) => (
  <Box maxWidth="1180px" mx="auto" px={3} {...props} />
);

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: null,
};

export default Container;
