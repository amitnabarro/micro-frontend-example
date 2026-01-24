import { useEffect, useState } from 'react'
import { Product } from '../types'

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return {
    products,
  }
}

export default useProducts
