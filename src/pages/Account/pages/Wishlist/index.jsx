import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";
import Page from "../../../../components/Page";

function AccountWishlistPage() {
  return (
    <Layout>
      <Helmet>
        <title>Wishlist | Veego</title>
      </Helmet>
      <Page title="Wishlist">
        <p>Hello, Wishlist!</p>
      </Page>
    </Layout>
  );
}

export default AccountWishlistPage;