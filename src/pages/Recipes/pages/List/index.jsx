import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

import Layout from "../../../../components/Layout";
import Page from "../../../../components/Page";
import View from "./components/View";

function RecipeListPage() {
  const recipeData = useLoaderData();

  return (
    <Layout>
      <Helmet>
        <title>Recipes | Veego</title>
      </Helmet>
      <Page title="Recipes">
        <View data={recipeData} />
      </Page>
    </Layout>
  );
}

export default RecipeListPage;
