type StarIconProps = {
  className?: string
  filled?: boolean
}

const StarIcon = ({ className, filled = false }: StarIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? 'currentColor' : 'none'}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width={16}
    height={16}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .462.33l5.467.742a.562.562 0 0 1 .311.995l-3.976 2.888a.563.563 0 0 0-.203.635l1.515 5.678a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.515-5.678a.563.563 0 0 0-.203-.635l-3.976-2.888a.562.562 0 0 1 .311-.995l5.467-.742a.563.563 0 0 0 .462-.33l2.125-5.111Z"
    />
  </svg>
)

export default StarIcon
