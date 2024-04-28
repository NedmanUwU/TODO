import React, {useState} from 'react'
import icon from '../Assets/Icons/bars-icon.svg'

const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    
    const handleSubmit = e => {
      e.preventDefault();

      addTodo(value)

      setValue('')
    };

  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
      <div className='ToDo-Input'>
        <img src={icon} className='Bar-Icon' />
        <input 
        className= 'Input-field' 
        value= {value}
        placeholder='Write a new task...'
        onChange={(e) => setValue(e.target.value)}/>      
          <button type='submit' className='ToDo-btn' onClick={handleSubmit}>
             Add Task!
         </button>
      </div>
    </form>
  )
};

export default ToDoForm