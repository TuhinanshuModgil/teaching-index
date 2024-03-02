import React, { useEffect, useState } from 'react'
import { useUserDatabse } from '../Context/UserContext'
import Select from 'react-select';


function UserDropdown({lable ="", setUser}) {

    const { userSnapshot } = useUserDatabse()
    const [users, setUsers] = useState([])

    const settingUsers = (selectedOption)=>{
      console.log("This is selected option", selectedOption)
    
      setUser({name:selectedOption.value, uid:selectedOption.uid})
      // setSelfStudy(selectedOption.selfStudy)
      // setCredits(selectedOption.credits)
      // console.log(selectedOption.lecture)
      // console.log(selectedOption.ltpse)
    
    }

    useEffect(()=>{
        setUsers(prev => [])
        userSnapshot.map((userSnap) => {
            // console.log(userSnap)
            
            setUsers((prev)=>([{value: userSnap.userName, label: userSnap.userName, uid: userSnap.uid}, ...prev]))
          })
    },[userSnapshot])
    
    
    
    
    // const defaultAY = courseData[Number(courseData.length)-1]
    
      return (
       
          <div className='flex items-center p-4'>
          <h2 className='w-1/4 text-white/80 '>{lable}</h2>
          
    
          {/* Select component is taken from the react-select package
          Read the documentation from the react-select on npms website to see how to operate */}
          <Select
            
            onChange={settingUsers}
            options={users}
            placeholder="Select Course"
            styles={{  
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? 'grey' : 'blueviolet',
                width: '300px',
                
              }),
              option:(baseStyles,state)=>({
                ...baseStyles,
                color: state.isSelected?'white':'black',
              })
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'green',
                primary: 'black',
              },
            })}
          />
          {/* <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
            onClick={() => console.log(users)}
          >console Log</button> */}
          
        </div>   
        
      )
    }
    

export default UserDropdown
