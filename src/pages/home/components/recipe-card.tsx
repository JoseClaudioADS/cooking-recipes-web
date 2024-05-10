import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Recipe } from "@/services/api/types/search-recipes.api.type";
import dayjs from "dayjs";

export interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>
          Preparation time: {recipe.preparationTime} min
        </CardDescription>
      </CardHeader>
      <CardContent className="flex w-full items-center justify-center p-0 mb-5">
        <img className="w-full object-cover h-48" src={recipe.photoUrl}></img>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch">
        <div className="flex flex-col">
          <p>By: {recipe.user.name}</p>
          <p className="text-sm color-muted-foreground">
            {dayjs(recipe.createdAt).format("DD/MM/YYYY HH:mm")}
          </p>
        </div>
        <div className="flex flex-col mt-5 w-full">
          <Button variant="default">Detail</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
