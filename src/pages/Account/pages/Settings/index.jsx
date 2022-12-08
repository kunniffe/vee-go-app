import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";

function AccountSettingsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Settings | Veego</title>
      </Helmet>
      <Typography>Hello, Settings!</Typography>
    </Layout>
  );
}

export default AccountSettingsPage;