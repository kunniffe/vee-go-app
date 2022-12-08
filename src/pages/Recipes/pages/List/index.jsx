import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";

function RecipeListPage() {
  return (
    <Layout>
      <Helmet>
        <title>Recipes | Veego</title>
      </Helmet>
      <Typography>Hello, Recipe List!</Typography>
    </Layout>
  );
}

export default RecipeListPage;