import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Products from "./Component/Products";
import Product from "./Component/Product";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  return (
    <>
    <React.StrictMode>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </React.StrictMode>
    </>
  )
}

export default App;
