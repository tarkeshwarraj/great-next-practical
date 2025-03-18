import React from 'react'

const Todo = () => {
  return (
   
        <tr className='bg-white border-b dark:bg-gray-400 dark:border'>
            <td className='px-6 py-4'>1</td>
            <td className='px-6 py-4'>study</td>
            <td className='px-6 py-4'>Learn Next Js</td>
            <td className='px-6 py-4'>Pending</td>
            <td className='px-6 py-4 flex gap-1'>
            <button className='py-2 px-4 bg-red-500 text-white '>Delete</button>
            <button className='py-2 px-4 bg-green-500 text-white '>Done</button>
            </td>
          </tr>

  )
}

export default Todo