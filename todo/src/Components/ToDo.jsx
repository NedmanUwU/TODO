import React from 'react'
import Feather from '../Assets/Icons/Feather_Icon.png'
import Can from '../Assets/Icons/Can_Icon.png'

const ToDo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='ToDo'>
        <p onClick ={() => toggleComplete(task.id)}
          className={`${task.completed ? 'completed' : ''}`}>
          {task.task}</p>
      <div className='ToDo-Icons'>
        <img src={Feather} className='feather-icon' alt ="edit" style={{width: '32px'}} />
        <img src={Can} className='can-icon' alt="delete" style={{width: '32px'}} onClick={()=>
        deleteTodo(task.id)}/>
      </div>
    </div>
  );
};

export default ToDo