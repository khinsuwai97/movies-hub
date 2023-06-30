import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

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

    console.log(userId);

    const movies = await prisma.movie.findMany({
      where: {
        userId,
      },
    });
    console.log(movies);

    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json('Error with fetching movies', { status: 400 });
  }
};
