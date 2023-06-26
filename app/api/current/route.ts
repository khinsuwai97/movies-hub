import { NextResponse } from 'next/server';
import serverAuth from '@/lib/serverAuth';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
export const GET = async (req: Request, res: Response) => {
  try {
    const currentUser = await serverAuth();
    console.log(currentUser);
    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json('User not found', { status: 400 });
  }
};
