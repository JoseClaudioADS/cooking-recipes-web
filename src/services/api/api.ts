import axios from "axios";
import env from "../env";
import { Category } from "./types/category.type";
import { SearchRecipesResult } from "./types/search-recipes.api.type";

export const api = axios.create({
  baseURL: env.VITE_API_URL, //TODO add env variable
});

export const searchRecipes = async (params: Record<string, string>) => {
  const response = await api.get<SearchRecipesResult>("/recipes", {
    params
  });
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get<Category[]>("/recipes/categories");
  return response.data;
};

export const requestMagicLink = async (email: string) => {
  const response = await api.post("/magic-link", { email });
  return response.data;
};
