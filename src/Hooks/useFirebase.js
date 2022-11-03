import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {useState } from "react"
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

    return {user, setUser, signInWithGoogle};
}

export default useFirebase;