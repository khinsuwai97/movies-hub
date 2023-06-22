import React from 'react';
import EmptyWatchlist from '@/components/Watchlist/EmptyWatchlist';
import WatchlistHeader from '@/components/Watchlist/WatchlistHeader';
import MovieListHeader from '@/components/Watchlist/MovieListHeader';
import AddtoList from '@/components/Watchlist/AddToList';
interface Props {}

const WatchList = (props: Props) => {
  return (
    <section className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <WatchlistHeader />
        <MovieListHeader />
        <hr className="mb-6 dark:border dark:border-b-2 dark:border-gray-800  " />
        <AddtoList />
        {/* <EmptyWatchlist /> */}
      </div>
    </section>
  );
};

export default WatchList;
