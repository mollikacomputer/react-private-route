import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from '../firebase.init';
import useFirebase from '../Hooks/useFirebase';
// const auth = getAuth(app);

const Login = () => {
    // const [user, setUser] = useState('');
    // const [email, setEmail] = useState('');
    // const handleGoogleSignIn = () => {
    //     const googleProvider = new GoogleAuthProvider();
    //     signInWithPopup(auth, googleProvider)
    //     .then((result) =>{
    //         const user = result.user;
    //         setUser(user.displayName);
    //         setEmail(user.email);
    //         console.log(user.displayName, user.email);
    //     })
    // }
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h2 className='text-3xl' > Log In </h2>
            <button onClick={signInWithGoogle} > Sign In with google </button>
            {/* <h2>Name : <i> {user}</i></h2>
            <h2>Email : <i> {email}</i></h2> */}

        </div>
    );
};

export default Login;