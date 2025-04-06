import { Link } from "react-router-dom"
import NavBar from "../Compenent/NavBar"

const Home = () => {
  return (
    <>
    <NavBar/>
    <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to FocusZen</h1>
        <Link to="/focusMode" className="bg-blue-600 px-6 py-3 hover:scale-125 transform ease-in-out transition duration-200 text-white font-medium hover:bg-blue-500 rounded-md">
            Start Session
        </Link>
    </div>
    </>
  )
}

export default Home
