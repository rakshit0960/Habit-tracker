import React, { useState } from 'react'

function Inputhabit({onAdd}) {
    const [input, setInput] = useState('');
    
    function add(input) {
        onAdd(input);
        setInput('');
    }

  return (
    <div className='addHabitContainer'>

        <input 
          type={'text'} 
          value={input} 
          placeholder='Add new Habit' 
          onInput={ e =>setInput(e.target.value) } 
          onKeyDown={ e => {if(e.key==='Enter') add(input)} } 
        />

        <button onClick={ e => add(input) } > + </button>

    </div>

  )
}

export default Inputhabit