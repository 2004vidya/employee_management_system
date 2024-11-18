import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Current logged-in user
  const [userData, setUserData] = useState([]); // All employee data

  useEffect(() => {
    // Initialize localStorage if not already set
    const storageData = getLocalStorage();
    if (!storageData.employees) {
      setLocalStorage(); // Populate initial data
    }

    // Fetch employees from localStorage
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
