import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

export const DELETE = async (req: Request, res: Response) => {
  const id = req.url.slice(req.url.lastIndexOf('=') + 1);
  try {
    if (!id && typeof id !== 'string') {
      throw new Error('Invalid Movie Id');
    }

    const movies = await prisma.movie.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json('Error with deleting movies', { status: 400 });
  }
};
