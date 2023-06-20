import React, { FC } from 'react';

interface Params {
  params: {
    id: string;
  };
}

const MovieOverview = ({ params: { id } }: Params) => {
  return <div>{id}</div>;
};

export default MovieOverview;
