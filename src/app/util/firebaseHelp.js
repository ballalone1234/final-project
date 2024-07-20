import { db ,auth } from '@/app/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDocs, collection ,setDoc ,doc} from 'firebase/firestore';

function Create(data) {
    data.created = Date.now();
    setDoc(doc(db, "users", data.uid), data);

}