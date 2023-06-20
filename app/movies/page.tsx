import React from 'react';
import Genre from '@/components/Genre/Genre';
import MovieCard from '@/components/Movies/MovieCard';

interface Props {}

const Movies = (props: Props) => {
  return (
    <>
      <section className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
        <div className=" container mx-auto ">
          <h1 className="uppercase tracking-wider text-center font-semibold sm:text-[26px] text-[22px] text-slate-900 dark:text-slate-200 mb-6 ">
            Discover Movies
          </h1>
          <Genre />
        </div>
      </section>
    </>
  );
};

export default Movies;
