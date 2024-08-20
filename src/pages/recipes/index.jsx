import { useLocation } from "react-router-dom"
import useFetch from "../../component/hooks/use-fetch"

export default function RecipeList() {
    const location = useLocation()

    // result from Custom useFetch Hook (component/hooks/use-fetch)
    const {data, loading, error} = useFetch('https://dummyjson.com/recipes')
    if(loading) return <h1>Fetching data . . .</h1>
    return (
        <div>
            <h1>Recipe List Page</h1>
            <ul>
                {
                    data?.recipe?.length > 0 ?
                        data?.recipe?.map(recipeItem => {
                        <div>
                            <img src={recipeItem.image} />
                            <label htmlFor={recipeItem.name}>{recipeItem.name}</label>
                        </div>
                        })
                        : null
                }
            </ul>
        </div>
    )
}