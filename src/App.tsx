import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/components/layout/Layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
