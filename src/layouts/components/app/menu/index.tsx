import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Menu() {
  return (
    <div className="flex flex-col space-y-10">
      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <Input id="search" placeholder="Recipe name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="searchByIngredients">Search by Ingredients</Label>
        <Input id="searchByIngredients" placeholder="Ingredient name" />
      </div>
      <Button className="mt-10 w-full">Add Recipe</Button>
    </div>
  );
}
