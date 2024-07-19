// pages/api/data.js
import { db ,auth } from '../../../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection ,setDoc} from 'firebase/firestore';

export async function POST(request) {
  const res = await request.json()
  const email = res.email;
  const password = res.password;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
   //get the user id
    const user = auth.currentUser;
    const uid = user.uid;
    //add the user to the database and set document id to the user id
    await addDoc(collection(db, "users"), {
      uid: uid,
      email: email,
      password: password,
    });



    return Response.json({
      message: `Hello World`
    });
  }
  catch (error) {
    return Response.json({
      message: error.message
    });
  }

  return Response.json({ res })
}

