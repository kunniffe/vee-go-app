import { Helmet } from "react-helmet";

import Layout from "../../../../../../components/Layout";

function AccountOrderListPage() {
  return (
    <Layout>
      <Helmet>
        <title>Orders | Veego</title>
      </Helmet>
      <p>Hello, Order List!</p>
    </Layout>
  );
}

export default AccountOrderListPage;