'use client';
import React, { FC } from 'react';
import MovieDetail from '../OverView/MovieDetail';
import useDetail from '@/hooks/useDetail';

interface DetailPageProps {
  movieId: string;
}

const DetailPage: FC<DetailPageProps> = ({ movieId }) => {
  // const { data, error, isLoading } = useDetail('');
  return (
    <>
      <MovieDetail />
    </>
  );
};

export default DetailPage;
