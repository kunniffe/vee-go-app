import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";

function AccountDashboardPage() {
  return (
    <Layout>
      <Helmet>
        <title>Dashboard | Veego</title>
      </Helmet>
      <Typography>Hello, Dashboard!</Typography>
    </Layout>
  );
}

export default AccountDashboardPage;