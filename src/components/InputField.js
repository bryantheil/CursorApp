import React from 'react';
import '../index.css';

const InputField = ({
  type = 'text',
  label,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  name,
  className = ''
}) => {
  const baseStyles = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-200';
  const errorStyles = error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200';

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`${baseStyles} ${errorStyles} ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default InputField; 