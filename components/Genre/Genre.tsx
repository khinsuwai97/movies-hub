import React from 'react';

interface Props {}

const genres = [
  { id: 1, type: 'Comedy' },
  { id: 2, type: 'Action' },
  { id: 3, type: 'Drama' },
  { id: 4, type: 'Comedy' },
  { id: 5, type: 'Cartoon' },
  { id: 6, type: 'Science Fiction' },
  { id: 7, type: 'Documentary' },
  { id: 8, type: 'Comedy' },
  { id: 9, type: 'Comedy' },
  { id: 10, type: 'Comedy' },
  { id: 11, type: 'Comedy' },
  { id: 12, type: 'Comedy' },
  { id: 13, type: 'Comedy' },
  { id: 14, type: 'Comedy' },
  { id: 15, type: 'Comedy' },
  { id: 16, type: 'Comedy' },
  { id: 17, type: 'Comedy' },
  { id: 18, type: 'Comedy' },
  { id: 19, type: 'Comedy' },
];

const Genre = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-2 text-sm px-[10px] mb-1">
      {genres.map((genre) => {
        return (
          <button
            key={genre.id}
            className=" py-1 px-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-bgBlue1 hover:dark:bg-bgBlue "
          >
            {genre.type}
          </button>
        );
      })}
    </div>
  );
};

export default Genre;
