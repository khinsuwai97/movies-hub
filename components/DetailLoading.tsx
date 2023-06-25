const DeatailLoading = () => {
  return (
    <>
      <div className="xl:max-w-[1280px] w-full grid md:grid-cols-2   py-0 sm:px-[32px] px-[24px] gap-10 mb-[10px] ">
        <div className="md:justify-self-center ">
          <div className=" bg-slate-200 h-[525px] w-[350px] dark:bg-bgDark animate-pulse "></div>
        </div>
        <div className="w-[548px] h-[525px]">
          <div
            className="  bg-slate-200 mb-4 sm:mb-3 rounded-lg w-[500px] h-[50px] dark:bg-bgDark animate-pulse
          "
          ></div>

          <div className=" bg-slate-200 w-[400px] h-[40px] rounded-lg dark:bg-bgDark mb-4 animate-pulse "></div>
          <div className=" bg-slate-200 w-[400px] h-[40px] rounded-lg dark:bg-bgDark mb-4 animate-pulse "></div>

          <div className=" bg-slate-200 w-[400px] h-[80px] rounded-lg dark:bg-bgDark mb-4 animate-pulse"></div>

          <div className="flex gap-4 p-4 flex-wrap animate-pulse md:mb-0 mb-[90px] ">
            {Array.from({ length: 4 }, (_, i) => {
              return (
                <div
                  key={i}
                  className="movie-card rounded-lg  w-[100px] h-[150px]   dark:bg-bgDark bg-slate-200 mb-4 flex flex-col"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeatailLoading;
