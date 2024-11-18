import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data.task_title);
  return (
    <div className="mt-20 block  w-[25%] p-6 bg-yellow-300 border border-gray-200 rounded-lg shadow hover:bg-yellow-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded">{data.category}</h3>
        <h4>{data.task_date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.task_title}</h2>
      <p className="text-small mt-5">{data.task_description}</p>
      <div className="h-full flex justify-between mt-4 ">
        <button className='inline-flex m-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
          Mark as completeed
        </button>
        <button className='"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
          Mark as failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
