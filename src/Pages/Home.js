import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  const onNavigate = () => {
    // navigate(-2)
    navigate("/signup/10", {
      state: {
        message: "Data from home.js",
        data: {
          name: "ABC",
          id:2
        }
      }
    })
  }

  return (
    <div>Home
      <div>
      <button className='btn btn-secondary' onClick={()=> onNavigate()}>Navigate</button>
      </div>
    </div>
  )
}

export default Home