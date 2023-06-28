'use client';
import React from 'react';
import { motion } from 'framer-motion';
import EmptyWatchlist from '@/components/Watchlist/EmptyWatchlist';
import WatchlistHeader from '@/components/Watchlist/WatchlistHeader';
import MovieListHeader from '@/components/Watchlist/MovieListHeader';
import AddtoList from '@/components/Watchlist/AddToList';
import useGetWatchlist from '@/hooks/useGetWatchlist';

const WatchListPage = () => {
  const { data } = useGetWatchlist();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <WatchlistHeader />
      <MovieListHeader />
      <hr className="mb-6 dark:border dark:border-b-2 dark:border-gray-800  " />
      {(!data || data?.length === 0) && <EmptyWatchlist />}
      {data && data.length > 0 && <AddtoList />}
    </motion.div>
  );
};

export default WatchListPage;
