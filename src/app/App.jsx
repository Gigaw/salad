import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Molecules from "./screens/Molecules";
import Salads from "./screens/Salads";
import Home from "./screens/Home";
import Basket from "./screens/Basket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="/molecules" element={<Molecules />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
