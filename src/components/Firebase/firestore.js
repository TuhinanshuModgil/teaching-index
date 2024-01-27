import { db } from "./firebase";
import { collection, addDoc, setDoc, doc, getDocs, deleteDoc, where,query } from "firebase/firestore";
import { auth } from "./firebase";



// a function that can add to the taught courses collection
export const addUserCorse = async (taughtCourse) => {
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


export const addCourseToUser = async (taughtCourse) => {
  const user = auth.currentUser;
  try {
    const docRef = await addDoc(collection(db, "users", user.uid, "courses-taught"), {
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

export const fetchDataOfCourses = async (username, academicYears) => {

  const userColRef = collection(db, "users", username.uid, "courses-taught");
  const q = query(userColRef, where('academicYear', 'in', academicYears));

  try {
    const querySnapshot = await getDocs(q);

    
    console.log("logging querySnapshot: ",querySnapshot)

    return querySnapshot
  } catch (error) {
    console.log("Erro in fetching course data from query", error)
  }



}




export const addCourseToUser1 = async (taughtCourse) => {
  const user = auth.currentUser;
  try {
    const newDocRef = doc(collection(db, "users", user.uid, "courses-taught"));
    console.log("new Doc REF: ", newDocRef.id)
    const data = {
      uid: user.uid,
      docid: newDocRef.id,
      courseName: taughtCourse.courseName,
      teachingIndex: taughtCourse.teachingIndex,
      academicYear: taughtCourse.academicYear



    }
    const docRef = await setDoc(newDocRef, data)
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export const deleteCourseTaught = async (docid) => {
  const user = auth.currentUser;

  try {
    await deleteDoc(doc(db, "users", user.uid, "courses-taught", docid));
    console.log("succesfully deleted")

  } catch (error) {
    console.log("error in deletion: ", error)
  }
}



// this function can be used to create a collection {if it dosent already exists} 
// and then a document {if that doc dosent already exists} inside that collection 
// and then add the given data inside that object
export const trialFunction = async () => {
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
export const addUserToDatabase = async () => {
  const user = auth.currentUser;

  try {
    const docRef = await setDoc(doc(db, "users", user.uid), {
      createdat: Date.now(),
      userName: user.displayName,
      uid: user.uid
    });
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


// This function gets a snapshot of the collection that is mentioned in it
// This can be used to displat information from database
export const trialFunction1 = async () => {
  let user;
  try {
    user = await auth.currentUser;
  } catch (error) {
    console.log("error in Trial 1", error)
  }

  const userTaughtCourses = [];
  // console.log("trial fun 1: ", user)
  // console.log("Type of user from trial 1",typeof(user))

  try {


    getDocs(collection(db, "users", user.uid, "courses-taught"))
      .then((snapshots) => {

        snapshots.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          userTaughtCourses.push(doc.data())
          // console.log(doc.id, " => ", doc.data());
        })
        // console.log(snapshots.docs)
      })
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  return userTaughtCourses
}




// console.log("loaded firestore")