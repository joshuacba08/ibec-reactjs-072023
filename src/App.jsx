import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './layouts/Navbar/Navbar'
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";




function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes> 
        <Route path="/" element={ <Home /> }  />
        <Route path="/products" element={ <Products /> }  />
      </Routes>
      
      {/* Aca iría un footer */}
    </BrowserRouter>
  )
}

export default App
