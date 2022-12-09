import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";

function AccountWishlistPage() {
  return (
    <Layout>
      <Helmet>
        <title>Wishlist | Veego</title>
      </Helmet>
      <p>Hello, Wishlist!</p>
    </Layout>
  );
}

export default AccountWishlistPage;