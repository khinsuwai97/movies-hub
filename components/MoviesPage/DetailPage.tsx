'use client';
import React, { FC } from 'react';
import MovieDetail from '../OverView/MovieDetail';
import useDetail from '@/hooks/useDetail';
import useYoutube from '@/hooks/useYoutube';
import useCast from '@/hooks/useCasts';
import DeatailLoading from '../DetailLoading';
import Error from '../Error';
interface DetailPageProps {
  movieId: string;
  type: string;
}

const DetailPage: FC<DetailPageProps> = ({ movieId, type }) => {
  const { data, error, isLoading } = useDetail(type, +movieId);
  const {
    data: youtubeVideo,
    error: videoError,
    isLoading: videoIsLoading,
  } = useYoutube(type, +movieId);

  const {
    data: casts,
    error: castError,
    isLoading: castIsLoading,
  } = useCast(type, +movieId);

  if (error) {
    return <Error message={error.message} />;
  } else if (isLoading) {
    return <DeatailLoading />;
  }
  if (videoError) {
    return <Error message={error.message} />;
  } else if (videoIsLoading) {
    return <DeatailLoading />;
  }
  if (castError) {
    return <Error message={error.message} />;
  } else if (castIsLoading) {
    return <DeatailLoading />;
  }

  if (!data) {
    return;
  }
  if (!youtubeVideo) {
    return;
  }

  if (!casts) return;

  return (
    <>
      <MovieDetail detail={data} videos={youtubeVideo} castsData={casts} />
    </>
  );
};

export default DetailPage;
