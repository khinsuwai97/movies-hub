'use client';
import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { unavailable } from '@/lib/image';
import Image from 'next/image';

const images = [
  { img: unavailable, name: 'Peter Parker lorieo fdlf d', id: '1' },
  { img: unavailable, name: 'Peter Parker', id: '2' },
  { img: unavailable, name: 'Peter Parker', id: '3' },
  { img: unavailable, name: 'Peter Parker', id: '4' },
  { img: unavailable, name: 'Peter Parker', id: '5' },
  { img: unavailable, name: 'Peter Parker', id: '6' },
];

interface Props {}

const ImageCarousel = (props: Props) => {
  // this mounted state is added for next js hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const handleDragStart = (e: any) => e.preventDefault();
  const items = images.map((img) => {
    return (
      <div key={img.id} className="flex flex-col items-center  ">
        <Image
          src={img.img}
          alt={img.name}
          height={100}
          width={100}
          onDragStart={handleDragStart}
          role="presentation"
          className="rounded-md mb-2"
        />
        <p className="text-sm max-w-[100px]">{img.name}</p>
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
