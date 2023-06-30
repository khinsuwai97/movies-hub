'use client';
import { FC, useState, useEffect } from 'react';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
  closeTheme: () => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ closeTheme }) => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="theme-toggle">
      <div className="flex flex-col text-sm  dark:text-white text-slate-900 gap-4 ml-3  ">
        <button
          className="flex gap-2 cursor-pointer"
          onClick={() => {
            setTheme('light');
            closeTheme();
          }}
        >
          Light
          <MdOutlineWbSunny className="text-[20px]" />
        </button>
        <button
          className="flex gap-2 cursor-pointer "
          onClick={() => {
            setTheme('dark');
            closeTheme();
          }}
        >
          Dark
          <MdOutlineDarkMode className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
