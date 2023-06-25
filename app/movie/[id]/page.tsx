import React from 'react';
import { BackButton } from '@/components/LinkButton';
import DetailPage from '@/components/MoviesPage/DetailPage';

interface Params {
  params: {
    id: string;
  };
}

const MovieOverview = ({ params: { id } }: Params) => {
  return (
    <section id="home" className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
      <div className="xl:max-w-[1280px] w-full flex flex-row gap-4 mb-4 pl-[70px]">
        <BackButton />
      </div>
      <DetailPage movieId={id} />
    </section>
  );
};

export default MovieOverview;
