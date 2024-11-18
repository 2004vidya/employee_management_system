import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTAsk";
import AllTask from "../Others/AllTask";


const AdminDashboard = (props) => {
  return (
    <div className=" overflow-auto bg-[radial-gradient(80%_50%_at_50%_-20%,_rgb(0,_41,_82),_transparent)] bg-[#05111f] h-screen w-full p-10">
        <Header changeUser={props.changeUser} />
        <CreateTask/>
        <AllTask/>
    </div>
  );
};



export default AdminDashboard;


