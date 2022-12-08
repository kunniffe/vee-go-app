import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";

function CheckoutPage() {
  return (
    <Layout>
      <Helmet>
        <title>Checkout | Veego</title>
      </Helmet>
      <Typography>Hello, Checkout!</Typography>
    </Layout>
  );
}

export default CheckoutPage;