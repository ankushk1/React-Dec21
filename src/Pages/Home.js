import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  const onNavigate = () => {
    navigate(-2)
    navigate("/")
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