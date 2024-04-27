import React from 'react'
import Notes from '../Assets/Icons/notes-1_orig.png'
import Axe from '../Assets/Icons/Axe_NL_Icon.png'

const ToDo = () => {
  return (
    <div className='ToDo'>
      <p>Go to school</p>
      <div>
      <img src={Notes} className='card-icon' alt ="edit" style={{width: '34px'}} />
      <img src={Axe} className='axe-icon' alt="delete" style={{width: '32px'}} />

      </div>
    </div>
  )
}

export default ToDo