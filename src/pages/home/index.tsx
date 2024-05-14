import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { searchRecipes } from "@/services/api/api";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { RecipeCard } from "./components/recipe-card";
import { RecipeFilter } from "./components/recipe-filter";

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

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
  }, [searchParams, refetchData]);

  const handlePageChange = (newPage: number) => {
    setSearchParams((params) => {
      params.set("page", newPage.toString());
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
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                handlePageChange(
                  Math.max(Number(searchParams.get("page")) - 1, 1)
                )
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(1)}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                handlePageChange(Number(searchParams.get("page")) + 1)
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
