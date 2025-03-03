import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Content from "./components/Content";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import productList from "./components/data";


const App = () => {
  const [productId, setProductId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {

    const filteredObject = productList.filter(
      (product) => product.id == productId
    );
    setCartAllProduct([...cartAllProduct, ...filteredObject]);

  }, [productId]);

  return (
    <>
      <BrowserRouter>
        <Navbar cartAllProduct={cartAllProduct} />
        <Routes>
          <Route
            path="/"
            element={<Content setProductId={setProductId} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
