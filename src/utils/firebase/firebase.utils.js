import { initializeApp } from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,} from 'firebase/auth';
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
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
        prompt: "select_account"
    });

    export const auth = getAuth();
    export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)


    export const db = getFirestore();
    
    export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
        if(!userAuth) return;
        const userDocRef = doc(db,'users', userAuth.uid);

        const userSnapshot = await getDoc(userDocRef);


        if(!userSnapshot.exists()){
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            try {
                await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt,
                    ...additionalInformation,
                });
            } catch (error) {
                console.log('error creating the user', error.message);
            }
        }
        return userDocRef;


    }

    export const createAuthUserWithEmailAndPassword = async (email,password) =>{
        if(!email || !password) return;

        return await createUserWithEmailAndPassword(auth,email,password)
    }