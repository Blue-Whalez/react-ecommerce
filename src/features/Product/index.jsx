import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <div>
      Product Feature
      <Routes>
        <Route index element={<ListPage />} />
        <Route path=":id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default ProductFeature;
