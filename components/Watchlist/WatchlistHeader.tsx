import React from 'react';
import Link from 'next/link';
import { BacktoHomeButton } from '../LinkButton';

const WatchlistHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold sm:text-[30px] text-[20px] ss:leading-[80px] leading-[40px] mb-2 sm:mb-0 text-slate-800 dark:text-slate-200">
        Your Watchlist
      </h3>
      <BacktoHomeButton />
    </div>
  );
};

export default WatchlistHeader;
