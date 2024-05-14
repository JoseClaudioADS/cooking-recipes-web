import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Recipe } from "@/services/api/types/search-recipes.api.type";
import { ThumbsUp } from "@phosphor-icons/react";
import { useMemo } from "react";

export interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const recipeTitle = useMemo(() => {
    const maxTitleLength = 50;
    return recipe.title.length > maxTitleLength
      ? recipe.title.slice(0, maxTitleLength) + "..."
      : recipe.title;
  }, [recipe]);

  return (
    <Card className="border-none border-0">
      <CardContent className="flex w-full items-center justify-center p-0">
        <img
          className="w-full object-cover h-48 rounded-2xl"
          src={recipe.photoUrl}
        ></img>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 p-2 mt-2">
        <p className="text-primary font-bold h-20">{recipeTitle}</p>
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-2">
            <ThumbsUp />
            <span className="text-sm text-primary">32</span>
          </div>
          <span className="text-sm italic">by {recipe.user.name}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
