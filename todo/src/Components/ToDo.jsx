import React from 'react'
import Feather from '../Assets/Icons/Feather_Icon.png'
import Can from '../Assets/Icons/Can_Icon.png'

const ToDo = () => {
  return (
    <div className='ToDo'>
        <p>Go to school</p>
      <div className='ToDo-Icons'>
        <img src={Feather} className='feather-icon' alt ="edit" style={{width: '32px'}} />
        <img src={Can} className='can-icon' alt="delete" style={{width: '32px'}} />
      </div>
    </div>
  );
};

export default ToDo