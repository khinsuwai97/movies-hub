import React from 'react';
import { Button } from '../LinkButton';

const EmptyWatchlist = () => {
  return (
    <div className="h-screen ">
      <div className=" w-full flex flex-col justify-center items-center gap-4 mt-10">
        <h2 className=" text-primary font-semibold sm:text-[40px] text-[26px] ss:leading-[80px] text-center  text-slate-800 dark:text-slate-200 leading-[40px] mb-2 sm:mb-0">
          Your Watchlist is empty{' '}
        </h2>
        <Button text="Go back to Movies" section="/" />
      </div>
    </div>
  );
};

export default EmptyWatchlist;
