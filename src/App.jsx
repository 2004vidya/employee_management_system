import React, { useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { user, setUser, userData } = useContext(AuthContext);

  useEffect(() => {
    // Load logged-in user from localStorage on app load
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser); // Set user from localStorage
    }
  }, [setUser]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const adminUser = { role: "admin" };
      setUser(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
    } else {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        const employeeUser = { role: "employee", data: employee };
        setUser(employeeUser);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
      } else {
        alert("Invalid credentials");
      }
    }
  };
  

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <>
      {user.role === "admin" && <AdminDashboard changeUser={setUser} />}
      {user.role === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={user.data} />
      )}
    </>
  );
};

export default App;
