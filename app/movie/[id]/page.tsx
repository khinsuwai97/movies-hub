'use client';
import DetailPage from '@/components/MoviesPage/DetailPage';
import { usePathname } from 'next/navigation';

interface Params {
  params: {
    id: string;
  };
}

const MovieOverview = ({ params: { id } }: Params) => {
  const pathName = usePathname();
  const type = pathName.split('/')[1];

  return (
    <section
      id="home"
      className="md:pt-22 md:pb-[90px] pb-3 pt-6 px-0 md:px-4  "
    >
      <div className="container mx-auto mb-10">
        <DetailPage movieId={id} type={type} />
      </div>
    </section>
  );
};

export default MovieOverview;
