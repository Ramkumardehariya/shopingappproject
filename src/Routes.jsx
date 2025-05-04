import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import ProductCatalogPage from './pages/Products';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductCatalogPage />} />
        <Route path="/products" element={<ProductCatalogPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;