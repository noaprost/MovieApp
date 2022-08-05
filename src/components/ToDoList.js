import React, { useState } from 'react'

function ToDoList() {
  const [toDo, setToDo] = useState()
  const [toDos, setToDos] = useState([])

  const onChange = (event) => {
    setToDo(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === '') return
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo('')
  }

  console.log(toDos)

  return (
    <div>
      <h1>Welcome To My ToDoList! ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type="text" onChange={onChange} />
        <button>Add ToDo</button>
      </form>
      <hr />
      <ul>
        {toDos !== undefined && toDos
          ? toDos.map((item, index) => <li key={index}>{item}</li>)
          : null}
      </ul>
    </div>
  )
}

export default ToDoList
