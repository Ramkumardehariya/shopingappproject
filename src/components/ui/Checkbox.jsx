import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  checked,
  onChange,
  label,
  name,
  id,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id || name}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`h-5 w-5 text-black focus:ring-black border-gray-300 rounded ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        {...props}
      />
      {label && (
        <label
          htmlFor={id || name}
          className={`ml-2 block text-sm ${
            disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 cursor-pointer'
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.node,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Checkbox;