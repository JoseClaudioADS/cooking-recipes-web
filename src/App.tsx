import { QueryClientProvider } from "@tanstack/react-query";
import { Recipe } from "./recipe";
import { queryClient } from "./services/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Recipe />
    </QueryClientProvider>
  );
}

export default App;
