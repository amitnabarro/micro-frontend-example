import type { Product } from '~/types/product'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => (
  <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
    <div className="flex h-48 items-center justify-center overflow-hidden p-4">
      <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
    </div>
    <div className="flex flex-1 flex-col p-4">
      <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
      <p className="mb-4 line-clamp-2 flex-1 text-sm text-gray-600">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        <button
          onClick={() => onAddToCart(product)}
          className="rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
)
