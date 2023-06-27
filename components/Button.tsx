import { spawn } from 'child_process';
import React, { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImSpinner8 } from 'react-icons/Im';
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
  isLoading?: boolean;
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
  isLoading,
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
        flex
        justify-center
        items-center
      
      
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
        ${useIcon ? 'flex items-center justify-center gap-1' : ''}
        ${signIn ? ' rounded-full border-2' : 'rounded-md'}
    
      `}
    >
      {isLoading ? <ImSpinner8 size={18} className="animate-spin mr-1" /> : ''}
      {useIcon ? <FcGoogle size={20} /> : ''}
      {label}
    </button>
  );
};

export default Button;
