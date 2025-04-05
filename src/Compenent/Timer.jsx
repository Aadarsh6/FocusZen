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


  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-500 to-purple-600">
    <div className="bg-white p-10 rounded-xl shadow-2xl w-100">
      <h1 className="text-6xl font-semibold text-center text-gray-800 mb-8">
        {formatTime(timeLeft)}
      </h1>

      <div className="flex justify-center mb-6 gap-2">
        <button
          onClick={() => setIsRunning(true)}
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          Pause
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(initialTimer);
          }}
          className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
);
};

export default Timer;