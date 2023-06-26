'use client';
import React from 'react';
import { BsFillPersonDashFill } from 'react-icons/bs';
import { signOut } from 'next-auth/react';
import { useRouter, redirect } from 'next/navigation';

interface Props {}

const SingOutMobile = (props: Props) => {
  const router = useRouter();
  return (
    <div className="theme-toggle-signout-mobile">
      <button
        className="flex justify-center items-center gap-2 cursor-pointer text-sm "
        onClick={() => {
          signOut();
        }}
      >
        <BsFillPersonDashFill className="text-[20px]" />
        Sign Out
      </button>
    </div>
  );
};

export default SingOutMobile;
