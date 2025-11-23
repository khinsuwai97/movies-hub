'use client';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { navLinks } from '@/data';
import useRegisterModal from '@/hooks/useRegisterModal';

const MobileMenu = () => {
  // const { data: session } = useSession();
  const router = useRouter();
  // const { onOpen } = useRegisterModal();
  const handleNavigation = (href: string, auth: boolean | undefined) => {
    // if (auth && !session?.user) {
    //   onOpen();
    // } else if (href) {
    router.push(href);
    // }
  };
  return (
    <div className="dark:bg-primaryDark bg-white  w-40 absolute top-[70%] right-[6%]  py-5 flex-col border-2 dark:border-gray-800 z-30 shadow-md rounded-[10px]  border-slate-300 flex ">
      <ul className="flex flex-col items-center text-sm dark:text-white text-slate-900 gap-6 ">
        {navLinks.map((link) => {
          return (
            <li
              key={link.title}
              className="hover:underline text-sm tracking-wide"
              onClick={() => handleNavigation(link.href, link.auth)}
            >
              {link.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
