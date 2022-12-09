import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";

function AccountSettingsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Settings | Veego</title>
      </Helmet>
      <p>Hello, Settings!</p>
    </Layout>
  );
}

export default AccountSettingsPage;