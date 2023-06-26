import React, { FC } from 'react';
import { useRouter, redirect } from 'next/navigation';
import { BsFillPersonDashFill } from 'react-icons/bs';
import { signOut, useSession } from 'next-auth/react';
import { Session } from 'inspector';

type SignOutProps = {
  closeAuth: () => void;
};

const SignOut: FC<SignOutProps> = ({ closeAuth }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const handleSignOut = async () => {
    await signOut();
    closeAuth();
  };
  return (
    <div className="theme-toggle-signout">
      {session?.user && (
        <button
          className="flex justify-center items-center gap-2 cursor-pointer text-sm"
          onClick={handleSignOut}
        >
          <BsFillPersonDashFill className="text-[20px]" />
          Sign Out
        </button>
      )}
    </div>
  );
};

export default SignOut;
