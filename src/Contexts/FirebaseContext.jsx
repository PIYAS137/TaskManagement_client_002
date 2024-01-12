import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../Firebase/firebase.config";




export const FirebaseAuthContext = createContext(null);
const FirebaseAuth = getAuth(app)
const FirebaseGoogleAuthProvider = new GoogleAuthProvider();


const FirebaseContext = ({children}) => {
    const [user,setUser]=useState();
    const [loader,setLoader]=useState(true)

    const Firebase_Login_User = (email, pass) => {
        setLoader(true)
        return signInWithEmailAndPassword(FirebaseAuth, email, pass)
    }

    const Firebase_SignUp_User = (email, pass) => {
        setLoader(true)
        return createUserWithEmailAndPassword(FirebaseAuth, email, pass)
    }

    const Firebase_Google_Login = () => {
        setLoader(true)
        return signInWithPopup(FirebaseAuth, FirebaseGoogleAuthProvider);
    }

    const Firebase_Logout_User = () => {
        setLoader(true)
        return signOut(FirebaseAuth);
    }

    const Firebase_Update_User = (name, photo) => {
        setLoader(true)
        return updateProfile(FirebaseAuth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(FirebaseAuth, currentUser=>{
            setUser(currentUser);
            setLoader(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])

    const AuthInfo = {
        user,
        loader,
        Firebase_Login_User,
        Firebase_Logout_User,
        Firebase_SignUp_User,
        Firebase_Google_Login,
        Firebase_Update_User
    }

  return (
    <FirebaseAuthContext.Provider value={AuthInfo} >
        {children}
    </FirebaseAuthContext.Provider>
  )
}

export default FirebaseContext