import React from 'react'

function Habit({index, habit, onDelete}) {
  return (
    <div className='Habit'>
        <div>{index}. {habit}</div>
        <button onClick={(e)=>onDelete(index)}>-</button>    
    </div>
  )
}

export default Habit