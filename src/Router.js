import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import SignIn from "./ProductsApp/User/SignIn";
import SignUp from "./ProductsApp/User/SignUp";
import { ToastContainer, toast } from 'react-toastify';
import ProductList from "./ProductsApp/Products/ProductList";
import ProductDetails from "./ProductsApp/Products/ProductDetails";

const Router = () => {
  return (
    <div className="">
      <div>
        <ToastContainer/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
