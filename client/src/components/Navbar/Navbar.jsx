import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#081B33] shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-red-500">
            Human Safety
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-red-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/login" className="hover:text-red-400 transition">
              Login
            </Link>
          </li>

          <li>
            <Link to="/register" className="hover:text-red-400 transition">
              Register
            </Link>
          </li>

          <li>
            <a href="#features" className="hover:text-red-400 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-red-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;