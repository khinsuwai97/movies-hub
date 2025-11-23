'use client';
import React, { useState, FC, FormEvent } from 'react';
import { BiSearch } from 'react-icons/bi';

interface SearchFeatureProps {
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
const SearchFeature: FC<SearchFeatureProps> = ({
  selectedType,
  setSelectedType,
  setQuery,
}) => {
  const [searchTerm, setSerchTerm] = useState('');
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() === '' || searchTerm.length === 0) {
      return;
    }
    setQuery(searchTerm);
  };

  return (
    <>
      <form
        className="flex justify-center items-center relative mb-4"
        onSubmit={handleFormSubmit}
      >
        <input
          value={searchTerm}
          type="text"
          placeholder="Search"
          onChange={(e) => setSerchTerm(e.target.value)}
          className="sm:py-[10px] py-[6px] w-[70%]  sm:w-[60%]  px-[50px] rounded-[10px] text-sm  sm:text-[16px] border-slate-500  border-solid border-2 dark:bg-primaryDark "
        />
        <button
          className="text-[20px] text-secondary3 top-[50%] left-[0%] translate-x-[-150%] opacity-[70%] hover:opacity-100 "
          type="submit"
        >
          <BiSearch />
        </button>
      </form>
      <div className="flex justify-center items-center gap-4 mb-4 sm:text-base text-sm ">
        <button onClick={() => setSelectedType('movie')}>
          <span
            className={`${
              selectedType === 'movie'
                ? 'border-b-2 border-bgBlue1 dark:border-bgBlue'
                : ''
            }`}
          >
            Search Movies
          </span>
        </button>
        <button onClick={() => setSelectedType('tv')}>
          <span
            className={`${
              selectedType === 'tv'
                ? 'border-b-2 border-bgBlue1 dark:border-bgBlue'
                : ''
            }`}
          >
            Search TV Series
          </span>
        </button>
      </div>
    </>
  );
};

export default SearchFeature;
