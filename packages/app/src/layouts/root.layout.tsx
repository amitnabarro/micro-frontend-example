import { Outlet } from 'react-router'
import { CartList } from '@repo/cart'
import ErrorBoundary from '~/components/app/ErrorBoundary'
import Nav from '~/components/nav'

const RootLayout = () => {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col font-sans">
        <Nav />
        <div className="flex flex-1 flex-row">
          <main className="flex-1 overflow-hidden">
            <div className="h-full overflow-auto">
              <Outlet />
            </div>
          </main>
          <aside className="w-md border-l border-gray-600 p-4">
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
