import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <p className="text-4xl font-bold tracking-tight text-primary">
            Cooking Recipes
          </p>
        </div>
        <div className="space-x-4">
          <Button
            variant="ghost"
            className="rounded-3xl bg-ghost hover:text-primary hover:bg-ghost p-4 text-lg"
          >
            Sign in
          </Button>
          <Button className="rounded-3xl pl-8 pr-8 text-lg font-semibold">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
