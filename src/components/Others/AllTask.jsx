import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const {userData,setUserData} = useContext(AuthContext);

  return (
    <div className=" p-5 mt-5  rounded ">
      <div className="mb-2 bg-[#189ab4]  py-2 px-4 flex justify-between rounded">
        <h2 className=" text-lg font-med w-1/5">Employee Name</h2>
        <h3 className=" text-lg font-med w-1/5 ">New task</h3>
        <h5 className=" text-lg font-med w-1/5 ">Active Task</h5>
        <h5 className=" text-lg font-med w-1/5 ">Completed </h5>
        <h5 className=" text-lg font-med w-1/5 ">Failed </h5>
      </div>
      <div className=" overflow-auto">
        {userData.map((elem,idx) => {
          return (
            <div key={idx} className="mb-2 border-2 text-white text-muted py-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-med w-1/5 ">{elem.first_name}</h2>
              <h3 className="text-lg font-med w-1/5 text-blue-600">{elem.task_counts.new_task}</h3>
              <h5 className="text-lg font-med w-1/5 text-yellow-400">{elem.task_counts.active}</h5>
              <h5 className="text-lg font-med w-1/5 text-white">{elem.task_counts.completed}</h5>
              <h5 className="text-lg font-med w-1/5 text-red-600">{elem.task_counts.failed} </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
