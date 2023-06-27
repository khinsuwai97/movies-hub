import React, { FC, useState } from 'react';
import Image from 'next/image';
import { BsFillBookmarkXFill, BsStarFill } from 'react-icons/bs';
import { unavailable } from '@/lib/image';
import { imagePath } from '@/lib/image';
import useWatchList from '@/hooks/useWatchList';
import useGetWatchlist from '@/hooks/useGetWatchlist';
import { useSession } from 'next-auth/react';
import useDeleteWatchlist from '@/hooks/useDeleteWatchlist';
import { errorToast, successTaost } from '@/lib/showToast';
import axios from 'axios';

interface AddtoListItemProps {
  id: string;
  title: string | undefined;
  image: string;
  releaseDate: string;
  vote: number;
}

const AddToListItem: FC<AddtoListItemProps> = ({
  id,
  title,
  image,
  releaseDate,
  vote,
}) => {
  // const { removeFromWatchlist } = useWatchList();
  console.log(id);
  const { mutate } = useDeleteWatchlist(id);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteWatchlist = async () => {
    try {
      await axios.delete(`/api/delete/${id}`);
      mutate();
      successTaost(title, 'is removed from your watchlist.');
    } catch (error) {
      errorToast(title, `cannot be removed because of ${error} .`);
    }
  };

  return (
    <div>
      <div className="movie-list-container justify-between">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={image ? `${imagePath}${image}` : unavailable}
            alt={title || 'movies/series photo'}
            width={100}
            height={80}
            className="rounded-md"
          />

          <div>
            <p className="sm:text-base text-sm">{title}</p>
            <p className="sm:text-base text-sm">{releaseDate}</p>
            <p className="flex items-center text-sm sm:text-[16px] gap-1  sm:hidden  ">
              <BsStarFill size={15} className="dark:text-bgBlue text-bgBlue1" />
              {vote.toFixed(1)}
            </p>
          </div>
        </div>
        <div className="flex sm:justify-between justify-end items-center">
          <p className="sm:flex items-center text-[16px] gap-1  hidden  ">
            <BsStarFill size={15} className="dark:text-bgBlue text-bgBlue1" />
            {vote.toFixed(1)}
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
// onClick={deleteWatchlist}
