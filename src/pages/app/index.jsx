import React from "react";
import { Router } from "@reach/router";
import Page from "Components/page";
import Diagram from "Templates/diagram";

const App = () => {
  return (
    <Page>
      <Router basepath="/app">
        <Diagram path="/diagram" />
      </Router>
    </Page>
  );
};
export default App;
