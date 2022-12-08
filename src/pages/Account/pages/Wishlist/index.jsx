import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";

function AccountWishlistPage() {
  return (
    <Layout>
      <Helmet>
        <title>Wishlist | Veego</title>
      </Helmet>
      <Typography>Hello, Wishlist!</Typography>
    </Layout>
  );
}

export default AccountWishlistPage;