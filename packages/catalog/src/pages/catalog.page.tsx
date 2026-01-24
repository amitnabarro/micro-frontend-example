import { ProductCard } from '../components'
import useProducts from '../hooks/useProducts'

const CatalogPage = () => {
  const { products } = useProducts()

  const onAddToCart = (product: { id: string }) => {
    console.log('add-to-cart', product.id)
  }

  if (products.length === 0) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  )
}

export default CatalogPage
