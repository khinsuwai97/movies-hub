import React from 'react';

interface ErrorProps {
  message?: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="flex justify-center items-center text-red-400 mt-[90px] text-[20px]">
      <h1>{message || 'Something went Wrong!'}</h1>
    </div>
  );
};

export default Error;
