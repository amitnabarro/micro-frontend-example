import { Outlet } from 'react-router'
import { CartList } from '@repo/cart'
import ErrorBoundary from '~/components/app/ErrorBoundary'

const RootLayout = () => {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col">
        <nav className="flex h-16 shrink-0 items-center justify-between bg-blue-900 px-4">
          <span className="text-xl text-white">Super Terrific Store</span>
        </nav>
        <div className="flex flex-1 flex-row">
          <main className="flex-1">
            <div className="h-full">
              <Outlet />
            </div>
          </main>
          <aside className="w-[28rem] border-l border-gray-600 p-4">
            <h3 className="mb-4 text-lg font-semibold">My Cart</h3>
            <CartList />
          </aside>
        </div>
        <footer className="mt-auto flex h-16 shrink-0 items-center justify-between border-t border-gray-200 bg-gray-50 px-4">
          <span>© 2026 Super Terrific Store. All rights reserved.</span>
        </footer>
      </div>
    </ErrorBoundary>
  )
}

export default RootLayout
