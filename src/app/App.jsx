import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Molecules from "./screens/Molecules";
import Salads from "./screens/Salads";
// import Home from "./screens/Home";
// import Basket from "./screens/Basket";
import Navigation from "./components/Navigation";
import ScreenDefHeader from "./components/ScreenDefHeader";

const config = {
  title: "Salads",
  description: `
  selection of ready-made salad from the list of available ones`,
};

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navigation /> */}
        {/* <ScreenDefHeader
          title={config.title}
          description={config.description}
        /> */}
        <main className="app-container">
          <Routes>
            {/* <Route index path="/" element={<Home />} /> */}
            <Route index path="/" element={<Salads />} />
            <Route path="/molecules" element={<Molecules />} />
            {/* <Route path="/basket" element={<Basket />} /> */}
            <Route path="*" element={<Salads />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
