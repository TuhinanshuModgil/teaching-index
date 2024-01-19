import { createContext, useContext, useState, useEffect } from "react";
import { db,auth } from "../Firebase/firebase";
import { collection, addDoc,setDoc,doc,getDocs} from "firebase/firestore"; 
import { trialFunction1 } from '../Firebase/firestore';
console.log("loaded userContext")
const UserDatabaseContext = createContext()

export const UserDatabaseContextProvider = ({children})=>{

    const user = auth.currentUser;
    const [userTaughtCourses, setUserTaughtCoures] = useState([])

    const [userSnapshot, setUserSnapshot] = useState([]) 

    

    useEffect(()=>{
        const userRef  = collection(db,"users")
        const usersInfo = []
        getDocs(userRef).then((userSnaps)=>{
            
            
            
            userSnaps.forEach((userSnap)=>{
                
                // console.log(userSnap.id, " => ", userSnap.data());
                usersInfo.push(userSnap.data())
                
            })
            // console.log("this is usersInfor", usersInfo)
            
        })
        .then(()=>{
            setUserSnapshot(usersInfo)
            // console.log("This us userSnapshot", userSnapshot)
        })
        .catch(e=>console.log("This Erro ",e))
        
        
    },[])

    
   
    
    

    return (
        <UserDatabaseContext.Provider value={{userSnapshot,user, userTaughtCourses,setUserTaughtCoures}}>
            {children}
        </UserDatabaseContext.Provider>
    )
}


export const useUserDatabse = ()=> useContext(UserDatabaseContext)