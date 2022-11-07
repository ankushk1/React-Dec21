import axios from "axios";

const apiUrl = "http://localhost:8000";

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
      url: `${apiUrl}/product/getProducts`,
    });
    return response;
  } catch (err) {
    return err.response;
  }
};
