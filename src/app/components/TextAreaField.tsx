import React from 'react';

interface TextareaFieldProps {
  id: string;
  label: string;
  placeholder?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  id,
  label,
  placeholder,
}) => {
  return (
    <div className='mb-6'>
      <label htmlFor={id} className='text-white block mb-2 text-sm font-medium'>
        {label}
      </label>
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        className='bg-[#18191E] border border-[#2b2d36] placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-2'
      />
    </div>
  );
};

export default TextareaField;
