import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { BsFillPersonDashFill } from 'react-icons/bs';
import { signOut, useSession } from 'next-auth/react';

type SignOutProps = {
  closeAuth: () => void;
};

const SignOut: FC<SignOutProps> = ({ closeAuth }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
    closeAuth();
    router.push('/');
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
