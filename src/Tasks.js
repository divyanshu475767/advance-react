import React from 'react'

const Tasks = (props) => {
  return (
    <div>
    <p>{props.task.name}</p>
    <p>{props.task.duration} minutes</p>
  </div>
  )
}

export default Tasks
