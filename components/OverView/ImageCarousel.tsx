'use client';
import React, { useState, useEffect, FC } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { unavailable } from '@/lib/image';
import Image from 'next/image';
import { CastsResponse } from '@/types';
import { imagePath } from '@/lib/image';

interface ImageCarouselProps {
  castsData: CastsResponse;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ castsData }) => {
  const casts = castsData.cast.map((cast) => ({
    id: cast.id,
    name: cast.name,
    profileImage: cast.profile_path,
  }));

  // this mounted state is added for next js hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const handleDragStart = (e: any) => e.preventDefault();
  const items = casts.map((cast) => {
    return (
      <div key={cast.id} className="flex flex-col items-center  ">
        <Image
          src={
            cast.profileImage ? `${imagePath}${cast.profileImage}` : unavailable
          }
          alt={cast.name}
          height={100}
          width={100}
          onDragStart={handleDragStart}
          role="presentation"
          className="rounded-md mb-2"
        />
        <p className="text-sm text-center max-w-[100px] ">{cast.name}</p>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 3,
    },

    480: {
      items: 3,
    },

    768: {
      items: 5,
    },
    1060: {
      items: 4,
    },

    1200: {
      items: 5,
    },
  };

  return (
    <AliceCarousel
      items={items}
      autoPlayInterval={1000}
      animationDuration={1500}
      mouseTracking
      autoPlay
      disableButtonsControls
      disableDotsControls
      infinite
      responsive={responsive}
    />
  );
};

export default ImageCarousel;
