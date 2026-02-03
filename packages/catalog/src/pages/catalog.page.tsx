import { ProductCard } from '../components'
import { useProducts } from '@repo/shared'
import { useSearchBarPortal } from '../hooks/useSearchBarPortal'
import { useState, useMemo } from 'react'

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
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products
    }

    const query = searchQuery.toLowerCase()
    return products.filter(
      product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    )
  }, [products, searchQuery])

  const SearchBar = (
    <input
      type="search"
      placeholder="Search products"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      className="h-10 w-72 rounded-md border border-white/20 bg-white/10 px-3 text-sm text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/30 focus:outline-none"
    />
  )

  const { portal } = useSearchBarPortal(SearchBar)

  const onAddToCart = (product: { id: string | number }) => {
    addProductIdToCart(product.id)
  }

  if (products.length === 0) {
    return (
      <>
        {portal}
        <div className="p-6">Loading...</div>
      </>
    )
  }

  return (
    <>
      {portal}
      <div className="h-full overflow-auto p-6">
        {filteredProducts.length === 0 ? (
          <div className="p-6 text-center text-white/70">No products found matching "{searchQuery}"</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default CatalogPage
