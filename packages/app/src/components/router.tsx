import { BrowserRouter, Route, Routes, Navigate } from 'react-router'
import CatalogModule from '@repo/catalog'
import { RootLayout } from '../layouts'
import { ThankYouPage, UncaughtErrorPage } from '../pages'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/catalog" replace />} />
        <Route path="catalog/*" element={<CatalogModule />} />
      </Route>
      <Route path="thank-you" element={<ThankYouPage />} />
      <Route path="*" element={<UncaughtErrorPage />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
