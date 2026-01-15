import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import CV from "./pages/CV";
import Yenuki from "./pages/Yenuki";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/yenuki" element={<Yenuki />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
