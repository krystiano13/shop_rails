import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./views/Home"
import { Login } from "./views/Login";
import { Register } from "./views/Register";

import { Navbar } from "./components/Navbar";

function App() {

  return (
    <main className="dark w-[100vw] min-h-[100vh] bg-gray-100 dark:bg-gray-950">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App
