import { useLoaderData } from "react-router-dom";

import Layout from "../../../../components/Layout";
import View from "./components/View";

function SingleRecipePage() {
  const recipeData = useLoaderData();

  return (
    <Layout>
      <View data={recipeData} />
    </Layout>
  );
}

export default SingleRecipePage;
