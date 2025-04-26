import { useState } from "react";

export default function Admin() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "How to Start with React",
      content: "This is the full content of the React beginner post...",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      content: "This is the full content of the Tailwind CSS post...",
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
    };

    setBlogs([newPost, ...blogs]);
    setTitle("");
    setContent("");
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Add Post Form */}
      <form onSubmit={handleAddPost} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Post
        </button>
      </form>

      {/* Show All Posts */}
      <div className="space-y-4">
        {blogs.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p>{post.content}</p>
            <button
              onClick={() => handleDelete(post.id)}
              className="mt-2 text-sm text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
