'use client';
import { FC } from 'react';
import { Genre } from '@/types';

interface GenreProps {
  onClick: (genre: string) => void;
  selectedGenre: string;
  toggle: boolean;
  genres: Genre[];
  reset: () => void;
}

const Genre: FC<GenreProps> = ({
  onClick,
  toggle,
  genres,
  selectedGenre,
  reset,
}) => {
  return (
    <div className="flex  item-center justify-center ss:block ss:ml-1 relative">
      <div
        className={`dark:bg-primaryDark bg-white  w-72 py-5  border-2 dark:border-gray-800  shadow-md rounded-[10px]  border-slate-300 px-2
        absolute top-[70%] z-30
      ${toggle ? 'opacity-1' : 'opacity-0'}  ${toggle ? 'visible' : 'invisible'}
    ${
      toggle ? '-translate-x-0' : '-translate-x-[100%]'
    } transitiona-all ease-in duration-300
    
    `}
      >
        <ul className="flex justify-evenly  flex-wrap  text-sm dark:text-white text-slate-900 gap-3 cursor-pointer">
          <li className="hover:underline tracking-wide" onClick={reset}>
            All
          </li>
          {genres.map((genre) => {
            return (
              <li
                key={genre.id}
                className={`hover:underline  tracking-wide ${
                  genre.id.toString() === selectedGenre
                    ? 'dark:text-blueBlue text-bgBlue1'
                    : ''
                }`}
                onClick={() => onClick(genre.id.toString())}
              >
                {genre.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Genre;
