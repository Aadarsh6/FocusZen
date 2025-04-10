import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Focus from "./Pages/Focus";
import Success from "./Pages/Success";
import TypingChallenge from "./Component/TypingChallenge";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/focusMode" element={<Focus />} />
          <Route path="/success" element={<Success />} />
          <Route path="/type" element={<TypingChallenge />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
