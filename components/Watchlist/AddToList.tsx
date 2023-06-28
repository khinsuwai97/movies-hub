'use client';
import React, { useState } from 'react';
import AddToListItem from './AddToListItem';
import Button from '../Button';
import useGetWatchlist from '@/hooks/useGetWatchlist';
import { useSession } from 'next-auth/react';
import Error from '../Error';
import axios from 'axios';
import { successTaost, errorToast } from '@/lib/showToast';

const AddtoList = () => {
  // console.log(watchlists);
  const { data: session } = useSession();
  const { data, error, isLoading, mutate } = useGetWatchlist();

  if (error) {
    return <Error message={error} />;
  }

  if (isLoading) {
    return <p className="text-[16px] text-center">Preparing watchlist ....</p>;
  }

  if (!data) {
    return;
  }

  const clearWatchlist = async () => {
    try {
      await axios.delete(`/api/watchlist/removeall`);
      successTaost('', 'Removed all of your watchlists.');

      mutate();
    } catch (error) {
      console.log(error);
      errorToast('', 'Error with removing all of your watchlists.');
    }
  };

  return (
    <>
      {data?.map((item) => {
        return (
          <AddToListItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            releaseDate={item.releaseDate}
            vote={+item.vote}
          />
        );
      })}
      <div className="flex justify-end mb-[90px]">
        <Button label="Clear List" onClick={clearWatchlist} />
      </div>
    </>
  );
};

export default AddtoList;
