import React from 'react';

interface Props {}

const MovieListHeader = (props: Props) => {
  return (
    <div className=" movie-list-container mb-4">
      <h5>
        Movies<span className="m-2">/</span>Series
      </h5>
      <div className="flex justify-between items-center">
        <h5 className="hidden sm:flex">Rating</h5>
        <h5 className="sm:flex hidden">Remove from List</h5>
      </div>
    </div>
  );
};

export default MovieListHeader;
