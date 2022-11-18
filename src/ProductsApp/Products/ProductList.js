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
  const [search, setSearch] = useState("");
  const [originalProducts, setOriginalProducts] = useState([]);
  const [sort, setSort] = useState(true);

  const fetchProducts = async () => {
    const apiResponse = await getProducts();
    if (apiResponse.status == 200) {
      // success(apiResponse.data.message);
      setProducts(apiResponse.data.productsData);
      setOriginalProducts(apiResponse.data.productsData);
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

  const onSignOut = () => {
    localStorage.clear();
    navigate("/signin");
  };

  const sortData = (a, b) => {
    if(Number(a.price) < Number(b.price)) {
      return -1;
    } 
    if(Number(a.price) > Number(b.price)){
      return 1
    } 
    return 0;
  }
  
  const onSortData = () => {
    const sortedData = products.sort(sortData)
    if(sort){
      setProducts(sortedData)
    } else {
      setProducts(sortedData.reverse())
    }
    setSort(!sort)
  };

  useEffect(() => {
    const filteredArr = originalProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.price.includes(search) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    });
    setProducts(filteredArr);
  }, [search]);

  const userRole = localStorage.getItem("role");
  return (
    <div className="container">
      <div className="row mt-3 justify-content-start">
        <div className="col-8">
          <h3>ProductList</h3>
        </div>
        <div className="col-4 d-flex">
          {userRole === "admin" && (
            <div
              className="btn btn-success mx-2"
              onClick={() => navigate("/create-product")}
            >
              Create
            </div>
          )}
          <div className="btn btn-secondary mx-2">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="btn btn-danger mx-2" onClick={() => onSignOut()}>
            Sign Out
          </div>
        </div>
      </div>
      <div className="w-25 d-flex justify-content-center">
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="input-group-text border-0 ms-2" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
          <span>
            <button className="btn btn-light mx-2" onClick={onSortData}>
              Sort <i className="fa-solid fa-sort"></i>
            </button>
          </span>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around mt-4">
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
