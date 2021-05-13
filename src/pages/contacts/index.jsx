import React from "react";
import Page from "Components/page";

import pageMeta from "./pageMeta.json";

const Contacts = (props) => {
  return (
    <Page {...pageMeta} {...props}>
      Contacts
    </Page>
  );
};

export default Contacts;
