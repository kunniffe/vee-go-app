import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";
import Page from "../../components/Page";

function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Home | Veego</title>
      </Helmet>
      <Page title="Home">
        <p>Hello, Home!</p>
      </Page>
    </Layout>
  );
}

export default HomePage;
