import { useRef, useState } from "react";

const TypingChallenge = ({ onSuccess }) => {
  const randomWord = "Hello world this is my project";

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === randomWord) {
      setError("");
      onSuccess();
    } else {
      setError("Incorrect input");
    }
  };

  const handleRandomWordClick = () => {
    inputRef.current.focus()
  }

  return (
    <div className="bg-green-200 flex flex-col justify-center items-center gap-4 h-screen p-10">
      <p className="text-center text-gray-600 text-lg">Type this to Exit Focus Mode</p>
      <div className="flex flex-col items-center mt-5 w-full max-w-lg">

        <div onClick={handleRandomWordClick} className="bg-gray-400/60 shadow-lg mb-5 text-center rounded-md w-full text-black p-4">
          {randomWord}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type here to Exit Focus Mode"
            className="w-full p-2 border rounded-md mt-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {error && (
            <p className="text-red-500 mt-5 text-center">{error}</p>
          )}         
        </form>
      </div>
    </div>
  );
};

export default TypingChallenge;
