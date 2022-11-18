import axios from "axios";

// const apiUrl = "http://localhost:8000";
const apiUrl = "https://dec21-node.herokuapp.com";

export const signUp = async (user) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${apiUrl}/user/signup`,
      data: user
    });
    // console.log(response);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const signIn = async (user) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${apiUrl}/user/signin`,
      data: user
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${apiUrl}/product/getProducts`
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${apiUrl}/category/getCategories`,
      headers: {
        "access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
        'Accept': "application/json"
      }
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${apiUrl}/product/createProduct`,
      headers: {
        "access-token": localStorage.getItem("token"),
        'accept': "application/json",
        "Content-Type": "application/json",
      },
      data: productData
    });
    return response;
  } catch (err) {
    console.log(err)
    return err.response;
  }
};


export const updateProduct = async (productData, id) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${apiUrl}/product/updateProduct/${id}`,
      headers: {
        "access-token": localStorage.getItem("token"),
        'accept': "application/json",
        "Content-Type": "application/json",
      },
      data: productData
    });
    return response;
  } catch (err) {
    console.log(err)
    return err.response;
  }
};


export const deleteProduct = async (id) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `${apiUrl}/product/deleteProduct/${id}`,
      headers: {
        "access-token": localStorage.getItem("token"),
        'accept': "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    console.log(err)
    return err.response;
  }
};