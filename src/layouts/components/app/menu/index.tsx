import { getCategories } from "@/services/api/api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function Menu() {
  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  function handleSelectCategory(id: number) {
    const newSelectedCategory =
      Number(searchParams.get("category")) === id ? 0 : id;

    setSearchParams((params) => {
      params.set("category", newSelectedCategory.toString());
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
                Number(searchParams.get("category")) === category.id
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
