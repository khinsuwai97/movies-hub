const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-fit">
        {Array.from({ length: 20 }, (_, i) => {
          return (
            <div
              key={i}
              className="movie-card rounded-lg sm:w-[200px] w-[160px]   dark:bg-bgDark bg-white h-[403px] mb-4 flex flex-col"
            >
              <div className="dark:bg-bgDark bg-slate-200  h-[300px]"></div>
              <div
                className="h-[103px] dark:bg-secondaryDark  px-4 pt-2 pb-3 
           "
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loading;
