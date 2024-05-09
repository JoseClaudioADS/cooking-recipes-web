import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { api } from "./services/api";

export function Recipe() {
  const getRecipes = async () => {
    const response = await api.get("/recipes");
    return response.data;
  };

  // Queries
  const query = useQuery({ queryKey: ["recipes"], queryFn: getRecipes });

  useEffect(() => {
    console.log("hello");
  });

  return (
    <div>{query.data && <pre>{JSON.stringify(query.data, null, 2)}</pre>}</div>
  );
}
