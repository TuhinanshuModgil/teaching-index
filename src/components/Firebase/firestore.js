import { db } from "./firebase";
import { collection, addDoc,setDoc,doc,getDocs} from "firebase/firestore"; 

import { auth } from "./firebase";



export const addUserCorse = async (taughtCourse)=>{
    const user = auth.currentUser;
    try {
        const docRef = await addDoc(collection(db, "taught-courses"), {
          uid: user.uid,
          courseName: taughtCourse.courseName, 
          teachingIndex: taughtCourse.teachingIndex,
          academicYear: taughtCourse.academicYear



        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const trialFunction = async (taughtCourse)=>{
  const user = auth.currentUser;
  try {
      const docRef = await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "India"
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

export const trialFunction1 = async (taughtCourse)=>{
  const user = auth.currentUser;
  try {
      getDocs(collection(db, "taught-courses"))
      .then((snapshots)=>{
        console.log(snapshots.docs)
      })
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

