import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

import Layout from "../../../../components/Layout";
import View from "./components/View";

function RecipeListPage() {
  const recipeData = useLoaderData();

  return (
    <Layout>
      <Helmet>
        <title>Recipes | Veego</title>
      </Helmet>
      <div className="Recipes__title">
        <View data={recipeData} />
      </div>
    </Layout>
  );
}

export default RecipeListPage;
