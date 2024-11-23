import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const {userData, setUserData} = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [tdesc, setTdesc] = useState('');
  const [tdate, setTdate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      taskTitle,
      tdesc,
      tdate,
      category,
      active: false,
      new_task: true,
      failed: false,
      completed: false,
    };

    // Clone and update userData
    const updatedUserData = userData.map((user) => {
      if (user.first_name === assignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          task_counts: {
            ...user.task_counts,
            new_task: (user.task_counts.new_task || 0) + 1,
          },
          
        };
      }
      return user;
    });

    // Update context
    setUserData(updatedUserData);
    console.log('Updated User Data:', updatedUserData);

    // Reset form
    setTaskTitle('');
    setTdesc('');
    setTdate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className="p-5 mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          {/* Task Title Input */}
          <div className="relative">
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="mb-4 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              placeholder=""
            />
            <label className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
              Task Title
            </label>
          </div>

          {/* Due Date Input */}
          <div className="relative">
            <input
              value={tdate}
              onChange={(e) => setTdate(e.target.value)}
              className="mb-4 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="date"
              placeholder=""
            />
            <label className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
              Due Date
            </label>
          </div>

          {/* Assign To Input */}
          <div className="relative">
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="mb-4 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              placeholder=""
            />
            <label className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
              Assign To
            </label>
          </div>

          {/* Category Input */}
          <div className="relative">
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mb-4 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              placeholder=""
            />
            <label className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
              Category
            </label>
          </div>
        </div>

        {/* Task Description and Submit */}
        <div className="relative w-2/5 flex flex-col items-start">
          <textarea
            value={tdesc}
            onChange={(e) => setTdesc(e.target.value)}
            className="mb-4 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            rows="10"
          ></textarea>
          <label className="absolute text-3xl text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
            Description
          </label>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
