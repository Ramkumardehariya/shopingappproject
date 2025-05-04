import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({
  product,
  onAddToWishlist,
  className = '',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const handleWishlistClick = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    if (onAddToWishlist) {
      onAddToWishlist(product.id);
    }
  };
  
  return (
    <div 
      className={`relative flex flex-col ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <Link to={`/products/${product.id}`} className="block relative">
        {/* Product Image */}
        <div className="relative h-[300px] w-full overflow-hidden">
          {product.isNew && (
            <div className="absolute top-2 left-5 z-10 bg-white px-3 py-1">
              <span className="text-sm font-bold uppercase">new product</span>
            </div>
          )}
          
          {product.outOfStock && (
            <div className="absolute inset-0 bg-white bg-opacity-50 z-10 flex items-center justify-center">
              <div className="bg-white w-full py-5">
                <p className="text-xl font-bold uppercase text-center">out of stock</p>
              </div>
            </div>
          )}
          
          <img 
            src={isHovered && product.hoverImage ? product.hoverImage : product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div className="pt-4 pb-2 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold uppercase">{product.name}</h3>
            <p className="text-sm text-gray-500 underline mt-1">
              Sign in or Create an account to see pricing
            </p>
          </div>
          
          <button 
            onClick={handleWishlistClick}
            className="p-2"
          >
            <img 
              src={isWishlisted ? "/images/img_heart_24x24.svg" : "/images/img_heart.svg"} 
              alt="Add to wishlist" className="w-6 h-6"
            />
          </button>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    hoverImage: PropTypes.string,
    isNew: PropTypes.bool,
    outOfStock: PropTypes.bool,
  }).isRequired,
  onAddToWishlist: PropTypes.func,
  className: PropTypes.string,
};

export default Card;