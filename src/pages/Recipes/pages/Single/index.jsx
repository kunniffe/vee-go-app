import { useEffect, useState } from "react";

import Layout from "../../../../components/Layout";
import { getSingleRecipe } from "../../../../services/recipe";
import Recipe from "./components/Recipe";

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

  return (
    <Layout>
      {loading && <p>Loading...</p>}
      {!loading && <Recipe data={recipe} />}
    </Layout>
  );
}

export default SingleRecipePage;
