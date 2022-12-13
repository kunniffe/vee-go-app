import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";
import Page from "../../../../components/Page";

function AccountDashboardPage() {
  return (
    <Layout>
      <Helmet>
        <title>Account | Veego</title>
      </Helmet>
      <Page title="Account">
        <p>Hello, Dashboard!</p>
      </Page>
    </Layout>
  );
}

export default AccountDashboardPage;