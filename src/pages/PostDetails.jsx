import { useParams } from "react-router-dom";
import blogs from "../data/Blogs";


 function PostDetails() {
  const { id } = useParams();
  const post = blogs.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2 className="text-red-500 text-xl">Post not found.</h2>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-800">{post.content}</p>
    </div>
  );
}


export default PostDetails;