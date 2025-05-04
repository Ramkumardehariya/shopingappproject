import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({
  label,
  onRemove,
  variant = 'default',
  size = 'medium',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-black text-white',
    secondary: 'bg-gray-200 text-gray-800',
    accent: 'bg-accent text-white',
  };
  
  const sizes = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-3 py-1',
    large: 'text-base px-4 py-2',
  };
  
  return (
    <span
      className={`inline-flex items-center rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {label}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-gray-200 hover:text-gray-500 focus:outline-none"
        >
          <span className="sr-only">Remove</span>
          <svg
            className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round" strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'accent']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default Tag;