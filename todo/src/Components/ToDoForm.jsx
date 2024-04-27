import React, {useState} from 'react'

const ToDoForm = () => {
    const [value, setValue] = useState('')
  return (
    <form className='ToDoForm'>
      <input type='text' className='ToDo-Input' 
      placeholder='Write a new task...'/>
      <button type='submit' className='ToDo-btn'>Add Task</button>
    </form>
  )
}

export default ToDoForm