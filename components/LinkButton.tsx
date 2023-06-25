'use client';
import Link from 'next/link';
import { AiFillYoutube } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
export const Button = (props) => {
  return (
    <Link href={props.section}>
      <button
        className={`${
          props.cartTotal ? 'w-[100%]' : null
        } px-[47px] py-[8px]  text-[16px] text-slate-800  dark:text-white outline-none bg-bgBlue1 dark:bg-bgBlue rounded-md font-medium cursor-pointer whitespace-nowrap `}
        type="button"
        onClick={props.handleClick}
      >
        {props.text}
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
      className=" text-sm text-slate-800 dark:text-slate-300 outline-none  dark:border-slate-500 border-b-2  hover:border-gray-400 dark:hover:text-white 
      "
      onClick={() => router.back()}
    >
      Back to previous page
    </button>
  );
};
