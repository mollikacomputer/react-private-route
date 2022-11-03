import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {useEffect, useState } from "react"
import app from "../firebase.init";

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }
    // logOut log in helpful
    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
            setUser(user)
        })
    },[]);
    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{})
    }
    return {user, setUser, signInWithGoogle, handleSignOut};
}

export default useFirebase;