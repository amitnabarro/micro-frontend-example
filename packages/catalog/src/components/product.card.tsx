import { AddIcon, Product, StarIcon } from '@repo/shared'

type ProductCardProps = Product & {
  onAddToCart?: (product: Product) => void
}

const ProductCard = ({ id, title, price, description, image, category, rating, onAddToCart }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} filled className="text-yellow-400" />)
    }

    if (hasHalfStar && fullStars < 5) {
      stars.push(<StarIcon key="half" filled className="text-yellow-400" />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarIcon key={`empty-${i}`} className="text-gray-300" />)
    }

    return stars
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="relative bg-gray-50">
        <img src={image} alt={title} className="h-48 w-full object-contain p-4" loading="lazy" />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <header className="flex flex-col gap-1">
          <h3 className="line-clamp-2 text-base font-semibold text-gray-900">{title}</h3>
          <div className="text-xs text-gray-500">SKU: {id}</div>
        </header>

        <p className="line-clamp-3 text-sm text-gray-700">{description}</p>

        <div className="mt-auto flex flex-col gap-3">
          <button
            type="button"
            onClick={() => onAddToCart?.({ id, title, price, description, image, category, rating })}
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700 active:bg-blue-800"
          >
            <span className="inline-flex items-center gap-2">
              <AddIcon className="block" />
              <span>Add to cart</span>
            </span>
          </button>

          <div className="flex items-end justify-between gap-3">
            <div className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                <div className="flex">{renderStars(rating.rate)}</div>
                <span className="ml-1 text-xs font-medium text-gray-900">{rating.rate}</span>
              </div>
              <div className="text-xs text-gray-600">({rating.count} reviews)</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
