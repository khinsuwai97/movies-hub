import React from 'react';
import { BsFillPersonDashFill } from 'react-icons/bs';

interface Props {}

const SingOutMobile = (props: Props) => {
  return (
    <div className="theme-toggle-signout-mobile">
      <button className="flex justify-center items-center gap-2 cursor-pointer text-sm ">
        <BsFillPersonDashFill className="text-[20px]" />
        Sign Out
      </button>
    </div>
  );
};

export default SingOutMobile;
