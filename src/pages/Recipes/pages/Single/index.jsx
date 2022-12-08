import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

import Layout from "../../../../components/Layout";

function SingleRecipePage() {
  return (
    <Layout>
      <Helmet>
        <title>Single Recipe | Veego</title>
      </Helmet>
      <Typography>Hello, Single Recipe!</Typography>
    </Layout>
  );
}

export default SingleRecipePage;