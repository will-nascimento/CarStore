import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
       <h1>Welcome to React Router!</h1>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
