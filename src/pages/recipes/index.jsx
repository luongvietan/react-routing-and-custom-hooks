import { useLocation } from "react-router-dom"

export default function RecipeList() {
    const location = useLocation()
    return (
        <div>
            <h1>Recipe List Page</h1>
        </div>
    )
}