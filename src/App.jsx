import "./App.css";
import RecipeList from "./pages/recipes";
import CommentList from "./pages/comments";
import { Route, Routes, useNavigate, Link, useRoutes } from "react-router-dom";
import RecipeDetail from "./pages/recipe-detail";
import NotFound from "./pages/not-found";
import Layout from "./component/layout";
import HookForm from "./pages/hook-form";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        { path: "recipe-list", element: <RecipeList /> },
        { path: "comment-list", element: <CommentList /> },
        { path: "recipe-list/:id", element: <RecipeDetail /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/hook-form",
      element: <HookForm />,
    },
  ]);
  return element;
}
function App() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <div>
        <Link to={"/home/recipe-list"}>
          Alternative way of navigating to recipe list page
        </Link>
      </div>
      <button
        onClick={() => {
          navigate("/home/recipe-list");
        }}
        style={{ background: "black", color: "white", margin: "10px" }}
      >
        Recipe List Page
      </button>
      <button
        onClick={() => {
          navigate("/home/comment-list");
        }}
        style={{ background: "black", color: "white", margin: "10px" }}
      >
        Comment List Page
      </button> */}
      {/* <Routes>
                <Route path="/home" element={<Layout />}>
                    <Route path="recipe-list" element = {<RecipeList />} />
                    <Route path="comment-list" element={<CommentList />} />
                    <Route path="recipe-list/:id" element={<RecipeDetail />} />
                </Route>
                <Route path="*" element = {<NotFound />}/>
            </Routes> */}
      <CustomRoutes />
    </div>
  );
}
export default App;
