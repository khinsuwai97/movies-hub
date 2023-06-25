import React from 'react';
import AddToListItem from './AddToListItem';
// import { movies } from '@/mockdata/photos/data';
// import { ActionButton } from '../LinkButton';
import Button from '../Button';

interface Props {}

const AddtoList = (props: Props) => {
  return (
    <p>watchlis</p>
    // <>
    //   {movies.map((movie) => {
    //     return (
    //       <AddToListItem
    //         key={movie.id}
    //         id={movie.id}
    //         title={movie.title}
    //         image={movie.image}
    //         genere={movie.genere}
    //         date={movie.date}
    //         rating={movie.rating}
    //       />
    //     );
    //   })}
    //   <div className="flex justify-end mb-[90px]">
    //     <Button label="Clear List" />
    //   </div>
    // </>
  );
};

export default AddtoList;
