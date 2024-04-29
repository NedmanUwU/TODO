import React from 'react'
import Nook from '../Assets/Icons/Nook.gif'

const MainContent = () => {
  return (
    <div className='Wrapper'>
        <h2>Welcome to Nook's Todo-App!</h2>
        <img src={Nook} style={{width: '500px', borderRadius: '8px'}}/>
        <p>Now, I understand the <b>joy</b> of a peaceful day at home, but it's time 
          to stir up some motivation and get to work! <br /><br />There's nothing 
          quite like the satisfaction of checking tasks off your list and 
          making progress towards <br />your <b>goals.</b></p>
    </div>

  )
}
export default MainContent