import { useLocation } from "react-router-dom";
import useFetch from "../../component/hooks/use-fetch";
import useWindowResize from "../../component/hooks/use-window-resize";

//useLocalstorage
//useCounter
//useID
//useSessionStroag
//useoutsideclick

export default function RecipeList() {
  const location = useLocation();
  // result from Custom useFetch Hook (component/hooks/use-fetch)
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  const windowSize = useWindowResize();
  if (loading) return <h1>Fetching data . . .</h1>;
  console.log(`data, loading, error : `, data, loading, error);
  return (
    <div>
      <h1 style={{ color: windowSize.width < 768 ? "red" : "black" }}>
        Recipe List Page
      </h1>
      <h3>Window width : {windowSize.width}</h3>
      <h3>Window height : {windowSize.height}</h3>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes?.map((recipeItem) => (
              <div key={recipeItem.id}>
                <img
                  src={recipeItem.image}
                  style={{ padding: "5px", width: "150px" }}
                />
                <label htmlFor={recipeItem.name}>{recipeItem.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}
