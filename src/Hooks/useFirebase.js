import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,  FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        }).finally(()=>{
            setIsLoading(false)
        } )
    };
    const signInUsingFacebook = () =>{
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })

    };
    const signInUsingGithub = () =>{
        const gitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitHubProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        });
        console.log(user)

    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        setIsLoading(false)
        });
        return unsubscribe;
    },[])

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        }).catch((error)=>{
            setError(error.message)
        })
    }
    return {
        user,
        isLoading,
        error,
        signInUsingGoogle,
        signInUsingFacebook,
        signInUsingGithub,
        logOut
    }

};
export default useFirebase;