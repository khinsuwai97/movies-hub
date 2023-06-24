import React, { FC } from 'react';
import Link from 'next/link';
import { navLinks } from '@/data';

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = () => {
  return (
    <div className="dark:bg-primaryDark bg-white  w-40 absolute top-[70%] right-[6%]  py-5 flex-col border-2 dark:border-gray-800 z-30 shadow-md rounded-[10px]  border-slate-300 flex ">
      <ul className="flex flex-col items-center text-sm dark:text-white text-slate-900 gap-6 ">
        {navLinks.map((link) => {
          return (
            <li
              key={link.title}
              className="hover:underline text-sm tracking-wide"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
