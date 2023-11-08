import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

 
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [information , setInformation] =useState([]);
    const [loading , setLoading] = useState(true);

    const singUp = (email,password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password);
    }

    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }


    const google = ()=>{
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,user=>{
            setLoading(false)
            setInformation(user)
            console.log(user);
        })
        return ()=>unSubscribe();
       },[])

       const logout = ()=>{
        return signOut(auth)
       }

    const info = {
        singUp,
        logIn,
        logout,
        google,
        information,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;