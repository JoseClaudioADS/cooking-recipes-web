import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SEARCH_RECIPES_DEFAULT_PAGE_SIZE,
  SearchRecipesParams,
} from "@/services/api/types/search-recipes.api.type";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function RecipeFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState(searchParams.get(SearchRecipesParams.Q) || "");

  const handleSortBy = (value: string) => {
    setSearchParams((params) => {
      params.set(SearchRecipesParams.SORT_BY, value);
      return params;
    });
  };

  const handlePageSize = (value: string) => {
    setSearchParams((params) => {
      params.set(SearchRecipesParams.SIZE, value);
      return params;
    });
  };

  const handleSearchText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setQ(() => e.currentTarget.value);
    if (e.key === "Enter") {
      setSearchParams((params) => {
        params.set(SearchRecipesParams.Q, e.currentTarget.value);
        return params;
      });
    }
  };

  return (
    <div className="flex justify-between space-x-32">
      <div className="flex items-center space-x-2 w-full bg-secondary rounded-3xl">
        <MagnifyingGlass className="ml-4" size={24} />
        <Input
          id="search"
          className="focus:border-muted focus:outline-none bg-secondary border-transparent rounded-3xl border-0 focus-visible:ring-0"
          placeholder="Search for recipes..."
          defaultValue={q}
          onKeyUpCapture={handleSearchText}
        />
      </div>

      <div className="flex space-x-4">
        <Select
          onValueChange={handleSortBy}
          value={searchParams.get(SearchRecipesParams.SORT_BY) || "most-loved"}
        >
          <SelectTrigger className="w-[130px] rounded-3xl bg-primary text-white font-bold">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Ordernar por</SelectLabel>
              <SelectItem value="most-loved">Mais amadas</SelectItem>
              <SelectItem value="most-recent">Mais recentes</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          onValueChange={handlePageSize}
          value={
            searchParams.get(SearchRecipesParams.SIZE) ||
            SEARCH_RECIPES_DEFAULT_PAGE_SIZE
          }
        >
          <SelectTrigger className="w-[90px] rounded-3xl bg-primary text-white font-bold">
            <SelectValue placeholder="Items per page" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Itens por página</SelectLabel>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
