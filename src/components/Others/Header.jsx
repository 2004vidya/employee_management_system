import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';


const Header = (props) => {
  // const { userData } = useContext(AuthContext); 
  // const [username, setUsername] = useState('Admin'); // Default to 'Admin'

  // useEffect(() => {
  //   if (userData && userData.first_name) {
  //     setUsername(userData.first_name);
  //   }
  // }, [userData]); 

  // const [username, setUsername] = useState('')
  // if(!userData){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(userData.first_name)
  // }

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()

  }
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium text-white'>Hello <br/><span className='text-3xl font-semibold'>username 😎</span></h1>
        <button onClick={logOutUser} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4'>Logout</button>
    </div>
  )
}

export default Header