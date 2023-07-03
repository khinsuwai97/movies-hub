import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

interface UserIdParams {
  params: {
    userId: string;
  };
}
export const GET = async (
  req: Request,
  { params: { userId } }: UserIdParams
) => {
  try {
    if (!userId && typeof userId !== 'string') {
      throw new Error('Invalid User Id');
    }

    const movies = await prisma.movie.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json('Error with fetching movies', { status: 400 });
  }
};
