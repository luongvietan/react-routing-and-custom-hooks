import { useLocation } from "react-router-dom";
import useFetch from "../../component/hooks/use-fetch";

export default function CommentList() {
  const location = useLocation();
  // result from Custom useFetch Hook (component/hooks/use-fetch)
  const { data, loading, error } = useFetch("https://dummyjson.com/comments");
  if (loading) return <h1>Fetching data . . .</h1>;
  if (!data) return <h1>No data available</h1>; // add this line
  return (
    <div>
      <h1>Comment List Page</h1>
      <ul>
        {data?.comments?.length > 0
          ? data?.comments?.map((comment) => (
              <div key={comment.id}>
                <label htmlFor={comment.id}>{comment.body}</label>
                <h3>Like : {comment.likes}</h3>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}
