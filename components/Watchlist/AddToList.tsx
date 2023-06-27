'use client';
import React, { useState } from 'react';
import AddToListItem from './AddToListItem';

import Button from '../Button';
import useWatchList from '@/hooks/useWatchList';
import useGetWatchlist from '@/hooks/useGetWatchlist';
import { useSession } from 'next-auth/react';
import Error from '../Error';

const AddtoList = () => {
  const { watchlists, clearWatchlist } = useWatchList();
  // console.log(watchlists);
  const { data: session } = useSession();
  const { data, error, isLoading } = useGetWatchlist(session?.user.id);

  if (error) {
    return <Error message={error} />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return;
  }

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
