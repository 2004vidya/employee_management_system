// import React, { useContext, useEffect, useState } from "react";
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
// import { AuthContext } from "./context/AuthProvider";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [liUserData, setLiUserData] = useState(null);

//   const [userData,setUserData] = useContext(AuthContext);

//   useEffect(()=>{
//     const loggedInUser =localStorage.getItem('loggedInUser')
//     if(loggedInUser){
//       const userData = JSON.parse(loggedInUser)
//       setUser(userData.role)
//       setLiUserData(userData.data)
//     }

//   },[])

 
  
//   const handleLogin = (email, password) => {
//     if (email == "admin@me.com" && password == "123") {
//       setUser({ role: "admin" });
//       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
//     } else if (userData) {
//       const employee = userData.find(
//         (e) => email == e.email && e.password == password
//       );
//       if (employee) {
//         setUser({ role: "employee" });
//         setLiUserData(employee);
//         localStorage.setItem(
//           "loggedInUser",
//           JSON.stringify({ role: "employee",data:employee })
//         );
//       }
//     }
//     // else if(email=='user@me.com'&& password=='123'){
//     //   setUser('employee')
//     // }
//     else {
//       alert("invalid credentials");
//     }
//   };

//   return (
    
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : ""}
//       {/* {user == "admin" ? (
//         <AdminDashboard />
//       ) : (user == "employee" ? (
//         <EmployeeDashboard data={liUserData} />
//       ) :null)} */}
      

//       {user=='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employee'?<EmployeeDashboard changeUser={setUser} data={liUserData}/>:null)}
//       {/* {user!='admin'? <EmployeeDashboard  />:<AdminDashboard/>}/ */}
//       {/* {user!='admin'? (user=='employee'?<EmployeeDashboard data={liUserData}/>:null):<AdminDashboard/>} */}
//     </>
//   );
// };

// export default App;



// import React, { createContext, useEffect, useState } from 'react'
// import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

// export const AuthContext= createContext()

// const AuthProvider = ({children}) => {
//   // localStorage.clear()
//      const [user, setUser] = useState(null);
//     const [userData, setUserData] = useState(null)

//     useEffect(() => {
//       setLocalStorage()
//         const {employees} =getLocalStorage()
//         setUserData(employees)
    
//     }, [])
    
//     // const {employee,admin} =getLocalStorage()
//     // setUserData({employee,admin})

//   return (
//     <div>
//         <AuthContext.Provider value= {[userData,setUserData]}>
//             {children}
//         </AuthContext.Provider>
        
        
//         </div>
//   )
// }

// export default AuthProvider


// createTask submit handler code


// const submitHandler =(e)=>{
//     e.preventDefault()
//     setNewTask({taskTitle,tdesc,tdate,category,active:false,NewTask:true,FailedTask:false,CompleteTask:false})
    
//     const data = userData
    
    
    
//     data.forEach((elem) => {
//       if(assignTo==elem.first_name){
//        elem.tasks.push(newTask)
//        elem.task_counts.new_task=elem.task_counts.new_task+1
       
//       }
//     })
//     setUserData(data)
//     console.log(data);
    
   
   

//     setTaskTitle('')
//     setCategory('')
//     setAssignTo('')
//     setTdesc('')
//     setTdate('')
    
//   }

// tasklist code 


// import React from 'react'
// import AcceptTask from './AcceptTask'
// import NewTask from './NewTask'
// import CompleteTask from './CompleteTask'
// import FailedTask from './FailedTask'

// const TaskList = ({data}) => {
   
    
//   return (
//     <div id='tasklist' className='flex  items-center justify-start gap-10 flex-nowrap h-[55%] w-full py-5  mt-10'>
//        {data.tasks.map((elem, idx)=>{
//         if(elem.active){
//             return <AcceptTask key ={idx} data={elem}/>
//         }
//         if(elem.new_task){
//             return <NewTask key ={idx} data={elem}/>
//         }
//         if(elem.completed){
//             return <CompleteTask key ={idx} data={elem}/>
//         }
//         if(elem.failed){
//             return <FailedTask key ={idx} data={elem}/>
//         }
        
//        })}
       
//     </div>
//   )
// }

// export default TaskList