import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, fetchProductList } from "./api";
import { useState } from "react";

export default function ReactQuery() {
  const [productTitle, setProductTitle] = useState("");
  const getQueryClient = useQueryClient();
  const { data: productList, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchProductList(),
  });
  const { mutateAsync: handleAddProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productList"]);
    },
  });
  async function handleAddProduct() {
    await handleAddProductMutation(productTitle);
    setProductTitle("");
  }
  if (isLoading) return <h2>Loading products . . .</h2>;
  return (
    <div>
      <h2>React Query Demo</h2>
      <div>
        <input
          type="text"
          name="product"
          value={productTitle}
          onChange={(event) => setProductTitle(event.target.value)}
          placeholder="Enter new product"
        />
        <button
          onClick={handleAddProduct}
          disabled={productTitle.trim() === ""}
          type="button"
        >
          Add new product
        </button>
      </div>
      <ul>
        {productList?.length > 0 ? (
          productList.map((product, index) => (
            <li key={index}>{product.title}</li>
          ))
        ) : (
          <h3>No product found</h3>
        )}
      </ul>
    </div>
  );
}
