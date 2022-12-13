import { useLoaderData } from "react-router-dom";

import Layout from "../../../../components/Layout";
import Page from "../../../../components/Page";
import View from "./components/View";

function SingleRecipePage() {
  const recipeData = useLoaderData();

  return (
    <Layout>
      <Page title={recipeData.name}>
        <View data={recipeData} />
      </Page>
    </Layout>
  );
}

export default SingleRecipePage;
