import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import FailedTask from '../TaskList/FailedTask'
import CompleteTask from '../TaskList/CompleteTask'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {

  const {userData,setUserData} = useContext(AuthContext);
  
  const [taskTitle, setTaskTitle] = useState('')
  const [tdesc, setTdesc] = useState('')
  const [tdate, setTdate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler =(e)=>{
    e.preventDefault()
    setNewTask({taskTitle,tdesc,tdate,category,active:false,NewTask:true,FailedTask:false,CompleteTask:false})
    
    const data = userData
    
    
    
    data.forEach((elem) => {
      if(assignTo==elem.first_name){
       elem.tasks.push(newTask)
       elem.task_counts.new_task=elem.task_counts.new_task+1
       
      }
    })
    setUserData(data)
    console.log(data);
    
   
   

    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTdesc('')
    setTdate('')
    
  }

  return (
    <div className="p-5  mt-7 rounded">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}className="flex flex-wrap w-full items-start justify-between">
          
          <div className="w-1/2">
            <div className='relative'>
              
                <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}}  className="mb-4 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="" />
                <label className='absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'>Title Task</label>
             </div>
            <div className='relative'>
                {" "}
                
                <input value={tdate} onChange={(e)=>{setTdate(e.target.value)}} className="mb-4 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  type="date" placeholder='' />
                <label className='absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'>Date</label>
            </div>
            <div className='relative'>
                {" "}
                
                <input value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}} className="mb-4 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  type="text" placeholder="" />
                <label className='absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'>Assign to</label>
            </div>
            <div className='relative'>
                {" "}
                
                <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className="mb-4 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  type="text" placeholder="" />
                <label className='absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'> Category</label>
            </div>

          </div>
          <div className=" relative w-2/5 flex flex-col items-start">
            
            <textarea value={tdesc} onChange={(e)=>{setTdesc(e.target.value)}} className="mb-4 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" name="" id="" cols="30" rows="10"></textarea>
            <label className='absolute text-3xl text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'>DESCRIPTION</label>
           
           
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Create Task</button>
          </div>
         
      
        </form>
      </div>
  )
}

export default CreateTask