import React from 'react';
import Link from 'next/link';

const WatchlistHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold sm:text-[30px] text-[20px] ss:leading-[80px] leading-[40px] mb-2 sm:mb-0 text-slate-800 dark:text-slate-200">
        Your Watchlist
      </h3>
      <button className=" sm:text-[16px] text-sm text-slate-800 dark:text-slate-200 outline-none border-b-2 dark:border-slate-500  hover:border-gray-400 dark:hover:text-white">
        <Link href="/">Back to Movies</Link>
      </button>
    </div>
  );
};

export default WatchlistHeader;
