import React from 'react';
import Image from 'next/image';
import { BsFillBookmarkXFill, BsStarFill } from 'react-icons/bs';
import { unavailable } from '@/lib/image';

interface Props {}

const AddToListItem = ({ title, image, genere, rating, id, date }) => {
  return (
    <div>
      <div className="movie-list-container justify-between">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={unavailable}
            alt={title}
            width={100}
            height={80}
            className="rounded-md"
          />

          <div>
            <p className="sm:text-base text-sm">{title}</p>
            <p className="sm:text-base text-sm">{date}</p>
            <p className="flex items-center text-sm sm:text-[16px] gap-1  sm:hidden  ">
              <BsStarFill size={15} className="dark:text-bgBlue text-bgBlue1" />
              {rating}
            </p>
          </div>
        </div>
        <div className="flex sm:justify-between justify-end items-center">
          <p className="sm:flex items-center text-[16px] gap-1  hidden  ">
            <BsStarFill size={15} className="dark:text-bgBlue text-bgBlue1" />
            {rating}
          </p>
          <button className="justify-self-center">
            <BsFillBookmarkXFill size={22} className="text-red-500" />
          </button>
        </div>
      </div>
      <hr className="mb-6 item-border" />
    </div>
  );
};

export default AddToListItem;
