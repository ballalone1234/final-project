// pages/api/data.js
import { NextResponse } from 'next/server';
import { db ,auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import errors from '@/util/errors';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email');
  const password = searchParams.get('password');
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return NextResponse.json({ message: 'Successfully logged in' });
  }
  catch (error) {
    return NextResponse.json({ error: errors[error.code] }, { status: 401 })
  }
  
}

