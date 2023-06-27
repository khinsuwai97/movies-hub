import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

interface MovieIdParams {
  params: {
    id: string;
  };
}

export const DELETE = async (
  req: Request,
  { params: { id } }: MovieIdParams
) => {
  const currentUser = await getServerSession(authOptions);
  try {
    if (!id && typeof id !== 'string') {
      throw new Error('Invalid User Id');
    }

    const movies = await prisma.movie.findMany({
      where: {
        id,
        userId: currentUser?.user.id,
      },
    });

    console.log(movies);

    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json('Error with fetching movies', { status: 400 });
  }
};
