import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-blue-600 px-3 py-1 rounded'>{data.category}</h3>
        <h4>{data.task_date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.task_title}</h2>
    <p className='text-small mt-5'>{data.task_description}</p>
    <div className='mt-4'>
        <button>Accept Task</button>
    </div>
</div>
  )
}

export default NewTask