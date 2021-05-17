import React from "react";
import { Flex, Box, Heading, Image } from "@chakra-ui/react";
import propTypes from "prop-types";

const AlchemCard = ({ image, title, description }) => {
  return (
    <Flex
      width="100%"
      bg="basic.0"
      flexDirection={{ base: "column", md: "row" }}
      mb="30px"
      sx={{
        borderRadius: "large",
        boxShadow: "medium",
      }}
    >
      <Image sx={{ borderRadius: "large" }} maxW="330px" src={image} />
      <Box p="32px">
        <Heading mb={5} as="h3" variant="h3" textAlign="center">
          {title}
        </Heading>
        <Box textAlign={{ base: "center", md: "left" }}>{description}</Box>
      </Box>
    </Flex>
  );
};

AlchemCard.propTypes = {
  image: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.node.isRequired,
};

export default AlchemCard;
