import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

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

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUsers(user);
            }
            else{
                setUsers({});
            }
        });
    },[])

    const logOut = () =>{
        signOut(auth)
            .then(() => { });

    }

    return {
        users,
        logOut,
        error,
        signInUsingGoogle
    }
}

export default useFirebase;