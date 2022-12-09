import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "../../../../components/Layout";
import { getAllRecipes } from "../../../../services/recipe";

function RecipeListPage() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await getAllRecipes();

      setRecipes(request);
      setLoading(false);
    })();
  });

  const RecipeList = () => {
    return (
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>Recipes | Veego</title>
      </Helmet>
      {loading && <p>Loading...</p>}
      {!loading && <RecipeList />}
    </Layout>
  );
}

export default RecipeListPage;
