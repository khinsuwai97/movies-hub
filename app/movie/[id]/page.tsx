'use client';
import React from 'react';
import DetailPage from '@/components/MoviesPage/DetailPage';
import { usePathname } from 'next/navigation';
import { BackButton, BacktoHomeButton } from '@/components/LinkButton';

interface Params {
  params: {
    id: string;
  };
}

const MovieOverview = ({ params: { id } }: Params) => {
  const pathName = usePathname();
  const type = pathName.split('/')[1];

  return (
    <section id="home" className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
      <div className="container mx-auto mb-10">
        {/* <div className="mb-4 md:px-0 px-[48px]">
          <BacktoHomeButton detail={true} />
          <span className="text-slate-400"> / </span>
          <BackButton />
        </div> */}
        <DetailPage movieId={id} type={type} />
      </div>
    </section>
  );
};

export default MovieOverview;
