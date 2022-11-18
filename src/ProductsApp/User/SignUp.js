import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signUp } from "../../utils/ApiUtils";
import { error, success } from "../../utils/notificationUtils";
import { useFormHook } from "../../utils/useFromHook";
const SignUp = () => {
  const { values, onHandleChange } = useFormHook();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const apiResponse = await signUp(values);
    // console.log(apiResponse);
    if (apiResponse.status == 200) {
      success(apiResponse.data.message);
      navigate('/signin')
    } else {
      error(apiResponse.data.message);
    }
  };

  return (
    <div className="container text-center">
      <h3 className="my-3">SignUp</h3>
      <div>
        <form className="d-flex align-items-center flex-column">
          <input
            className="form-control w-75"
            onChange={(event) => onHandleChange(event)}
            placeholder="First Name"
            name={"firstname"}
          ></input>
          <input
            className="form-control w-75 mt-3"
            onChange={(event) => onHandleChange(event)}
            placeholder="Last Name"
            name={"lastname"}
          ></input>
          <input
            className="form-control w-75 mt-3"
            onChange={(event) => onHandleChange(event)}
            placeholder="Email"
            name={"email"}
          ></input>
          <input
            className="form-control w-75 mt-3"
            name={"password"}
            placeholder="Password"
            onChange={(event) => onHandleChange(event)}
            type="password"
          ></input>
        </form>
        <div>
          <button className="btn btn-primary mt-4" onClick={onSubmit}>
            Sign up
          </button>
        </div>
        <div className="mt-3 fs-5">
          If already signed Up? <Link to="/signin">Sign in</Link> here.
        </div>
      </div>
    </div>
  );
};

export default SignUp;
