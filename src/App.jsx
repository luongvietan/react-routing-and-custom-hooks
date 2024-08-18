import { useEffect } from "react";
import { useState } from "react";
import classes from "./styles.module.css"
import { Skeleton } from "@mui/material";
import './App.css'
import RecipeList from "./pages/recipes";
import CommentList from "./pages/comments";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <h1>DUELURKER</h1>
            <Routes>
                <Route path="/recipe-list" element = {<RecipeList/>}></Route>
                <Route path="/comment-list" element = {<CommentList/>}></Route>
            </Routes>
        </div>
    )
}
export default App;
