'use client';

import React, { FC, useCallback, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { unavailable } from '@/lib/image';
import {
  BsBookmarkCheck,
  BsBookmarkCheckFill,
  BsBookmarkFill,
  BsFillBookmarkCheckFill,
  BsFillBookmarkPlusFill,
} from 'react-icons/bs';
import useRegisterModal from '@/hooks/useRegisterModal';
import CustomPagination from '../Pagination/CustomPagination';
import { imagePath } from '@/lib/image';
import { errorToast, successTaost } from '@/lib/showToast';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import useGetWatchlist from '@/hooks/useGetWatchlist';
import Error from '../Error';

export interface MovieListProps {
  id: number;
  title: string | undefined;
  image: string;
  mediaType: string;
  releaseDate: string;
  vote: number;
  type?: string;
}

const MovieList: FC<MovieListProps> = ({
  id,
  title,
  image,
  mediaType,
  releaseDate,
  vote,
  type,
}) => {
  const { onOpen } = useRegisterModal();

  const { data: session } = useSession();
  const { data, error, isLoading, mutate } = useGetWatchlist();

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToDetailPage = (e: any) => {
    e.stopPropagation();

    if (mediaType === 'movie' || type === 'movie') {
      router.push(`/movie/${id}`);
    }
    if (mediaType === 'tv' || type === 'tv') {
      router.push(`/tv/${id}`);
    }
  };

  let typeContent;
  if (type === 'movie') {
    typeContent = <p className="text-sm">Movie</p>;
  } else if (type === 'tv') {
    typeContent = <p className="text-sm">Series</p>;
  } else {
    typeContent = (
      <p className="text-sm">{mediaType === 'movie' ? 'Movie' : 'Series'}</p>
    );
  }
  const handleAddToWatchList = useCallback(
    async (e: any) => {
      try {
        await axios.post('/api/watchlist/create', {
          title,
          image,
          releaseDate,
          movieId: id.toString(),
          vote: vote.toString(),
          userId: session?.user.id,
        });
        mutate();
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmitting(false);
      }
      successTaost(title, 'was added to your watchlist.');
    },
    [title, image, releaseDate, vote, session?.user.id, mutate, id]
  );

  if (error) {
    return <Error message={error} />;
  }

  const handleWatchList = (e: any) => {
    if (!session?.user) {
      e.stopPropagation();
      onOpen();
    } else {
      e.stopPropagation();
      const checkItemInCart = data?.find(
        (item) => item.movieId === id.toString()
      );
      if (checkItemInCart) {
        errorToast(title, 'is already in your watchlist');
        return;
      }
      handleAddToWatchList(e);
    }
  };

  return (
    <div
      className="movie-card hover:-translate-y-2 ease-in duration-300 rounded-lg relative sm:w-[200px] w-[160px] flex flex-col cursor-pointer dark:bg-bgDark bg-white  mb-4"
      onClick={goToDetailPage}
    >
      <Image
        src={image ? `${imagePath}${image}` : unavailable}
        alt={title || 'movie photo'}
        width={200}
        height={50}
        style={{ objectFit: 'contain' }}
        priority={true}
      />

      <h3 className="px-1 pb-3 pt-4 font-semibold leading-tight text-[16px] text-center">
        {title}
      </h3>

      <div className="flex dark:text-slate-200 justify-between items-center px-2 pt-2 pb-3">
        {typeContent}
        <p className="text-sm">{releaseDate}</p>
      </div>
      <div
        className={`w-[25px] h-[25px] rounded-full flex justify-center items-center c mb-2 cursor-pointer absolute top-[10px] right-[10px] ${
          vote >= 5 ? 'bg-sky-600' : 'bg-pink-600'
        }   z-20`}
      >
        <span className="text-[10px] text-white ">
          {Number(vote.toFixed(1))}
        </span>
      </div>
      <span onClick={handleWatchList}>
        {' '}
        <BsBookmarkFill className="text-[22px] absolute text-cyan-700 left-1  top-3 cursor-pointer z-20 " />
      </span>
    </div>
  );
};

export default MovieList;
// onClick={handleOpenRegister}
