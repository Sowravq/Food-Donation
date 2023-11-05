import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

 
export const AuthContext = createContext();
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