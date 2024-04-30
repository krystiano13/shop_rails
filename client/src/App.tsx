import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./views/Home"
import { Navbar } from "./components/Navbar";

function App() {

  return (
    <main className="w-[100vw] min-h-[100vh] bg-gray-100 dark:bg-gray-950">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App
