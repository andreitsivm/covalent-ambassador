/**
 * Implement Gatsby's Browser APIs in this file.
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./src/theme";

export const wrapPageElement = ({ element }) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>;
};
