import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function Home() {
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
