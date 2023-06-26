import bcrypt from 'bcrypt';
import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();
  const { email, name, password } = body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json('Failed to register', { status: 400 });
  }
};
