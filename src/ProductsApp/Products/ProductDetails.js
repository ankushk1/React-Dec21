import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../utils/ApiUtils";
import { error, success } from "../../utils/notificationUtils";
import ItemDetails from "./ItemDetails";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onUpdateCall = () => {
    navigate("/create-product", {
      state: location.state
    });
  };

  const onDeleteCall = async () => {
    const apiResponse = await deleteProduct(location.state._id)
    if (apiResponse.status == 200) {
      success(apiResponse.data.message)
      navigate('/products')
    } else {
      error(apiResponse.data.message)
    }
  }
  const userRole = localStorage.getItem('role')

  return (
    <div className="container text-center fs-3 mt-3 row">
      <div className="col-1"></div>
      <div
        className="col-1 btn btn-secondary h-25 ms-3"
        onClick={() => navigate("/products")}
      >
        Back
      </div>
      <div className="col">
        <div>ProductDetails</div>
        <div className=" d-flex justify-content-center mt-3">
          <ItemDetails product={location.state} />
        </div>
        {userRole === "admin" && <div className="mt-4">
          <button
            className="btn btn-warning btn-lg me-4"
            onClick={() => onUpdateCall()}
          >
            Update
          </button>
          <button
            className="btn btn-danger btn-lg"
            onClick={() => onDeleteCall()}
          >
            Delete
          </button>
        </div>}
      </div>
    </div>
  );
};

export default ProductDetails;
