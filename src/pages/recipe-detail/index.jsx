import { useParams } from "react-router-dom"

export default function RecipeDetail() {
    const params = useParams()
    console.log(params);
    const {id} = params
    return (
        <div>
            <h2>Detail of Recipe {id}</h2>
        </div>
    )
}