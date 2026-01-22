import { Routes, Route } from 'react-router'
import { CatalogPage } from './pages'

const Module = () => {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
    </Routes>
  )
}

export default Module
