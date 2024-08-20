import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>This Page Doesn't Exist</h1>
            <Link to={'/home'}>Go to Home page</Link>
        </div>
    )
}