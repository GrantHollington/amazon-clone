import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating}) {
  return (
      // contains image and info section
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt="Product image" />

        <div className="checkoutProduct__info">
        
        </div>
    </div>
  )
}

export default CheckoutProduct