export type Recipe = {
  id: number;
  title: string;
  description: string | null;
  preparationTime: number;
  ingredients: {
    id: number;
    name: string;
    quantity: string;
  }[];
  photoUrl: string;
  user: {
    id: number;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
};

export const SEARCH_RECIPES_DEFAULT_PAGE_SIZE = "15";
export const SEARCH_RECIPES_DEFAULT_PAGE = "1";

export enum SearchRecipesParams {
  Q = "q",
  CATEGORY_ID = "categoryId",
  SORT_BY = "sortBy",
  PAGE = "page",
  SIZE = "size",
}

export type SearchRecipesResult = {
  total: number;
  items: Recipe[];
};
