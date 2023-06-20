'use client';
import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import Link from 'next/link';
import { BsFillPersonDashFill, BsFillPersonPlusFill } from 'react-icons/bs';
import { HiChevronDown } from 'react-icons/hi';
import { navLinks } from '@/data';
import MobileMenu from './MobileMenu';
import BottomMobileMenu from './BottomMobileMenu';
import ThemeToggle from './ThemeToggle';
import ThemeToggleMobile from './ThemeToggleMobile';
import { useTheme } from 'next-themes';
import useLoginModal from '@/hooks/useLoginModal';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [toggleMode, setToggleMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { onOpen } = useLoginModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderTheme = () => {
    if (!mounted) return null;
    if (theme === 'dark') {
      return <MdOutlineDarkMode className="text-[24px]" />;
    }

    if (theme === 'light') {
      return <MdOutlineWbSunny className="text-[24px]" />;
    }
  };

  const toggleShowMobileMenu = () => {
    setShowMobileMenu((prevShow) => !prevShow);
  };
  const closeToggleMode = () => {
    setToggleMode(false);
  };

  const handleToggleMode = () => {
    setToggleMode((prevMode) => !prevMode);
  };

  return (
    <>
      <header className="w-full py-0 px-[48px] z-50 relative  shadow-sm">
        <nav className="nav-bar">
          <Link href="/" className="logo-font">
            Movies Hub
          </Link>
          <div
            className="sm:hidden flex items-center cursor-pointer"
            onClick={toggleShowMobileMenu}
          >
            <p className="dark:text-white font-semibold text-slate-900 tracking-wide text-sm">
              Browse
            </p>
            <HiChevronDown
              className={`w-6 text-[20px] dark:text-white text-slate-900  transition ${
                showMobileMenu ? 'rotate-180' : 'rotate-0'
              }`}
            />
            {showMobileMenu && <MobileMenu />}
          </div>
          <div className="sm:flex justify-between gap-4 hidden ">
            <ul className="nav-list">
              {navLinks.map((link) => {
                return (
                  <li key={link.title} className="hover:underline">
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden md:flex justify-between gap-8 ">
            <button onClick={handleToggleMode} className="toggle-mode-hover">
              {renderTheme()}
            </button>
            <Link href="/search" className="toggle-mode-hover">
              <FiSearch className="text-[24px] " />
            </Link>
            <button className="toggle-mode-hover" onClick={onOpen}>
              <BsFillPersonPlusFill className=" text-[24px] " />
            </button>
          </div>
        </nav>
      </header>
      <BottomMobileMenu
        closeTheme={closeToggleMode}
        onClick={handleToggleMode}
        onOpen={onOpen}
        toggleMode={toggleMode}
      />
      {toggleMode && <ThemeToggle closeTheme={closeToggleMode} />}
      {/* {toggleMode && <ThemeToggleMobile closeTheme={closeToggleMode} />} */}
    </>
  );
};

export default Navbar;
