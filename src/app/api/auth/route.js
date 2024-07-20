// pages/api/data.js
import { db ,auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email');
  const password = searchParams.get('password');
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return Response.json({
      message: `Hello World`
    });
  }
  catch (error) {
    return Response.json({
      message: error.message
    });
  }
  
}

