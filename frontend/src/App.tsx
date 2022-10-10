import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import CarList from "./components/carList"
import Sell from './pages/Sell'
import Menu from "./components/menu"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

