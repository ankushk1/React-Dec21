import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import SignIn from "./ProductsApp/User/SignIn";
import SignUp from "./ProductsApp/User/SignUp";
import { ToastContainer, toast } from "react-toastify";
import ProductList from "./ProductsApp/Products/ProductList";
import ProductDetails from "./ProductsApp/Products/ProductDetails";
import CreateProduct from "./ProductsApp/Products/CreateProduct";
import CustomRoute from "./CustomRoute";

const Router = () => {
  return (
    <div className="">
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/products"
            element={
              <CustomRoute>
                <ProductList />
              </CustomRoute>
            }
          />
          <Route
            path="/product-details"
            element={
              <CustomRoute>
                <ProductDetails />
              </CustomRoute>
            }
          />
          <Route
            path="/create-product"
            element={
              <CustomRoute>
                <CreateProduct />
              </CustomRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
