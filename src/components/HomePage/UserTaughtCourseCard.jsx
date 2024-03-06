import React from 'react'
import { deleteCourseTaught, trialFunction1 } from '../Firebase/firestore';
import { useUserDatabse } from '../Context/UserContext'

// console.log("loaded user taught course card")


const UserTaughtCourseCard = ({ courseName = "", academicYear = "", load = "", docid = "" }) => {

  const { setUserTaughtCoures } = useUserDatabse();
  const onDelete = () => {
    deleteCourseTaught(docid).then(() => {
      console.log("successfully DELETED!!!")
    }

    )
    .catch((error)=>{
      console.log("not able to delete the course: ", error)
    })


  }
  return (
    <div className="  w-[500px] min-h-[100px] bg-white/75 text-black/60 rounded overflow-hidden shadow-lg h-52">
      <div className="flex justify-end p-1   ">
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="px-6 py-4">
        <div className="text-black/70 font-bold text-xl mb-2 h-9">Course Name: {courseName}</div>
        <br />
        <p className="text-base mb-3">Academic Year: {academicYear}</p>

        {/* <p className="text-gray-100 text-base">Load: {load}</p> */}
      </div>
    </div>
  );
};

export default UserTaughtCourseCard;