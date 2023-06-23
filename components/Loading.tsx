import React from 'react';

interface Props {}

const Loading = (props: Props) => {
  return (
    <div className="flex justify-around flex-wrap p-4 animate-pulse">
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
  );
};

export default Loading;
// bg-gray-300

// bg-secondaryDark
