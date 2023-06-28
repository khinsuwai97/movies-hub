import Trending from '@/components/MoviesPage/Trending';

const Home = () => {
  return (
    <section className="md:pt-22 md:pb-[90px] pb-3 pt-6 ">
      <div className=" container mx-auto  ">
        <h1 className="uppercase tracking-wider text-center font-semibold sm:text-[26px] text-[22px] text-slate-900 dark:text-slate-200 mb-6 ">
          Trending Today
        </h1>
        <Trending />
      </div>
    </section>
  );
};

export default Home;
