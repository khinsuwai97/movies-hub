import React, { FC } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import ThemeToggleMobile from './ThemeToggleMobile';
import Link from 'next/link';

interface BottomMobileMenuProps {
  onClick: () => void;
  onOpen: () => void;
  closeTheme: () => void;
  toggleMode: boolean;
}

const BottomMobileMenu: FC<BottomMobileMenuProps> = ({
  onClick,
  onOpen,
  closeTheme,
  toggleMode,
}) => {
  return (
    <>
      <nav className="w-full bottom-0 fixed z-50 dark:bg-secondaryDark bg-slate-100  pt-4 pb-6 px-[48px] block md:hidden  border-t-2 dark:border-gray-800 border-slate-300 shadow-sm ">
        <div className="flex justify-between relative">
          <button
            className="toggle-mode-hover hover:bg-slate-200"
            onClick={onClick}
          >
            <MdOutlineDarkMode className="text-[22px]" />
          </button>
          <Link href="/search" className="toggle-mode-hover hover:bg-slate-200">
            <FiSearch className=" text-[22px] " />
          </Link>
          <button
            className="toggle-mode-hover hover:bg-slate-200"
            onClick={onOpen}
          >
            <BsFillPersonPlusFill className=" text-[22px] " />
          </button>
          {toggleMode && <ThemeToggleMobile closeTheme={closeTheme} />}
        </div>
      </nav>
    </>
  );
};

export default BottomMobileMenu;
