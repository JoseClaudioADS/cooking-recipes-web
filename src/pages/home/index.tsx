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
import { useCallback, useState } from "react";
import { RecipeCard } from "./components/recipe-card";
import { RecipeFilter } from "./components/recipe-filter";

export function Home() {
  const [page, setPage] = useState(1);

  const query = useQuery({
    queryKey: ["recipes"],
    queryFn: searchRecipes,
  });

  const handlePreviousPage = useCallback(() => {
    setPage(Math.max(page - 1, 1));
    console.log(`Previous page`);
  }, [page]);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
    console.log(`New page: ${newPage}`);
  }, []);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
    console.log(`Next page`);
  }, [page]);

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
      <p>{page}</p>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePreviousPage} />
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
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
