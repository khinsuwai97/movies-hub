'use client';
import React, { FC } from 'react';
import { BsFillPersonDashFill } from 'react-icons/bs';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface SignOutMobileProps {
  closeAuth: () => void;
}

const SignOutMobile: FC<SignOutMobileProps> = ({ closeAuth }) => {
  return (
    <div className="theme-toggle-signout-mobile">
      <button
        className="flex justify-center items-center gap-2 cursor-pointer text-sm "
        onClick={() => {
          signOut();
          closeAuth();
          redirect('/');
        }}
      >
        <BsFillPersonDashFill className="text-[20px]" />
        Sign Out
      </button>
    </div>
  );
};

export default SignOutMobile;
