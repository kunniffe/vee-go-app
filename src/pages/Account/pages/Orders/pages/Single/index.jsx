import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

import Layout from "../../../../../../components/Layout";

function AccountSingleOrderPage() {
  return (
    <Layout>
      <Helmet>
        <title>Single Order | Veego</title>
      </Helmet>
      <Typography>Hello, Single Order!</Typography>
    </Layout>
  );
}

export default AccountSingleOrderPage;