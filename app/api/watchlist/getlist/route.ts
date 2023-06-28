import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export const GET = async (req: Request) => {
  const currentUser = await getServerSession(authOptions);
  const userId = currentUser?.user.id;
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
