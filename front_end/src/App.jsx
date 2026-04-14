import "./App.css";

import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Products from "./pages/Products";
import Catagory from "./pages/Catagory";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <MainLayout />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/catagory" element={<Catagory />} />
        <Route path="/service" element={<Service />} />
        
      </Routes>
    </>
  );
}

export default App;
