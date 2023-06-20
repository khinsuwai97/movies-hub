import React from 'react';
import { BiSearch } from 'react-icons/bi';

interface Props {}

const Search = (props: Props) => {
  return (
    <section className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
      <div className="xl:max-w-[1280px] w-full  py-0 sm:px-[32px] px-[24px]">
        <form className="flex justify-center items-center relative">
          <input
            type="text"
            placeholder="Search Movie, Series"
            className="sm:py-[10px] py-[6px] w-[70%]  sm:w-[60%]  px-[50px] rounded-[10px] text-sm  sm:text-[16px] border-slate-500  border-solid border-2 dark:bg-primaryDark "
          />
          <button
            className="text-[20px] text-secondary3 top-[50%] left-[0%] translate-x-[-150%] opacity-[70%] hover:opacity-100 "
            type="submit"
          >
            <BiSearch />
          </button>
        </form>
      </div>
    </section>
  );
};
export default Search;
