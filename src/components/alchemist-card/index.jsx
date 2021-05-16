import React from "react";
import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import propTypes from "prop-types";

const AlchemCard = ({ image, title, description }) => {
  return (
    <Box
      maxW="370px"
      width="100%"
      bg="basic.0"
      mb={{ base: "30px", md: "0" }}
      mr={{ base: "0", md: "30px" }}
      sx={{
        borderRadius: "large",
        boxShadow: "medium",
        "&:last-of-type": {
          mr: 0,
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: 200,
          borderTopRadius: "large",
        }}
      ></Box>
      <Box p="32px">
        <Heading as="h3" variant="h3" textAlign="center">
          {title}
        </Heading>
        <Box>{description}</Box>
      </Box>
    </Box>
  );
};

AlchemCard.propTypes = {
  image: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.node.isRequired,
};

export default AlchemCard;
