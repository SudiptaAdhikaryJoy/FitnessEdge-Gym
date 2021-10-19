import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    // google signin
    const signInUsingGoogle = () =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }
    // github sign in
    const signInUsingGithub = () =>{
        setIsLoading(true);
        signInWithPopup(auth, gitProvider)
        .then(result =>{
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(()=> setIsLoading(false));

    }

    // create new user with email and password
    const handleEmail=(event) =>{
        setEmail(event.target.value);
    }
    const handlePassword=(event) =>{
        setPassword(event.target.value);
    }

    const handleSignIn = (event) =>{
        event.preventDefault();
        if(password.length < 6){
            setError('password must be 6 character')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })

    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
    },[])

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));

    }

    return {
        user,
        logOut,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        handleSignIn,
        handlePassword,
        handleEmail
    }
}

export default useFirebase;