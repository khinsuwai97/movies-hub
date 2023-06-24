interface ErrorProps {
  message?: string;
  pageError?: boolean;
}

const Error = ({ message, pageError }: ErrorProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-red-400 mt-[90px] sm:text-[20px] text-[16px] pb-10 px-[48px] ">
      <h1>{message || `Something went Wrong!`}</h1>
      {pageError && (
        <h1 className="text-center">{`This page is out of date.Please choose other pages shown in below first.`}</h1>
      )}
    </div>
  );
};

export default Error;
