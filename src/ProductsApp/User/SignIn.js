import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../utils/ApiUtils';
import { error, success } from '../../utils/notificationUtils';
import { useFormHook } from '../../utils/useFromHook';

const SignIn = () => {
  const { values, onHandleChange } = useFormHook();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const apiResponse = await signIn(values);
    if (apiResponse.status == 200) {
      success(apiResponse.data.message)
      localStorage.setItem('token', apiResponse.data.token)
      localStorage.setItem('userId', apiResponse.data.userId)
      localStorage.setItem('role', apiResponse.data.userRole)
      navigate('/products')
    } else {
      error(apiResponse.data.message)
    }
  };

  return (
    <div className="container text-center">
      <h3 className="my-3">Sign In</h3>
      <div>
        <form className="d-flex align-items-center flex-column">
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
          <button className="btn btn-secondary mt-4" onClick={onSubmit}>
            Sign In
          </button>
        </div>
        <div className="mt-3 fs-5">
          Don't have an account? <Link to="/">Sign up</Link> here.
        </div>
      </div>
    </div>
  )
}

export default SignIn