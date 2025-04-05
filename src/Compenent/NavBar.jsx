import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-white">FocusZen</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/focusMode"
            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300"
          >
            FocusMode
          </NavLink>
          <NavLink
            to="/success"
            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300"
          >
            Success
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
