import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';

function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Home | Veego</title>
      </Helmet>
      <Typography>Hello, Home!</Typography>
    </Layout>
  );
}

export default HomePage;