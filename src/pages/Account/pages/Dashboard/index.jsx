import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";

function AccountDashboardPage() {
  return (
    <Layout>
      <Helmet>
        <title>Dashboard | Veego</title>
      </Helmet>
      <p>Hello, Dashboard!</p>
    </Layout>
  );
}

export default AccountDashboardPage;