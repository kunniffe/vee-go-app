import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";

function CartPage() {
  return (
    <Layout>
      <Helmet>
        <title>Cart | Veego</title>
      </Helmet>
      <Typography>Hello, Cart!</Typography>
    </Layout>
  );
}

export default CartPage;