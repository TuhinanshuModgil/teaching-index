import { db } from "./firebase";
import { collection, addDoc, setDoc, doc, getDocs, deleteDoc, where,query, getDoc } from "firebase/firestore";
import { auth } from "./firebase";



// LEGACY
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

//LEGACY
// ---------------Function to add courses to the current user database------------------
export const addCourseToUser = async (taughtCourse) => {
  const user = auth.currentUser;
  try {
    const docRef = await addDoc(collection(db, "users", user.uid, "courses-taught"), {
      uid: user.uid,
      courseName: taughtCourse.courseName,
      teachingIndex: taughtCourse.teachingIndex,
      academicYear: taughtCourse.academicYear



    });
    // console.log("Document written with ID: ", docRef.id);
    
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

// -------------- Function that returns the courses of the given user in a given array of academic year-------------
export const fetchDataOfCourses = async (username, academicYears) => {

  const userColRef = collection(db, "users", username.uid, "courses-taught");
  const q = query(userColRef, where('academicYear', 'in', academicYears));

  try {
    const querySnapshot = await getDocs(q);

    
    console.log("logging querySnapshot: ",querySnapshot)

    return querySnapshot
  } catch (error) {
    console.log("Error in fetching course data from query", error)
  }



}



//-------------------Function to add courses to the current user database (Now also stores its own ID)------------------
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

    return true;
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}


// ----------------Function to add courses to any user by ADMIN --------------------
export const addCourseToUser2 = async (taughtCourse) => {

  const userIdToUse = taughtCourse.forUser
  console.log("This is User Id To use: ",userIdToUse)
  
  try {
    const newDocRef = doc(collection(db, "users", userIdToUse.uid, "courses-taught"));
    console.log("new Doc REF: ", newDocRef.id)
    const data = {
      uid: userIdToUse.uid,
      docid: newDocRef.id,
      courseName: taughtCourse.courseName,
      teachingIndex: taughtCourse.teachingIndex,
      academicYear: taughtCourse.academicYear



    }

    const docRef = await setDoc(newDocRef, data)

    return true;
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e.message);
    return false;
  }
}


// -----------------------Function to test if a given user is ADMIN-------------------
export const adminTest = async()=>{
  const user = auth.currentUser;
  try {
    const docRef = doc(db, "admins", "admin_uids")
    console.log(docRef)
    const snapshot =await getDoc(docRef)

    if (snapshot.exists()) {
      // console.log("Document data:", snapshot.data());
      // console.log("Data Type: ", typeof(snapshot.data()))
      // console.log(user.uid)
      const includesUserID = snapshot.data()["admin_uids"].includes(user.uid);
      console.log("Is user ADMIN: ", includesUserID)
      return includesUserID

    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  } catch (error) {
    console.log("error in getting admin data: ", error.message)
  }

}

// --------------Function to delete a course data from the current user------------------------
export const deleteCourseTaught = async (docid) => {
  const user = auth.currentUser;

  try {
    await deleteDoc(doc(db, "users", user.uid, "courses-taught", docid));
    console.log("succesfully deleted")

  } catch (error) {
    console.log("error in deletion: ", error)
  }
}

export const adminDeleteCourseTaught = async (data) => {
  

  try {
    await deleteDoc(doc(db, "users", data.uid, "courses-taught", data.docid));
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