import { getCategories } from "@/services/api/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function Menu() {
  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const [selectedCategory, setSelectedCategory] = useState(0);

  function handleSelectCategory(id: number) {
    setSelectedCategory((currentSelectedCategory: number) =>
      currentSelectedCategory === id ? 0 : id
    );
  }

  return (
    <div>
      <p className="font-bold text-4xl">Recipes</p>

      <div className="mt-10">
        {categories.data?.map((category) => {
          return (
            <p
              key={category.id}
              className={`mt-4 text-xl hover:text-primary hover:cursor-pointer ${
                selectedCategory === category.id ? "text-primary" : ""
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
