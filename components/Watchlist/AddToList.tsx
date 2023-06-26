'use client';
import React, { useState } from 'react';
import AddToListItem from './AddToListItem';
import { movies } from '@/mockdata/photos/data';
// import { ActionButton } from '../LinkButton';
import Button from '../Button';
import useWatchList from '@/hooks/useWatchList';

const AddtoList = () => {
  const { watchlists, clearWatchlist } = useWatchList();
  return (
    <>
      {watchlists.map((item) => {
        return (
          <AddToListItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            releaseDate={item.releaseDate}
            vote={item.vote}
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
