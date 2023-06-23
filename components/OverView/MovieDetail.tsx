import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { unavailable } from '@/lib/image';
import ImageCarousel from './ImageCarousel';
import { TrailerButton } from '../LinkButton';
import { BsBookmarkFill } from 'react-icons/bs';
import { BiRightArrow } from 'react-icons/bi';

interface Props {}

// grid md:grid-cols-2
const MovieDetail = (props: Props) => {
  return (
    <>
      <div className="xl:max-w-[1280px] w-full grid md:grid-cols-2   py-0 sm:px-[32px] px-[24px] gap-10 mb-[10px]">
        <div className="md:justify-self-center">
          <Image src={unavailable} alt="unavaliable" height={200} width={350} />
        </div>
        <div className="">
          <h2 className="font-bold sm:text-[34px] text-[24px] ss:leading-[50px]  leading-[35px] mb-4 sm:mb-3  text-slate-800 dark:text-slate-200">
            Transformer:Rise of the sun dls ls lsfkdlfs fkdlsdk dlf sfl (2023)
          </h2>
          {/* condition render later */}
          {/* <p className="sm:text-[20px] text-[18px] mb-4 ">No Way Home</p> */}

          <div className="flex gap-4 items-center mb-2">
            <div
              className={`w-[30px] h-[30px] rounded-full flex justify-center items-center  cursor-pointer bg-slate-200  dark:bg-gray-600   z-20`}
            >
              <BsBookmarkFill size={15} />
            </div>
            <button className="flex text-sm gap-1 items-center tracking-wide font-bold dark:text-slate-200 outline-none">
              <BiRightArrow size={18} />
              Play Trailer
            </button>
          </div>

          <p className="text-[16px] leading-[28px] max-w-[600px] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ad, sequi eos, saepe dolorum, voluptatum repellendus facilis ipsum
            debitis praesentium nihil? Doloremque exercitationem vitae nemo
            natus aut numquam aspernatur beatae!
          </p>
          <div className="md:flex hidden ">
            <ImageCarousel />
          </div>
          {/* <TrailerButton text="Watch Trailer" /> */}
        </div>
      </div>
      <div className="md:hidden flex mb-[90px]">
        <ImageCarousel />
      </div>
    </>
  );
};

export default MovieDetail;
// max-w-[600px]
// h2
