import React, { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
  useIcon?: boolean;
  action?: boolean;
  signIn?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
  useIcon,
  signIn,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        font-semibold
        hover:opacity-80
        transition
    
      
        ${fullWidth ? 'w-full' : 'w-fit'}
        ${secondary ? 'bg-white' : 'dark:bg-bgBlue bg-bgBlue1'}
        ${secondary ? 'text-black' : 'text-white'}
        ${secondary ? 'border-black' : 'bg-bgBlue'}
        ${large ? 'text-md' : 'text-base'}
        ${large ? 'px-5' : 'px-4'}
        ${large ? 'py-3' : 'py-2'}
        ${outline ? 'bg-transparent' : ''}
        ${outline ? 'border-white' : ''}
        ${outline ? 'text-white' : ''}
        ${useIcon ? 'flex items-center justify-center gap-2' : ''}
        ${signIn ? ' rounded-full border-2' : 'rounded-md'}
    
      `}
    >
      {useIcon ? <FcGoogle size={20} /> : ''}
      {label}
    </button>
  );
};

export default Button;
