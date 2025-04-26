import { Link } from "react-router-dom";
import blogs from "../data/Blogs";

function Posts() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <div className="space-y-4">
        {blogs.map((post) => (
          <div key={post.id} className="p-4 border rounded-md shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.summary}</p>
            <Link
              to={`/posts/${post.id}`}
              className="text-blue-600 hover:underline inline-block mt-2"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Posts;