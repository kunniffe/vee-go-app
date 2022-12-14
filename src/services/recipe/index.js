import data from "./data";

export function getAllRecipes() {
  return data;
}

export function getSingleRecipe(id) {
  const recipes = data;
  return recipes.find((x) => x.id === id);
}

export function singleRecipeLoader({params}) {
  const recipe = getSingleRecipe(params.recipeId);
  return recipe;
}