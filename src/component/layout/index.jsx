import { Outlet, useNavigate } from "react-router-dom";
import Header from "../header";

export default function Layout() {
    const navigate = useNavigate()
    return ( 
        <div>
            <Header />
            <button onClick={() => { navigate("/home") }} style={{ background: 'black', color: 'white', margin: '10px' }}>Back to Home</button>
            <Outlet />
        </div>
    )
}