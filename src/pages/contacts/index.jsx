import React from "react";
import Page from "Components/page";
import Container from "Components/container";
import pageMeta from "./pageMeta.json";
import { Heading } from "@chakra-ui/layout";

const Contacts = (props) => {
  return (
    <Page {...pageMeta} {...props}>
      <Container>
        <Heading>Contacts</Heading>
      </Container>
    </Page>
  );
};

export default Contacts;
