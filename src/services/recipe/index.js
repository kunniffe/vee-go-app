import data from "./data";

export async function getAllRecipes() {
  return await data.recipes;
}

export function getSingleRecipe(id) {
  const recipes = data.recipes;
  return recipes.find((x) => x.id === id);
}
