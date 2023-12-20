import { createContext, useContext, useState,useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from "../Firebase/firebase";

const UserContext = createContext()


export const UserContextprovider = ({children})=>{

    const [user,setUser] = useState()

    const createUser = (email, password) =>(createUserWithEmailAndPassword(auth,email,password))
    const loginUser = (email, password) =>(signInWithEmailAndPassword(auth,email,password))
    const logout = () => ( signOut(auth))
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  

    return (
        <UserContext.Provider value={{createUser,loginUser,logout,user}}>
            {children}
        </UserContext.Provider>
    )
} 

export const useAuth = ()=> useContext(UserContext)