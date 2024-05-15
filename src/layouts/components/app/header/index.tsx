import { Link } from "react-router-dom";

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
          <Link
            to="/sign-in"
            className="rounded-3xl bg-ghost hover:text-primary hover:bg-ghost p-4 text-lg"
          >
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="rounded-3xl pl-6 pr-6 text-md font-semibold bg-primary p-2 text-white hover:bg-primary/90"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
