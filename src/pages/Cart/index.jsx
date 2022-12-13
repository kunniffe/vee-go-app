import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";
import Page from "../../components/Page";

function CartPage() {
  return (
    <Layout>
      <Helmet>
        <title>Cart | Veego</title>
      </Helmet>
      <Page title="Cart">
        <p>Hello, Cart!</p>
      </Page>
    </Layout>
  );
}

export default CartPage;