import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../components/common/Card';

const ProductGrid = ({ products, onAddToWishlist }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card 
          key={product.id} 
          product={product} 
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      hoverImage: PropTypes.string,
      isNew: PropTypes.bool,
      outOfStock: PropTypes.bool,
    })
  ).isRequired,
  onAddToWishlist: PropTypes.func.isRequired,
};

export default ProductGrid;