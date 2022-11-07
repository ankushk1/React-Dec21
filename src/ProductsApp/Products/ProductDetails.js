import React from 'react'
import { useLocation } from 'react-router-dom'
import ItemDetails from './ItemDetails'

const ProductDetails = () => {

  const location = useLocation()
  console.log(location.state)

  return (
    <div>ProductDetails
      <div>
        <ItemDetails product={location.state}/>
      </div>
    </div>
  )
}

export default ProductDetails