import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

import Layout from "../../../../../../components/Layout";

function AccountOrderListPage() {
  return (
    <Layout>
      <Helmet>
        <title>Orders | Veego</title>
      </Helmet>
      <Typography>Hello, Order List!</Typography>
    </Layout>
  );
}

export default AccountOrderListPage;