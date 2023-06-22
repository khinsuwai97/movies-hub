'use client';
import React from 'react';
import Image from 'next/image';
import { unavailable } from '@/lib/image';
import {
  BsBookmarkCheck,
  BsBookmarkCheckFill,
  BsBookmarkFill,
  BsFillBookmarkPlusFill,
} from 'react-icons/bs';
import Link from 'next/link';
import item from '@/mockdata/photos/poster.png';
import useRegisterModal from '@/hooks/useRegisterModal';
import { useRouter } from 'next/navigation';
export interface MovieListProps {}

const imageStyle = {
  width: 'auto',
  height: 'auto',
};

const MovieList = ({ title, image, genere, rating, id, date }) => {
  const { onOpen } = useRegisterModal();
  const router = useRouter();

  const handleOpenRegister = (e: any) => {
    e.stopPropagation();
    onOpen();
  };

  const goToDetailPage = (e: any) => {
    e.stopPropagation();
    router.push(`/movies/${id}`);
  };

  return (
    <div
      className="movie-card hover:-translate-y-2 ease-in duration-300 rounded-lg relative sm:w-[200px] w-[160px] flex flex-col cursor-pointer dark:bg-bgDark bg-white  mb-4"
      onClick={goToDetailPage}
    >
      <Image
        src={unavailable}
        alt={title}
        width={200}
        height={50}
        priority={true}
        className="object-cover "
        style={imageStyle}
      />

      <h3 className="px-1 pb-3 pt-4 font-semibold leading-tight text-[16px] text-center">
        {title}
      </h3>

      <div className="flex dark:text-slate-200 justify-between items-center px-4 pt-2 pb-3">
        <p className="text-sm">{genere}</p>
        <p className="text-sm">2023-06-12</p>
      </div>
      <div
        className={`w-[30px] h-[30px] rounded-full flex justify-center items-center c mb-2 cursor-pointer absolute top-[10px] right-[10px] bg-sky-600   z-20`}
      >
        <span className="text-[10px] text-white ">{rating}</span>
      </div>
      <span onClick={handleOpenRegister}>
        <BsBookmarkFill className="text-[22px] absolute text-slate-500 left-1  top-3 cursor-pointer z-20 " />
      </span>
    </div>
  );
};
// text-pink-600
// bg-pink-800
// text-cyan-700

export default MovieList;
{
  /* <div className="px-4 pt-2 pb-3"></div> */
}
{
  /* <div
className={`w-[30px] h-[30px] rounded-full flex justify-center items-center c mb-2 cursor-pointer absolute top-[10px] right-[10px] bg-sky-600    z-20`}
>
<span className="text-[10px] text-white ">{rating}</span>
</div> */
}
// top-[30%] left-[10px]
