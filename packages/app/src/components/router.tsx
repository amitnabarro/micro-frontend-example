import { BrowserRouter, Route, Routes } from 'react-router'
import CatalogModule from '@repo/catalog'
import { RootLayout } from '../layouts'
import { UncaughtErrorPage } from '../pages'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="catalog/*" element={<CatalogModule />} />
      </Route>
      <Route path="*" element={<UncaughtErrorPage />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
