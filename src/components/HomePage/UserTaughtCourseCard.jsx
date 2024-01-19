import React from 'react'

const UserTaughtCourseCard = ({ courseName="", academicYear="", load="" }) => {
    
    
    const onDelete = ()=>{
        console.log("tried to delete")
    }
    return (
      <div className="  w-[500px] bg-slate-800 rounded overflow-hidden shadow-lg">
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
          <div className="text-gray-100 font-bold text-xl mb-2">Course Name: {courseName}</div>
          <p className="text-gray-100 text-base">Academic Year: {academicYear}</p>
          <p className="text-gray-100 text-base">Load: {load}</p>
        </div>
      </div>
    );
  };
  
  export default UserTaughtCourseCard;