import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/components/layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<div>news </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
