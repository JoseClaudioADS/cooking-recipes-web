import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { RecipeCard } from "./components/recipe-card";
import { SearchRecipesResult } from "./types/home.type";

export function Home() {
  const getRecipes = async () => {
    const response = await api.get("/recipes");
    return response.data;
  };

  // Queries
  const query = useQuery<SearchRecipesResult>({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });

  return (
    <div className="flex flex-wrap w-full">
      {query.data?.items.map((recipe) => (
        <div className="mr-10 mb-10 min-w-64 w-72">
          <RecipeCard key={recipe.id} recipe={recipe} />
        </div>
      ))}
    </div>
  );
}
