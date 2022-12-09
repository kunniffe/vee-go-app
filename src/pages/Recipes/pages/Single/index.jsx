import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";
import { getSingleRecipe } from "../../../../services/recipe";

function SingleRecipePage() {
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await getSingleRecipe("jambalaya");

      setRecipe(request);
      setLoading(false);
    })();
  });

  const Recipe = () => {
    // TODO: Recipe HTML goes here...
    return (
      <>
        <Helmet>
          <title>Single Recipe | Veego</title>
        </Helmet>
        <p>{recipe.name}</p>
      </>
    );
  };

  return (
    <Layout>
      {loading && <p>Loading...</p>}
      {!loading && <Recipe />}
    </Layout>
  );
}

export default SingleRecipePage;
