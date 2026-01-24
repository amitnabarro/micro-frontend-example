import { useEffect, useState } from 'react'
import { DeleteIcon, useProducts } from '@repo/shared'

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

    return parsed
      .filter((item): item is string | number => typeof item === 'string' || typeof item === 'number')
      .map(item => String(item))
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

export const CartList = () => {
  const [items, setItems] = useState<string[]>(() => Array.from(new Set(readCartFromStorage())))
  const { products } = useProducts()

  const total = items.reduce((sum, productId) => {
    const product = products.find(p => String(p.id) === productId)
    return sum + (product?.price ?? 0)
  }, 0)

  const removeFromCart = (productId: string) => {
    const nextItems = items.filter(item => item !== productId)
    writeCartToStorage(nextItems)
    setItems(nextItems)
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      setItems(Array.from(new Set(readCartFromStorage())))
    }, 1000)

    return () => {
      window.clearInterval(id)
    }
  }, [])

  if (items.length === 0) {
    return <div className="text-sm text-gray-600">Cart is empty</div>
  }

  return (
    <div className="flex flex-col gap-4">
      <ul className="space-y-2">
        {items.map(productId => (
          <li
            key={productId}
            className="flex items-center justify-between gap-2 rounded border border-gray-200 bg-white px-2 py-1 text-sm"
          >
            {(() => {
              const product = products.find(p => String(p.id) === productId)
              const priceLabel = product ? `$${product.price.toFixed(2)}` : '--'
              return (
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded bg-gray-50 ring-1 ring-gray-200">
                    {product?.image ? (
                      <img src={product.image} alt={product.title} className="h-full w-full object-contain p-1" />
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>
                  <span className="min-w-0 flex-1 truncate">{product?.title ?? productId}</span>
                  <span className="shrink-0 text-sm font-semibold text-gray-900 tabular-nums">{priceLabel}</span>
                </div>
              )
            })()}
            <button
              type="button"
              onClick={() => removeFromCart(productId)}
              className="shrink-0 rounded border border-gray-300 p-2 text-gray-700 hover:bg-gray-50"
            >
              <DeleteIcon className="block" />
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => console.log('pay', items)}
        className="h-12 w-full rounded-md bg-green-600 text-base font-semibold text-white hover:bg-green-700 active:bg-green-800"
      >
        Pay ${total.toFixed(2)}
      </button>
    </div>
  )
}

export default CartList
