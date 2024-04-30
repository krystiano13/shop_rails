import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./views/Home"

function App() {

  return (
    <main className="w-[100vw] min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App
