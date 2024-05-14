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
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";

export function RecipeFilter() {
  const [sortBy, setSortBy] = useState<string>("");

  const handleSortBy = (value: string) => {
    setSortBy(value);
  };

  return (
    <div className="flex justify-between space-x-32">
      <div className="flex items-center space-x-2 w-full bg-secondary rounded-3xl">
        <MagnifyingGlass className="ml-4" size={24} />
        <Input
          id="search"
          className="focus:border-muted focus:outline-none bg-secondary border-transparent rounded-3xl border-0 focus-visible:ring-0"
          placeholder="Search for recipes..."
        />
      </div>

      <Select onValueChange={handleSortBy}>
        <SelectTrigger className="w-[230px] rounded-3xl bg-primary text-white">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort by</SelectLabel>
            <SelectItem value="most-loved">Most Loved</SelectItem>
            <SelectItem value="most-recent">Most Recent</SelectItem>
            <SelectItem value="least-recent">Least Recent</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
