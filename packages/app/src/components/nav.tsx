import { UserIcon } from '@repo/shared'

const Nav = () => (
  <nav className="flex h-16 shrink-0 items-center justify-between bg-blue-900 px-4">
    <div className="flex items-center gap-4">
      <span className="text-xl text-white">Super Terrific Store</span>
      <div id="search_bar" />
    </div>
    <button
      type="button"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white hover:bg-white/10"
    >
      <UserIcon />
    </button>
  </nav>
)

export default Nav
