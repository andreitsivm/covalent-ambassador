import * as React from "react";
import Page from "Components/page";
import pageMeta from "./pageMeta.json";

const NotFoundPage = (props) => {
  return (
    <Page {...pageMeta} {...props}>
      Page not found
    </Page>
  );
};

export default NotFoundPage;
