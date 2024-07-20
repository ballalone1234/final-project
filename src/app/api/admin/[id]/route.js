import { doc, getDoc } from "firebase/firestore";
import { db ,auth } from '@/app/firebaseConfig';
export async function GET(request , {params}) {
  const { id } = params;
  const docRef = doc(db, "users", id);
  let user = (await getDoc(docRef)).data();



    return Response.json({
        user
    });
  
}