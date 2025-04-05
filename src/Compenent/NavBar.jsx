import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="p-4 bg-gray-700 ">
        <h1 className=" text-3xl justify-center text-center font-semibold text-white">
            FocusZen
        </h1>
        <div className="text-white flex gap-2 font-medium justify-end">
        <NavLink 
        to="/">
            Home
        </NavLink>
        <NavLink to="/focus">
            FocusMode
        </NavLink>
        <NavLink to="/success">
            Success
        </NavLink>
        </div>
    </nav>
)
}

export default NavBar
