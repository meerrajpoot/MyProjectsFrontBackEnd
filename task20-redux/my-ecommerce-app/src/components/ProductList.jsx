import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'

const ProductList = () => {
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-5">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map(product => (
          <div key={product.id} className="border p-5">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="mb-2">${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500 underline mb-2 block">View Details</Link>
            <button 
              onClick={() => handleAddToCart(product)} 
              className="bg-blue-500 text-white py-2 px-4">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
