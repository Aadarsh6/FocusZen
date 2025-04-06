import { useEffect, useState } from "react";

const Timer = ({ initialTimer, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(initialTimer);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prevValue) => prevValue - 1);
      }, 1000);
    }
    if (timeLeft === 0) {
      setIsRunning(false);
      onComplete();
    }

    return () => clearTimeout(timer);
  }, [isRunning, timeLeft, onComplete]);

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(Math.floor(seconds % 60)).padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-green-200">
      <div className="bg-green-50 p-12 rounded-3xl shadow-xl w-96">
        {/* Timer Display */}
        <h1 className="text-6xl font-extrabold text-green-600 text-center mb-10">
          {formatTime(timeLeft)}
        </h1>

        {/* Button Controls */}
        <div className="flex justify-center mb-8 gap-6">
          <button
            onClick={() => setIsRunning(true)}
            className="bg-green-700 hover:bg-green-800 text-white py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-500"
          >
            Start
          </button>
          <button
            onClick={() => setIsRunning(false)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-500"
          >
            Pause
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setTimeLeft(initialTimer);
            }}
            className="bg-red-500 hover:bg-red-600 text-white py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-500"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
