import { Link } from "react-router-dom";

 function Navbar() {
  return (
    <nav className="bg-blue-500 text-white px-6 py-3 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}


export default Navbar;