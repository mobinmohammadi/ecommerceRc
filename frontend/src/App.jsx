import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home';
import Shops from "./pages/Shops";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
