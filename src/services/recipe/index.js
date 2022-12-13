import data from "./data";

export async function getAllRecipes() {
  return await data;
}

export async function getSingleRecipe(id) {
  const recipes = await data;
  return await recipes.find((x) => x.id === id);
}
