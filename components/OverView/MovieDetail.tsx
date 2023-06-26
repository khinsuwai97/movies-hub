import React, { FC, useCallback } from 'react';
import Image from 'next/image';
import { unavailable } from '@/lib/image';
import ImageCarousel from './ImageCarousel';
import { BackButton, TrailerButton, BacktoHomeButton } from '../LinkButton';
import { BsBookmarkFill } from 'react-icons/bs';
import { BiRightArrow } from 'react-icons/bi';
import { CastsResponse, DetailResponse, YoutubeVideoResponse } from '@/types';

import { img_500 } from '@/lib/image';
import useWatchList from '@/hooks/useWatchList';
import { successTaost, errorToast } from '@/lib/showToast';

interface MovieDeatailProps {
  detail: DetailResponse;
  videos: YoutubeVideoResponse;
  castsData: CastsResponse;
}

const MovieDetail: FC<MovieDeatailProps> = ({ detail, videos, castsData }) => {
  const genre = detail.genres.map((g) => g.name).join(',');
  const video = videos?.results?.map((v) => v.key);
  const { watchlists, addToWatchlist } = useWatchList();
  const handleAddToWatchList = useCallback(() => {
    const checkItemInCart = watchlists.find((item) => item.id === detail.id);
    if (checkItemInCart) {
      errorToast(detail.title || detail.name);
      return;
    }
    addToWatchlist({
      id: detail.id,
      title: detail.title || detail.name,
      image: detail.poster_path,
      releaseDate: detail.release_date || detail.seasons[0].air_date,
      vote: detail.vote_average,
    });
    successTaost(detail.title || detail.name);
  }, [
    detail.id,
    detail.title,
    detail.release_date,
    detail.vote_average,
    detail.name,
    detail.seasons,
    detail.poster_path,
    addToWatchlist,
    watchlists,
  ]);

  return (
    <>
      <div className="xl:max-w-[1280px] w-full grid md:grid-cols-2   py-0 sm:px-[32px] px-[24px] gap-10 mb-[10px] dark:text-slate-200 text-slate-800">
        <div className="md:justify-self-center ">
          <Image
            src={
              detail.poster_path
                ? `${img_500}${detail.poster_path}`
                : unavailable
            }
            alt={detail.title || detail.name}
            height={200}
            width={350}
          />
        </div>
        <div>
          <h2 className="font-bold sm:text-[34px] text-[24px] ss:leading-[50px]  leading-[35px] mb-4 sm:mb-3  text-slate-800 dark:text-slate-200">
            {detail.title || detail.name}
          </h2>
          {/* condition render later */}
          {detail.tagline ? (
            <p className="sm:text-[20px] text-[18px] mb-4 ">{detail.tagline}</p>
          ) : null}

          <p className="mb-4 text-[16px] leading-[28px]">
            {detail.release_date || detail.seasons[0].air_date} {genre}
          </p>

          <div className="flex gap-4 items-center mb-2">
            <div
              className={`w-[30px] h-[30px] rounded-full flex justify-center items-center  cursor-pointer bg-slate-200  dark:bg-gray-600   z-20`}
              onClick={handleAddToWatchList}
            >
              <BsBookmarkFill size={15} />
            </div>
            <a
              className="flex text-sm gap-1 items-center tracking-wide font-bold dark:text-slate-200 outline-none "
              href={`https://www.youtube.com/watch?v=${video[2]}`}
              target="_blank"
            >
              <BiRightArrow size={18} />
              Play Trailer
            </a>
          </div>

          <p className="text-[16px] leading-[28px] max-w-[600px] mb-4">
            {detail.overview}
          </p>
          <div className="md:flex hidden mb-4 ">
            <ImageCarousel castsData={castsData} />
          </div>
          <div className=" md:flex justify-center items-center hidden">
            <BacktoHomeButton detail={true} />
            <span className="text-slate-400 m-3"> / </span>
            <BackButton />
          </div>
        </div>
      </div>
      <div className="md:hidden flex mb-4">
        <ImageCarousel castsData={castsData} />
      </div>
      <div className=" md:hidden flex justify-center items-center mb-[90px] ">
        <BacktoHomeButton detail={true} />
        <span className="text-slate-400 m-3"> / </span>
        <BackButton />
      </div>
    </>
  );
};

export default MovieDetail;
