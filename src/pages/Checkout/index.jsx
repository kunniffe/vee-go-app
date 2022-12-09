import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";

function CheckoutPage() {
  return (
    <Layout>
      <Helmet>
        <title>Checkout | Veego</title>
      </Helmet>
      <p>Hello, Checkout!</p>
    </Layout>
  );
}

export default CheckoutPage;