import { useMemo, useState } from "react";
import useFetch from "../../../component/hooks/use-fetch";

export default function UseMemoHook() {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [flag, setFlag] = useState(false);
  //filterProduct by price
  function filterProduct(getProduct) {
    return getProduct?.length > 0
      ? getProduct.filter((singleProduct) => singleProduct.price > 10)
      : [];
  }
  //useMemo
  const memorizeVersion = useMemo(
    () => filterProduct(data?.products),
    [data?.products]
  );
  if (loading) return <h2>Fetching data . . .</h2>;

  return (
    <div>
      <h1 style={{ color: flag ? "red" : "black" }}>useMemo</h1>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
      <ul>
        {memorizeVersion.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
