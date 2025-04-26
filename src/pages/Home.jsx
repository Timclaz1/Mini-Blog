import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg text-gray-700 mb-8">This is a simple blog application.</p>
      <a href="/posts" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        View Posts
      </a>
    </div>
  );
}

export default Home;