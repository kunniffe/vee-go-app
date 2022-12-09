import { Helmet } from "react-helmet";

import Layout from "../../../../../../components/Layout";

function AccountSingleOrderPage() {
  return (
    <Layout>
      <Helmet>
        <title>Single Order | Veego</title>
      </Helmet>
      <p>Hello, Single Order!</p>
    </Layout>
  );
}

export default AccountSingleOrderPage;