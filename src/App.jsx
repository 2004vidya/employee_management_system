import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [liUserData, setLiUserData] = useState(null);

  const [userData,setUserData] = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser =localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLiUserData(userData.data)
    }

  },[])

 
  
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser({ role: "employee" });
        setLiUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee",data:employee })
        );
      }
    }
    // else if(email=='user@me.com'&& password=='123'){
    //   setUser('employee')
    // }
    else {
      alert("invalid credentials");
    }
  };

  return (
    
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* {user == "admin" ? (
        <AdminDashboard />
      ) : (user == "employee" ? (
        <EmployeeDashboard data={liUserData} />
      ) :null)} */}
      

      {user=='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employee'?<EmployeeDashboard changeUser={setUser} data={liUserData}/>:null)}
      {/* {user!='admin'? <EmployeeDashboard  />:<AdminDashboard/>}/ */}
      {/* {user!='admin'? (user=='employee'?<EmployeeDashboard data={liUserData}/>:null):<AdminDashboard/>} */}
    </>
  );
};

export default App;
