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

export type SearchRecipesResult = {
  total: number;
  items: Recipe[];
};
