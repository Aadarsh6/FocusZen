import { useNavigate } from "react-router-dom"
import Timer from "../Compenent/Timer"

   const Focus = () => {
       const navigate = useNavigate();
        const handleClick = ()=> {
            navigate("/success")
        }
    

  return (
    <div className="bg-gray-400 text-white flex justify-center w-full h-screen">
        <div className="flex items-center">
        <Timer initialTimer = {2} onComplete={handleClick}/>
        </div>
    </div>
  )
}

export default Focus
