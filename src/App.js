import React, { useReducer, useState} from 'react';
 import Tasks from './Tasks';


let DUMMY_TASKS = [
  {name:'study' , duration : 1},
  {name:'food' , duration : 2},

]

const taskReducer = (state , action) =>{
    switch(action.type){   
      case 'ADD_TASK':
        let updatedTask = [...state , {name:action.name , duration : action.duration}];
        return updatedTask;
    }
}



function App() {

  
const [state , dispatch] = useReducer(taskReducer , DUMMY_TASKS);

const [name , setName] = useState('');
const [duration , setDuration] = useState('');

const nameHandler = (event)=>{
 setName(event.target.value);
}


const durationHandler = (event)=>{
  setDuration(event.target.value);
}



  return (
   
   <div>
   <form>
    <label>Task name</label>
    <input type='text' onChange={nameHandler} value={name}/>
    <label>Task duration</label>
    <input type='number' onChange={durationHandler} value={duration}/>
    <button type='submit' onClick={(event)=>{
      event.preventDefault();
      dispatch({type:'ADD_TASK' , name:name ,duration:duration });
      setName('');
      setDuration('');
    }}>Add task</button>
   </form>


   <div>
   {state.map((task)=>{
   return <Tasks task={task}/>
   })}
   </div>

   </div>
  );
}



export default App;
