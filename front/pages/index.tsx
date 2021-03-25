import React from "react";
import { NextPage } from "next";

import Layout from "components/layout";
import MainPage from "features/main-page";

const Index: NextPage = () => (
  <Layout>
    <MainPage />
  </Layout>
);

export default Index;
