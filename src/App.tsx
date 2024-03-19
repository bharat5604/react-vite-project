import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<div>news </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
