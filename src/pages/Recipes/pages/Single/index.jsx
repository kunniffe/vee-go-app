import { Helmet } from 'react-helmet';

import Layout from "../../../../components/Layout";

function SingleRecipePage() {
  return (
    <Layout>
      <Helmet>
        <title>Single Recipe | Veego</title>
      </Helmet>
      <p>Hello, Single Recipe!</p>
    </Layout>
  );
}

export default SingleRecipePage;