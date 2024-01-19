import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { auth } from "../Firebase/firebase";
import { addUserToDatabase } from "../Firebase/firestore";
const UserContext = createContext()


export const UserContextprovider = ({ children }) => {
  
  console.log("loaded AuthContext")
  const [user, setUser] = useState()
  

  const createUser = (email, password, userName) => (
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully, now set the display name
        const user = userCredential.user;
        const displayName = userName; // Set the display name as per your requirements

        // Update the user profile with the display name
        return updateProfile(user, {
          displayName: displayName
        });
      })
      .then(() => {
        // Display name updated successfully
        console.log("User signed up with display name set");
      })
      .then(()=>{
        addUserToDatabase()
      })
      .catch((error) => {
        // Handle errors during the signup process
        console.error("Error signing up:", error.message);
      })
  )
  const loginUser = (email, password) => (signInWithEmailAndPassword(auth, email, password))
  const logout = () => (signOut(auth))

  useEffect(() => {
    console.log("AuthContext UE ran")
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <UserContext.Provider value={{ createUser, loginUser, logout, user }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext)