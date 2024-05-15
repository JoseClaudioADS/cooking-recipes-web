import { getCategories } from "@/services/api/api";
import { SearchRecipesParams } from "@/services/api/types/search-recipes.api.type";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function Menu() {
  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  function handleSelectCategory(id?: number) {
    const newSelectedCategory =
      Number(searchParams.get(SearchRecipesParams.CATEGORY_ID)) === id ? 0 : id;

    setSearchParams((params) => {
      if (id) {
        params.set(
          SearchRecipesParams.CATEGORY_ID,
          Number(newSelectedCategory).toString()
        );
      } else {
        params.delete(SearchRecipesParams.CATEGORY_ID);
      }

      return params;
    });
  }

  return (
    <div>
      <p
        className="font-bold text-4xl hover:text-primary hover:cursor-pointer"
        onClick={() => handleSelectCategory(0)}
      >
        All Recipes
      </p>

      <div className="mt-10">
        {categories.data?.map((category) => {
          return (
            <p
              key={category.id}
              className={`mt-4 text-xl hover:text-primary hover:cursor-pointer ${
                Number(searchParams.get(SearchRecipesParams.CATEGORY_ID)) ===
                category.id
                  ? "text-primary"
                  : ""
              }`}
              onClick={() => handleSelectCategory(category.id)}
            >
              {category.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
