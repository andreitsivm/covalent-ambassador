import React from "react";
import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import propTypes from "prop-types";

const AboutCard = ({ image, name, status }) => {
  return (
    <Flex
      maxW={{ base: "100%", md: "50%" }}
      width="100%"
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      mb={5}
    >
      <Box mb={{ base: "16px", md: "0" }} mr={{ base: "0", md: "16px" }}>
        <Image
          sx={{
            borderRadius: "small",
          }}
          maxW="200px"
          h="200px"
          src={image}
          alt={name}
        />
      </Box>
      <Box>
        <Heading as="h3" variant="h3">
          {name}
        </Heading>
        <Text color="secondary.0" variant="subtitle">
          {status}
        </Text>
      </Box>
    </Flex>
  );
};

AboutCard.propTypes = {
  image: propTypes.node.isRequired,
  name: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
};

export default AboutCard;
