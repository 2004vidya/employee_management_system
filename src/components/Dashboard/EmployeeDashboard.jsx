import React from 'react'
import Header from '../Others/Header'
import TaskNumber from '../Others/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='overflow-auto p-20 bg-[radial-gradient(80%_50%_at_50%_-20%,_rgb(0,_41,_82),_transparent)] bg-[#05111f] h-screen w-screen'>
    
        <Header changeUser ={props.changeUser} data={props.data}/>
        <TaskNumber data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard