'use client';
import React, { useState } from 'react';
import MovieCard from '@/components/Movies/MovieCard';
import CustomPagination from '@/components/Pagination/CustomPagination';
import Loading from '@/components/Loading';
import useTrendingMovies from '@/hooks/useTrendingMovies';
import Error from '@/components/Error';

interface Props {}
// const movies = [
//   {
//     id: 1,
//     title: 'lldld',
//     name: '',
//     poster_path: '',
//     media_type: 'TV',
//     release_date: '2022-1-23',
//     first_air_date: '',
//     vote_average: 1.2,
//   },
//   {
//     id: 2,
//     title: 'lldld',
//     name: '',
//     poster_path: '',
//     media_type: 'TV',
//     release_date: '2022-1-23',
//     first_air_date: '',
//     vote_average: 1.2,
//   },
// ];

const Home = (props: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useTrendingMovies(page);

  let content;
  if (error) {
    content = <Error message={error.message} />;
  } else {
    if (isLoading) {
      content = <Loading />;
    } else {
      content = <MovieCard movies={data?.results!} />;
    }
  }

  return (
    <>
      <section className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
        <div className=" container mx-auto  ">
          <h1 className="uppercase tracking-wider text-center font-semibold sm:text-[26px] text-[22px] text-slate-900 dark:text-slate-200 mb-6 ">
            Trending Today
          </h1>
          {content}
          <CustomPagination page={page} setPage={setPage} />
        </div>
      </section>
    </>
  );
};

export default Home;
