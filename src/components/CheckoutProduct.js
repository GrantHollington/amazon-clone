import React from 'react'
import { useStateValue } from '../StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // removes the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            
        })
    }

  return (
      // contains image and info section
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt="Product image" />

        <div className="checkoutProduct__info">
            <p className='checkoutProduct__title'>{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {/* creates an array and maps over array, publishing amount of starts based on rating */}
                { Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐️</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct