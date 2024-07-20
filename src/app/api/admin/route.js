// pages/api/data.js
import { db ,auth } from '@/app/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDocs, collection ,setDoc ,doc} from 'firebase/firestore';

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
    const docRef = doc(db, "users", uid);
    await setDoc(docRef, {
      role: "admin",
      email: email,
      first_name: res.first_name,
      last_name: res.last_name,
      created 
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

  
}

export async function GET(request) {
  //get all admin users
  const users = collection(db, 'users');
  const snapshot = await getDocs(users);
  const usersList = snapshot.docs.map(doc => doc.data());
  return Response.json(usersList);
  
}


