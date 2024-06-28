import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'

const ProductDetail = () => {
  const { productId } = useParams()
  const product = useSelector(state => state.products.products.find(p => p.id === parseInt(productId)))
  const dispatch = useDispatch()

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-5">{product.name}</h2>
      <p className="text-xl mb-5">${product.price}</p>
      <p className="mb-5">{product.description}</p>
      <button 
        onClick={handleAddToCart} 
        className="bg-blue-500 text-white py-2 px-4">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetail
