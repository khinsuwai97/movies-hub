import Link from 'next/link';

import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Similarity API | Page not found',
//   description: 'Free & open-source text similarity API',
// };

const PageNotFound = () => {
  return (
    <section className="container pt-32 max-w-7xl mx-auto text-center flex flex-col gap-6 items-center">
      <Link href="/">Back to home</Link>
    </section>
  );
};

export default PageNotFound;
