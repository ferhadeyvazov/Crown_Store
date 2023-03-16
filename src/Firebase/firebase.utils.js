import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBmT9RzPgWi9YRLuoCSKsKnvtNEx7ZlswY",
    authDomain: "crown-db-82ace.firebaseapp.com",
    projectId: "crown-db-82ace",
    storageBucket: "crown-db-82ace.appspot.com",
    messagingSenderId: "156178176844",
    appId: "1:156178176844:web:20f34c4eb8852fbf040de9",
    measurementId: "G-4D6MCPM5ZF"
}

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth)return;

    
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
}


export default app;