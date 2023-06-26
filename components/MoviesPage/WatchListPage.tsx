'use client';
import React from 'react';
import EmptyWatchlist from '@/components/Watchlist/EmptyWatchlist';
import WatchlistHeader from '@/components/Watchlist/WatchlistHeader';
import MovieListHeader from '@/components/Watchlist/MovieListHeader';
import AddtoList from '@/components/Watchlist/AddToList';
import useWatchList from '@/hooks/useWatchList';

interface Props {}

const WatchListPage = (props: Props) => {
  const { watchlists } = useWatchList();

  return (
    <>
      <WatchlistHeader />
      <MovieListHeader />
      <hr className="mb-6 dark:border dark:border-b-2 dark:border-gray-800  " />
      {watchlists.length === 0 && <EmptyWatchlist />}
      {watchlists.length > 0 && <AddtoList />}
    </>
  );
};

export default WatchListPage;
