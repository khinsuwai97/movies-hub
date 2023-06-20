'use client';
import React, { useEffect } from 'react';
import MovieCard from '@/components/Movies/MovieCard';
import CustomPagination from '@/components/Pagination/CustomPagination';
interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <section className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
        <div className=" container mx-auto  ">
          <h1 className="uppercase tracking-wider text-center font-semibold sm:text-[26px] text-[22px] text-slate-900 dark:text-slate-200 mb-6 ">
            Trending Today
          </h1>
          <MovieCard />
          <CustomPagination />
        </div>
      </section>
    </>
  );
};

export default Home;
