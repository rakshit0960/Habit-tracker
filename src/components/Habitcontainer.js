import React, { useState } from 'react'
import Habit from './Habit';
import Inputhabit from './Inputhabit';

function Habitcontainer() {
    const [Habits, setHabits] = useState([]);
    
    function addHabit(input) {
      if (input === '') return;
      setHabits([...Habits, input]);
    }
    
    function deleteHabit(index) {
      Habits.splice(index - 1, 1);
      setHabits([...Habits]);
    }

  return (
    <div className='Habitlist'>
        {Habits.length === 0 && <div>Add your first Habits</div>}
      
        {Habits.map((habit, index) => { 
              return (
                <Habit key={index} index={index + 1} habit={habit} onDelete={deleteHabit} />
                )
        })}

      <Inputhabit onAdd={addHabit}/>
    </div>
  )
}

export default Habitcontainer
