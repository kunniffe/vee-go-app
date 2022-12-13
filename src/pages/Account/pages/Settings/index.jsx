import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";
import Page from "../../../../components/Page";

function AccountSettingsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Settings | Veego</title>
      </Helmet>
      <Page title="Settings">
        <p>Hello, Settings!</p>
      </Page>
    </Layout>
  );
}

export default AccountSettingsPage;