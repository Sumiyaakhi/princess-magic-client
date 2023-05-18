import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);
    const [loading, setLoading] =useState(true);
    const googleProvider = new GoogleAuthProvider();
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }
    
    
    const signIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
     
    
    const googleSignIn = () =>{
      setLoading(true);
    return signInWithPopup(auth,googleProvider);
      }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current User' , currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        createUser,
        loading,
        signIn,
        googleSignIn,
        logOut

    }
    return (
        <div>
           <AuthContext.Provider  value = {authInfo}>
            {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;