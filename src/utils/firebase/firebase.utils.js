import { initializeApp } from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc,setDoc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAnlKW4J7njpLCY88FxmGynykK6Samh7yk",
    authDomain: "sheeps-clothing-db.firebaseapp.com",
    projectId: "sheeps-clothing-db",
    storageBucket: "sheeps-clothing-db.appspot.com",
    messagingSenderId: "358429720779",
    appId: "1:358429720779:web:b18904fbfb2e9159aa5b4e"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: "select_account"
    });

    export const auth = getAuth();
    export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

    export const db = getFirestore();
    
    export const createUserDocumentFromAuth = async (userAuth) =>{
        const userDocRef = doc(db,'users', userAuth.uid);

        console.log(userDocRef);

        const userSnapshot = await getDoc(userDocRef);
        console.log(userSnapshot);
        console.log(userSnapshot.exists());

        if(!userSnapshot.exists()){
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            try {
                await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt
                });
            } catch (error) {
                console.log('error creating the user', error.message);
            }
        }
        return userDocRef;


    }