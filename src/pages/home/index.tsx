import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { searchRecipes } from "@/services/api/api";
import {
  SEARCH_RECIPES_DEFAULT_PAGE,
  SEARCH_RECIPES_DEFAULT_PAGE_SIZE,
  SearchRecipesParams,
} from "@/services/api/types/search-recipes.api.type";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RecipeCard } from "./components/recipe-card";
import { RecipeFilter } from "./components/recipe-filter";

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams({
    [SearchRecipesParams.PAGE]: SEARCH_RECIPES_DEFAULT_PAGE,
    [SearchRecipesParams.SIZE]: SEARCH_RECIPES_DEFAULT_PAGE_SIZE,
  });
  const [nextPageEnabled, setNextPageEnabled] = useState(true);
  const [previousPageEnabled, setPreviousPageEnabled] = useState(false);

  const query = useQuery({
    queryKey: ["recipes"],
    queryFn: () =>
      searchRecipes(searchParams as unknown as Record<string, string>),
  });

  const refetchData = useCallback(async () => {
    await query.refetch();
  }, [query]);

  useEffect(() => {
    refetchData();
    setNextPageEnabled(
      () =>
        query.data?.items.length ===
        Number(searchParams.get(SearchRecipesParams.SIZE))
    );
    setPreviousPageEnabled(
      () => Number(searchParams.get(SearchRecipesParams.PAGE)) > 1
    );
  }, [searchParams, refetchData, query.data?.items.length]);

  const handlePreviousPage = () => {
    const newPage = Math.max(
      Number(searchParams.get(SearchRecipesParams.PAGE)) - 1,
      1
    );

    pageChange(newPage);
  };

  const handleNextPage = () => {
    const newPage = Number(searchParams.get(SearchRecipesParams.PAGE)) + 1;
    pageChange(newPage);
  };

  const pageChange = (newPage: number) => {
    setSearchParams((params) => {
      params.set(SearchRecipesParams.PAGE, newPage.toString());
      return params;
    });
  };

  return (
    <div className="flex w-full flex-col space-y-10">
      <RecipeFilter />
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-x-16 sm:w-full lg:w-9/12 xl:w-7/12 place-self-center">
        {query.data?.items.map((recipe) => (
          <div key={recipe.id} className="mt-10">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>

      <Pagination className="flex flex-col items-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePreviousPage}
              className={
                previousPageEnabled
                  ? "cursor-pointer"
                  : "pointer-events-none opacity-50 cursor-not-allowed"
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={handleNextPage}
              className={
                nextPageEnabled
                  ? "cursor-pointer"
                  : "pointer-events-none opacity-50 cursor-not-allowed"
              }
            />
          </PaginationItem>
        </PaginationContent>
        <p className="text-sm italic">
          Showing {query.data?.items.length} results from {query.data?.total}
        </p>
      </Pagination>
    </div>
  );
}
