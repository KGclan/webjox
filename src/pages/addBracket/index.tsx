import React from "react";

import Footer from "widgets/footer";
import Header from "widgets/header";
import FormOfAdd from "features/formOfAdd";
import { Layout } from "shared/ui";

const AddBracket = () => {
  return(
    <Layout header={<Header />} footer={<Footer />}>
      <main className="w-1/3">
        <FormOfAdd />
      </main>
    </Layout>
  );
};

export default AddBracket;