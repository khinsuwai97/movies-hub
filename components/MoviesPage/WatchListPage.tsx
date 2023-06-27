'use client';
import React from 'react';
import EmptyWatchlist from '@/components/Watchlist/EmptyWatchlist';
import WatchlistHeader from '@/components/Watchlist/WatchlistHeader';
import MovieListHeader from '@/components/Watchlist/MovieListHeader';
import AddtoList from '@/components/Watchlist/AddToList';
import useWatchList from '@/hooks/useWatchList';
import useGetWatchlist from '@/hooks/useGetWatchlist';
import { useSession } from 'next-auth/react';

interface Props {}

const WatchListPage = (props: Props) => {
  // const { watchlists } = useWatchList();
  const { data: session } = useSession();
  const { data } = useGetWatchlist(session?.user.id);

  return (
    <>
      <WatchlistHeader />
      <MovieListHeader />
      <hr className="mb-6 dark:border dark:border-b-2 dark:border-gray-800  " />
      {!data || (data?.length === 0 && <EmptyWatchlist />)}
      {data && data.length > 0 && <AddtoList />}
    </>
  );
};

export default WatchListPage;
