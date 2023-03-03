import React from "react";

import Footer from "widgets/footer";
import Header from "widgets/header";
import { Layout } from "shared/ui";

const Main = () => {
  return(
    <Layout footer={<Footer />} header={<Header />}>
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </Layout>
  );
};

export default Main;