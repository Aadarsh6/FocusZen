import { useEffect, useState } from "react";


const Timer = ({initialTimer, onComplete}) => {
  const [timeLeft, setTimeLeft] = useState(initialTimer);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
      let timer;
      console.log("timeleft",timeLeft);
      

      if (isRunning && timeLeft > 0) {
        timer = setTimeout(() => {
          setTimeLeft((prevValue) => prevValue - 1);
        }, 1000);
      }
      if (timeLeft === 0) {
        setIsRunning(false);
        console.log("time pura hua");
        onComplete();
      }

      return () => clearTimeout(timer);
    },
    [isRunning, timeLeft, onComplete]
  );

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2,'0');
    const sec = String(Math.floor(seconds % 60)).padStart(2,'0');
    return `${min}:${sec}`;
  };


  return <div>
    <h1 className="text-center">
        {formatTime(timeLeft)}
    {console.log("initial timer", initialTimer)}
    </h1>
    <div className="flex gap-2 mt-5">
        <button className="bg-blue-600 p-2 rounded-md" onClick={()=> setIsRunning(true)}>Start</button>
        <button className="bg-blue-600 p-2 rounded-md" onClick={()=> setIsRunning(false)}>Pasue</button>
        <button className="bg-blue-600 p-2 rounded-md" onClick={()=> {
            setIsRunning(false)
            setTimeLeft(initialTimer)
       }}>Reset
        </button>
    </div>
  </div>;

};

export default Timer;
