import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
}) => {
  return (
    <div className='mb-6'>
      <label htmlFor={id} className='text-white block mb-2 text-sm font-medium'>
        {label}
      </label>
      <input
        name={id}
        type={type}
        id={id}
        required
        placeholder={placeholder}
        className='bg-[#18191E] border border-[#2b2d36] placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-2'
      />
    </div>
  );
};

export default InputField;
