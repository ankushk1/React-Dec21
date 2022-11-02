import React from 'react'
import { useLocation, useParams } from "react-router-dom";

const SignUp = (props) => {
  console.log(props)
  const location = useLocation()
  const params = useParams()
  console.log(params);

  console.log('Call')
  return (
    <div>SignUp</div>
  )
}

export default SignUp