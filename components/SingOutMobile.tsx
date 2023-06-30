'use client';
import { FC } from 'react';
import { BsFillPersonDashFill } from 'react-icons/bs';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface SignOutMobileProps {
  closeAuth: () => void;
}

const SignOutMobile: FC<SignOutMobileProps> = ({ closeAuth }) => {
  const router = useRouter();
  return (
    <div className="theme-toggle-signout-mobile">
      <button
        className="flex justify-center items-center gap-2 cursor-pointer text-sm "
        onClick={() => {
          signOut();
          closeAuth();
          router.push('/');
        }}
      >
        <BsFillPersonDashFill className="text-[20px]" />
        Sign Out
      </button>
    </div>
  );
};

export default SignOutMobile;
