import { db } from "./firebase";
import { collection, addDoc,setDoc,doc,getDocs} from "firebase/firestore"; 

import { auth } from "./firebase";




// a function that can add to the taught courses collection
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

export const addCourseToUser = async (taughtCourse)=>{
  const user = auth.currentUser;
  try {
      const docRef = await addDoc(collection(db, "users", user.uid,"courses-taught"), {
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



// this function can be used to create a collection {if it dosent already exists} 
// and then a document {if that doc dosent already exists} inside that collection 
// and then add the given data inside that object
export const trialFunction = async ()=>{
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


// This function will be used to add the user inside the databse 
// when the user first sign ups 
// it will also add a created at and the userName filed inside the user data
// add more user data if you want
export const addUserToDatabase = async ()=>{
  const user = auth.currentUser;
  try {
      const docRef = await setDoc(doc(db, "users", user.uid), {
        createdat: Date.now(),
        userName: user.displayName
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}


// This function gets a snapshot of the collection that is mentioned in it
// This can be used to displat information from database
export const trialFunction1 = async ()=>{
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

