import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setloading]= useState(true)
    // console.log(user,loading)


    // creat user
     const createUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
     }
    //  update user prfile
    const  updateUser= (updateData)=>{
      return updateProfile(auth.currentUser, updateData);

    }
    //  sign in
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    // sign out
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setloading(false);
        });
        return () => unsubscribe();
      }, []);
  


    const authData ={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setloading,
        updateUser
       

    }
    return (<AuthContext value={authData}>
        {children}
    </AuthContext>
    );
};

export default AuthProvider;