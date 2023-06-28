import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();
  const { title, image, releaseDate, vote, userId, movieId } = body;
  try {
    const movies = await prisma.movie.create({
      data: {
        movieId,
        title,
        image,
        releaseDate,
        vote,
        userId,
      },
    });
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json('Failed to create watchlist', { status: 400 });
  }
};
