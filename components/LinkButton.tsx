'use client';
import Link from 'next/link';
import { AiFillYoutube } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

interface ButtonProps {
  text: string;
  section: string;
}
export const Button = ({ text, section }: ButtonProps) => {
  return (
    <Link href={section}>
      <button
        className={` px-[25px] py-[8px]  text-[16px] text-slate-800  dark:text-white outline-none bg-bgBlue1 dark:bg-bgBlue rounded-md font-medium cursor-pointer whitespace-nowrap `}
        type="button"
      >
        {text}
      </button>
    </Link>
  );
};

interface ActionButtonProps {
  text: string;
}

export const TrailerButton = ({ text }: ActionButtonProps) => {
  return (
    <button
      className={`px-[30px]  mt-4  py-[8px]  text-[16px] text-slate-800  dark:text-white outline-none bg-bgBlue1 dark:bg-bgBlue rounded-md font-medium cursor-pointer whitespace-nowrap flex gap-2 `}
    >
      <AiFillYoutube size={22} />
      <a href="https://www.netflix.com/browse" target="_blank">
        {text}
      </a>
    </button>
  );
};

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className=" text-sm text-slate-800 dark:text-slate-300 outline-none  dark:hover:text-white 
      "
      onClick={() => router.back()}
    >
      Back to previous page
    </button>
  );
};

interface BacktoHomeButtonProps {
  detail?: boolean;
}
export const BacktoHomeButton = ({ detail }: BacktoHomeButtonProps) => {
  return (
    <button
      className={`${
        detail ? '' : 'sm:text-[16px]'
      }text-sm text-slate-800 dark:text-slate-200 outline-none    dark:hover:text-white`}
    >
      <Link href="/">{detail ? 'Home' : 'Back to Home'}</Link>
    </button>
  );
};
