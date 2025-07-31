import React from 'react';

interface GradientButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className='bg-gradient-primary font-medium py-2 px-5 rounded-lg w-full hover:bg-slate-400'
    >
      {text}
    </button>
  );
};

export default GradientButton;
