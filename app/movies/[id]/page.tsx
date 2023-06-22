'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import MovieDetail from '@/components/OverView/MovieDetail';

interface Params {
  params: {
    id: string;
  };
}

const MovieOverview = ({ params: { id } }: Params) => {
  return (
    <section id="home" className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
      <div className="xl:max-w-[1280px] w-full flex flex-row gap-4 mb-4 pl-[70px]">
        <button className=" sm:text-[16px] text-sm text-slate-800 dark:text-slate-200 outline-none border-b-2 dark:border-slate-500  hover:border-gray-400 dark:hover:text-white">
          <Link href="/">Back to Movies</Link>
        </button>
      </div>
      <MovieDetail />
    </section>
  );
};

export default MovieOverview;
