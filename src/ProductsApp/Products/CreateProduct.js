import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createProduct,
  getCategories,
  updateProduct
} from "../../utils/ApiUtils";
import { error, success } from "../../utils/notificationUtils";
import { useFormHook } from "../../utils/useFromHook";

const CreateProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const [formVals, setFormVals] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: ""
  });
  const [categories, setCategories] = useState([]);

  const onHandleChange = (event) => {
    setFormVals({ ...formVals, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    (async () => {
      const apiResponse = await getCategories();
      setCategories(apiResponse.data.categories);
    })();
  }, []);

  const isValidFields = () => {
    return Object.values(formVals).some((elem) => elem === "");
  };

  const onProductCreate = async (e) => {
    e.preventDefault();
    const apiResponse = await createProduct(formVals);
    if (apiResponse.status == 200) {
      success(apiResponse.data.message);
      navigate("/products");
    } else {
      error(apiResponse.data.message);
    }
  };

  const onUpdateProduct = async (e) => {
    e.preventDefault();
    const apiResponse = await updateProduct(formVals, location.state._id);
    if (apiResponse.status == 200) {
      success(apiResponse.data.message);
      navigate("/products");
    } else {
      error(apiResponse.data.message);
    }
  };

  useEffect(() => {
    if (location.state) {
      const currState = { ...formVals };
      currState.name = location.state.name;
      currState.description = location.state.description;
      currState.price = location.state.price;
      currState.quantity = location.state.quantity;
      currState.category = location.state.category?._id;
      setFormVals(currState);
    }
  }, [location.state]);

  return (
    <div className="container d-flex flex-column text-center">
      <h3 className="my-3">{location.state ? "Update" : "Create"} Product</h3>
      <div>
        <div className="d-flex align-items-center flex-column">
          <input
            className="form-control w-75 my-2"
            onChange={(event) => onHandleChange(event)}
            placeholder="name"
            value={formVals.name}
            name={"name"}
          />
          <input
            className="form-control w-75 my-2"
            onChange={(event) => onHandleChange(event)}
            placeholder="description"
            name={"description"}
            value={formVals.description}
          />
          <input
            className="form-control w-75 my-2"
            onChange={(event) => onHandleChange(event)}
            placeholder="price"
            name={"price"}
            value={formVals.price}
          />
          <input
            className="form-control w-75 my-2"
            onChange={(event) => onHandleChange(event)}
            placeholder="quantity"
            name={"quantity"}
            value={formVals.quantity}
          />
          <select
            className="form-control w-75"
            name="category"
            value={formVals.category}
            onChange={(event) => onHandleChange(event)}
          >
            <option value="">None</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          <div>
            {location.state ? (
              <button
                className="btn btn-warning mt-2"
                onClick={(e) => onUpdateProduct(e)}
              >
                Update Product
              </button>
            ) : (
              <button
                className="btn btn-success mt-2"
                disabled={isValidFields()}
                onClick={(e) => onProductCreate(e)}
              >
                Create Product
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
