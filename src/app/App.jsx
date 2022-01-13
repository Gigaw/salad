import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Molecules from "./screens/Molecules";
import Salads from "./screens/Salads";
import Modal from "./components/Modal";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="app-container">
          <Routes>
            <Route index path="/" element={<Salads />} />
            <Route path="/molecules" element={<Molecules />} />
            <Route path="*" element={<Salads />} />
          </Routes>
        </main>
        <Modal />
      </div>
    </BrowserRouter>
  );
}

export default App;
