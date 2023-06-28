'use client';
import WatchListPage from '@/components/MoviesPage/WatchListPage';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const WatchList = () => {
  const { data: session } = useSession();
  if (!session || !session?.user) {
    redirect('/');
  }
  return (
    <section className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <WatchListPage />
      </div>
    </section>
  );
};

export default WatchList;
