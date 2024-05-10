import axios from "axios";
import env from "../env";
import { SearchRecipesResult } from "./types/search-recipes.api.type";

export const api = axios.create({
  baseURL: env.VITE_API_URL, //TODO add env variable
});

export const searchRecipes = async () => {
  const response = await api.get<SearchRecipesResult>("/recipes");
  return response.data;
};
