import React from "react";

import Footer from "widgets/footer";
import Header from "widgets/header";
import FormOfAdd from "features/formOfAdd";
import { Layout } from "shared/ui";

const AddTournament = () => {
  return(
    <Layout header={<Header />} footer={<Footer />}>
      <main className="w-1/3 py-10 max-xl:w-2/3 max-lg:w-3/4 max-md:w-full max-md:text-sm">
        <FormOfAdd />
      </main>
    </Layout>
  );
};

export default AddTournament;