import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movies Hub',
  description: 'Search Favorite movies and series',
};

const PageNotFound = () => {
  return (
    <section className="container pt-32 max-w-7xl mx-auto text-center flex flex-col gap-6 items-center">
      <h1 className="sm:text-[45px] text-[38px]">Page Not Found</h1>
      <Link href="/" className="text-[16px] text-bgBlue font-semibold">
        Back to home
      </Link>
    </section>
  );
};

export default PageNotFound;
