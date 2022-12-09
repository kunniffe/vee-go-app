import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";

function RecipeListPage() {
  return (
    <Layout>
      <Helmet>
        <title>Recipes | Veego</title>
      </Helmet>
      <p>Hello, Recipe List!</p>
    </Layout>
  );
}

export default RecipeListPage;