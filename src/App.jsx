import { useEffect } from "react";
import { useState } from "react";
import classes from "./styles.module.css"
import { Skeleton } from "@mui/material";
import './App.css'
import RecipeList from "./pages/recipes";
import CommentList from "./pages/comments";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import RecipeDetail from "./pages/recipe-detail";

function App() {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <Link to={"/recipe-list"}>Alternative way of navigating to recipe list page</Link>
            </div>
            <button onClick={()=>{navigate("/recipe-list")}} style={{background : 'black', color : 'white', margin : '10px'}}>Recipe List Page</button>
            <button onClick={()=>{navigate("/comment-list")}} style={{ background: 'black', color: 'white', margin : '10px'}}>Comment List Page</button>
            <Routes>
                <Route path="/recipe-list" element = {<RecipeList/>}></Route>
                <Route path="/comment-list" element={<CommentList />}></Route>
                <Route path="/recipe-list/:id" element = {<RecipeDetail/>}/>
            </Routes>
        </div>
    )
}
export default App;
