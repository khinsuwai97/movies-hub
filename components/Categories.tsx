'use client';
import { FC } from 'react';
import { HiChevronDown } from 'react-icons/hi';

interface CategoriesProps {
  handleToggle: () => void;
  toggle: boolean;
  type: string;
}

const Categories: FC<CategoriesProps> = ({ handleToggle, toggle, type }) => {
  return (
    <div className="flex gap-3  items-center mb-2 px-[48px] md:px-0  ">
      <h1 className="uppercase tracking-wider text-center font-semibold  md:text-[26px] text-[18px] text-slate-900 dark:text-slate-200   ">
        {type}
      </h1>
      <div
        className=" flex items-center cursor-pointer dark:bg-gray-800 px-2 py-1 rounded-lg bg-slate-200"
        onClick={handleToggle}
      >
        <p className="dark:text-white font-semibold text-slate-900 tracking-wide text-sm">
          Categories
        </p>
        <HiChevronDown
          className={`w-6 text-[20px] dark:text-white text-slate-900  transition
             ${toggle ? 'rotate-180' : 'rotate-0'}
    `}
        />
      </div>
    </div>
  );
};

export default Categories;
