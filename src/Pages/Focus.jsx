import { useNavigate } from "react-router-dom";
import Timer from "../Component/Timer";
import TypingChallenge from "../Component/TypingChallenge";
import NavBar from "../Component/NavBar";
import { useEffect } from "react";

const Focus = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const handleOnLoad = (e)=> {
      e.preventDefault();
      e.returnValue="";
      navigate("/type")
    }
    window.addEventListener("beforeunload", handleOnLoad)

    return () =>{
      window.removeEventListener("beforeunload", handleOnLoad)
    }
  },[navigate])

  const handleClick = () => {
    navigate("/success");
  };

  return (
    <>
      <NavBar />
      <div className="bg-gray-400 text-white flex justify-center w-full h-screen">
        <div className="flex items-center">
          <Timer initialTimer={10} onComplete={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Focus;
