import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex mt-20 mb-20 justify-between gap-5 '>
        <div className="block w-[25%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{data.task_counts.new_task}</h2>
            <h3 className='font-normal text-gray-700 dark:text-gray-400'>New Task</h3>
        </div>
        <div className='block w-[25%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{data.task_counts.completed}</h2>
            <h3 className='font-normal text-gray-700 dark:text-gray-400'>Completed Task</h3>
        </div>
        <div className='block w-[25%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{data.task_counts.active}</h2>
            <h3 className='font-normal text-gray-700 dark:text-gray-400'>Active Task</h3>
        </div>
        <div className='block w-[25%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{data.task_counts.failed}</h2>
            <h3 className='font-normal text-gray-700 dark:text-gray-400 '>Failed Task</h3>
        </div>
        
    </div>
  )
}

export default TaskNumber