'use client';
import React from 'react';

const inputId = useId();
function Input({ label, value, onChange, name, required, helperText }) {
  return (
    <div className='inline-flex flex-col w-80'>
      <label htmlFor={inputId} className='text-sm font-semibold '>
        {label}
        {required && <span className='text-red-500'>*</span>}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className='px-4 py-2 text-black rounded-md outline-none focus:ring-4 ring-white ring-offset-2 ring-offset-grey-500 transition-all'
      />
      {helperText && (
        <span className='text-sm text-white/80'>{helperText}</span>
      )}
    </div>
  );
}

export default Input;
