import { searchRecipes } from "@/services/api/api";
import { useQuery } from "@tanstack/react-query";
import { RecipeCard } from "./components/recipe-card";

export function Home() {
  const query = useQuery({
    queryKey: ["recipes"],
    queryFn: searchRecipes,
  });

  return (
    <div className="flex flex-wrap w-full">
      {query.data?.items.map((recipe) => (
        <div key={recipe.id} className="mr-10 mb-10 min-w-64 w-72">
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
}
