import React from "react";

import withProviders from "app/providers";
import { Routing } from "pages";

function App() {
  return (
    <Routing />
  );
}

export default withProviders(App);
