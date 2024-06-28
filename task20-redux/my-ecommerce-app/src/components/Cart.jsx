import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-5">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cart.map(item => (
            <div key={item.id} className="border p-5">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="mb-2">${item.price}</p>
              <button 
                onClick={() => handleRemoveFromCart(item)} 
                className="bg-red-500 text-white py-2 px-4">
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart
