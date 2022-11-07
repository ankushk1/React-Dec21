import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../utils/ApiUtils";
import { error, success } from "../../utils/notificationUtils";
import ItemDetails from "./ItemDetails";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const apiResponse = await getProducts();
    if (apiResponse.status == 200) {
      // success(apiResponse.data.message);
      setProducts(apiResponse.data.productsData);
    } else {
      error(apiResponse.data.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onRedirectView = (product) => {
    navigate("/product-details", {
      state: product
    });
  };

  return (
    <div className="container">
      <div className="row mt-3 justify-content-start">
        <div className="col-8">
          <h3> ProductList</h3>
        </div>
        <div className="col-4 d-flex">
          <div className="btn btn-success mx-2 ">Create</div>
          <div className="btn btn-secondary mx-2"><i className="fa-solid fa-cart-shopping"></i></div>
          <div className="btn btn-danger mx-2">Sign Out</div>
        </div>
      </div>
      <div className="d-flex justify-content-around mt-4">
        {products.length > 0 &&
          products.map((product) => (
            <ItemDetails
              product={product}
              onRedirectView={onRedirectView}
              view={true}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
