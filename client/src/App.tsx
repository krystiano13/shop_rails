import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./views/Home"
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { Cart } from "./views/Cart";

import { Navbar } from "./components/Navbar";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <main className="dark w-[100vw] min-h-[100vh] bg-gray-100 dark:bg-gray-950">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </main>
    </AuthContextProvider>
  );
}

export default App
