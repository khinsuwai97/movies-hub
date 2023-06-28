import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export const DELETE = async (req: Request, res: Response) => {
  const currentUser = await getServerSession(authOptions);
  const userId = currentUser?.user.id;

  try {
    if (!userId && typeof userId !== 'string') {
      throw new Error('Invalid User Id');
    }

    const movies = await prisma.movie.deleteMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json('Error with deleting movies', { status: 400 });
  }
};
