import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";

function CartPage() {
  return (
    <Layout>
      <Helmet>
        <title>Cart | Veego</title>
      </Helmet>
      <p>Hello, Cart!</p>
    </Layout>
  );
}

export default CartPage;