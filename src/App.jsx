import { useEffect } from "react";
import { useState } from "react";
import classes from "./styles.module.css"
import { Skeleton } from "@mui/material";
import './App.css'
import RecipeList from "./pages/recipes";
import CommentList from "./pages/comments";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={()=>{navigate("/recipe-list")}} style={{background : 'black', color : 'white', margin : '10px'}}>Recipe List Page</button>
            <button onClick={()=>{navigate("/comment-list")}} style={{ background: 'black', color: 'white', margin : '10px'}}>Comment List Page</button>
            <Routes>
                <Route path="/recipe-list" element = {<RecipeList/>}></Route>
                <Route path="/comment-list" element = {<CommentList/>}></Route>
            </Routes>
        </div>
    )
}
export default App;
