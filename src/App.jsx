import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Navbar from "./layouts/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import DetailProducts from "./pages/DetailProducts/DetailProducts";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path=":category" element={<Products />} />
          </Route>

          <Route path="/detail/:id" element={<DetailProducts />} />
        </Routes>

        {/* Aca iría un footer */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
