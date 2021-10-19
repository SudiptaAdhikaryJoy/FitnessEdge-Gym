import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUsers(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    const logOut = () =>{
        signOut(auth)
            .then(() => { });

    }

    return {
        users,
        logOut,
        signInUsingGoogle
    }
}