'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useSession } from 'next-auth/react';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { HiChevronDown } from 'react-icons/hi';
import { navLinks } from '@/data';
import MobileMenu from './MobileMenu';
import BottomMobileMenu from './BottomMobileMenu';
import ThemeToggle from './ThemeToggle';
import useLoginModal from '@/hooks/useLoginModal';
import SignOut from './SignOut';
import NavbarItems from './NavbarItems';

const Navbar = () => {
  const { data: session } = useSession();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [toggleMode, setToggleMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [toggleAuth, setToggleAuth] = useState(false);
  const { onOpen } = useLoginModal();
  const { theme, setTheme } = useTheme();

  // to fix next hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderTheme = () => {
    if (!mounted) return null;
    if (theme === 'light') {
      return <MdOutlineDarkMode className="text-[24px]" />;
    }

    if (theme === 'dark') {
      return <MdOutlineWbSunny className="text-[24px]" />;
    }
  };

  const toggleShowMobileMenu = () => {
    setShowMobileMenu((prevShow) => !prevShow);
  };
  const closeToggleMode = () => {
    setToggleMode(false);
  };

  // const handleToggleMode = () => {
  //   setToggleMode((prevMode) => !prevMode);
  // };

  const handleToggleAuth = () => {
    setToggleAuth((prevAuth) => !prevAuth);
  };

  const closeToggleAuth = () => {
    setToggleAuth(false);
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
                  <NavbarItems
                    key={link.title}
                    title={link.title}
                    href={link.href}
                    auth={link.auth}
                  />
                );
              })}
            </ul>
          </div>
          <div className="hidden md:flex justify-between gap-8 ">
            <button
              onClick={() => {
                theme === 'dark' ? setTheme('light') : setTheme('dark');
              }}
              className="toggle-mode-hover"
            >
              {renderTheme()}
            </button>
            <Link href="/search" className="toggle-mode-hover">
              <FiSearch className="text-[24px] " />
            </Link>

            {session && session?.user ? (
              <button
                className={`toggle-mode-hover flex items-center`}
                onClick={handleToggleAuth}
              >
                {session?.user.name}
                <HiChevronDown />
              </button>
            ) : (
              <button className="toggle-mode-hover" onClick={onOpen}>
                <BsFillPersonPlusFill className=" text-[24px] " />
              </button>
            )}
          </div>
        </nav>
      </header>
      <BottomMobileMenu
        // closeTheme={closeToggleMode}
        // onClick={handleToggleMode}
        onOpen={onOpen}
        // toggleMode={toggleMode}
        toggleAuth={toggleAuth}
        handleToogleAuth={handleToggleAuth}
        closeAuth={closeToggleAuth}
      />
      {toggleAuth && <SignOut closeAuth={closeToggleAuth} />}
      {/* {toggleMode && <ThemeToggle closeTheme={closeToggleMode} />} */}
    </>
  );
};

export default Navbar;
