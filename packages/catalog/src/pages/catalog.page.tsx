import { ProductCard } from '../components'
import { useProducts } from '@repo/shared'

const CART_STORAGE_KEY = 'cart'

const readCartFromStorage = (): string[] => {
  if (typeof window === 'undefined') {
    return []
  }

  const raw = window.localStorage.getItem(CART_STORAGE_KEY)
  if (!raw) {
    return []
  }

  try {
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      return []
    }

    const normalized = parsed
      .filter((item): item is string | number => typeof item === 'string' || typeof item === 'number')
      .map(item => String(item))

    return normalized
  } catch {
    return []
  }
}

const writeCartToStorage = (cart: string[]) => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
}

const addProductIdToCart = (productId: string | number): string[] => {
  const cart = readCartFromStorage()
  const nextCart = Array.from(new Set([...cart, String(productId)]))
  writeCartToStorage(nextCart)
  return nextCart
}

const CatalogPage = () => {
  const { products } = useProducts()

  const onAddToCart = (product: { id: string | number }) => {
    const nextCart = addProductIdToCart(product.id)
  }

  if (products.length === 0) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="h-full overflow-auto p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  )
}

export default CatalogPage
