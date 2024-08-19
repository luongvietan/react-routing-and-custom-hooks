import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>Not Found Page</h1>
            <Link to={'/recipe-list'}>Go to recipe list</Link>
        </div>
    )
}