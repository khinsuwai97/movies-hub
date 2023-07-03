import { FC, useCallback } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { unavailable } from '@/lib/image';
import ImageCarousel from './ImageCarousel';
import { BackButton, BacktoHomeButton } from '../LinkButton';
import { BsBookmarkFill, BsFillBookmarkCheckFill } from 'react-icons/bs';
import { BiRightArrow } from 'react-icons/bi';
import { CastsResponse, DetailResponse, YoutubeVideoResponse } from '@/types';
import { img_500 } from '@/lib/image';
import { successTaost, errorToast } from '@/lib/showToast';
import useGetWatchlist from '@/hooks/useGetWatchlist';
import useLoginModal from '@/hooks/useLoginModal';

interface MovieDeatailProps {
  detail: DetailResponse;
  videos: YoutubeVideoResponse;
  castsData: CastsResponse;
  type: string;
}

const MovieDetail: FC<MovieDeatailProps> = ({
  detail,
  videos,
  castsData,
  type,
}) => {
  console.log(type);
  const genre = detail.genres.map((g) => g.name).join(',');
  const video = videos?.results?.map((v) => v.key);
  const { data: session } = useSession();
  const { data, mutate } = useGetWatchlist(session?.user.id!);
  const { onOpen } = useLoginModal();
  console.log(detail);

  const handleAddToWatchList = useCallback(async () => {
    try {
      await axios.post('/api/watchlist/create', {
        title: detail.title || detail.name,
        image: detail.poster_path,
        releaseDate: detail.release_date || detail.seasons[0].air_date,
        movieId: detail.id.toString(),
        vote: detail.vote_average.toString(),
        userId: session?.user.id,
        mediaType:type
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
    successTaost(detail.title || detail.name, 'was added to your watchlist.');
  }, [
    detail.id,
    detail.name,
    detail.poster_path,
    detail.release_date,
    detail.seasons,
    detail.title,
    detail.vote_average,
    mutate,
    session?.user.id,
    type
  ]);

  // const alreadyInWatchlist = () => {
  //   if (!data || !session) {
  //     return;
  //   } else if (session || !data) {
  //     return;
  //   } else if (session && data) {
  //     // check movies or sereis in already in watchlist
  //     const InWatchlist = data?.find(
  //       (item) => item.movieId === detail.id.toString()
  //     );
  //     return InWatchlist;
  //   }
  // };
  const alreadyInWatchlist = data?.find(
    (item) => item.movieId === detail.id.toString()
  );

  const handleWatchList = (e: any) => {
    if (!session?.user) {
      onOpen();
    } else {
      if (alreadyInWatchlist) {
        errorToast(detail.title || detail.name, 'is already in your watchlist');
        return;
      }
      handleAddToWatchList();
    }
  };

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

          {detail.tagline ? (
            <p className="sm:text-[20px] text-[18px] mb-4 ">{detail.tagline}</p>
          ) : null}

          <p className="mb-4 text-[16px] leading-[28px]">
            {detail.release_date || detail.seasons[0].air_date} {genre}
          </p>

          <div className="flex gap-4 items-center mb-2">
            <div
              className={`w-[30px] h-[30px] rounded-full flex justify-center items-center  cursor-pointer bg-slate-200  dark:bg-gray-600   z-20`}
              onClick={handleWatchList}
            >
              {alreadyInWatchlist ? (
                <BsFillBookmarkCheckFill size={15} />
              ) : (
                <BsBookmarkFill size={15} />
              )}
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
