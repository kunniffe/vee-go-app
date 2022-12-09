import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';

function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Home | Veego</title>
      </Helmet>
      <p>Hello, Home!</p>
    </Layout>
  );
}

export default HomePage;