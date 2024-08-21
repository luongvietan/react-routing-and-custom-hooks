import { useQuery } from "@tanstack/react-query";
import { fetchProductList } from "./api";

export default function ReactQuery() {
  const query = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchProductList(),
  });
  console.log(query);

  return (
    <div>
      <h2>React Query Demo</h2>
    </div>
  );
}
