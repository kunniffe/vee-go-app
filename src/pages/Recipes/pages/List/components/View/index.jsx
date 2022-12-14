import { useState } from "react";

import Card from "../../../../../../components/Card";
import Deck from "../../../../../../components/Deck";

const View = ({ data }) => {
  const [recipes, setRecipes] = useState(data);

  function handleFilterChange(event) {
    const option = event.target.value;

    // Filter only the recipes with option.
    if (option === "filter") {
      setRecipes(data);
    } else {
      const results = data.filter((recipe) => recipe.course === option);
      setRecipes(results);
    }
  }

  return (
    <>
      <select 
        name="Recipes__filter"
        className="Recipes__filter"
        onChange={handleFilterChange}
      >
        {["Filter", "Breakfast", "Lunch", "Dinner", "Dessert"].map((meal, index) => (
          <option key={index} value={meal.toLowerCase()}>{meal}</option>
        ))}
      </select>

      <Deck>
        {recipes.map((recipe, index) => (
          <Card
            key={index}
            href={`/recipes/${recipe.id}`}
            title={recipe.name}
            subtitle={recipe.description}
            image={recipe.image}
          />
        ))}
      </Deck>
    </>
  );
}

export default View;